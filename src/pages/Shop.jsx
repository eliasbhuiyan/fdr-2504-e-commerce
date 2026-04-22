import React, { useEffect, useState } from "react";
import SelectInput from "../components/ui/SelectInput";
import ProductCard from "../components/ui/ProductCard";
import { Link, useParams, useSearchParams } from "react-router";
import { useGetCategoryListQuery, useGetProductsQuery } from "../services/api";
import { Pagination } from "../components/ui/Pagination";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [limit, setLimit] = useState(30);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { data, isLoading, error } = useGetProductsQuery({
    limit,
    skip: limit * (pageNum - 1),
    category,
  });
  const { data: categories } = useGetCategoryListQuery();

  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / limit));
    }
  }, [data?.total, limit]);

  const sortOptions = [
    {
      value: "10",
      label: "10",
    },
    {
      value: "30",
      label: "30",
    },
    {
      value: "50",
      label: "50",
    },
    {
      value: "80",
      label: "80",
    },
  ];

  return (
    <main className="py-12">
      <div className="container grid grid-cols-12 gap-14">
        <div className="col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0">
          <h3 className="text-lg font-medium text-primary">
            Related Categories
          </h3>
          <div className="py-6 my-6 border-y-2 border-y-secondary/10">
            <h3 className="text-lg font-medium text-primary">
              Filter by Price
            </h3>
            <input type="range" name="" id="" className="w-full my-6" />
            <p>Price: ৳1000 - ৳2500 </p>
          </div>
          <div className="space-y-1.5">
            {categories?.map((item) => (
              <Link
                to={`/shop?category=${item}`}
                key={item}
                className="block text-base text-secondary capitalize"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-between">
            <p className="font-medium text-lg text-[#424241]/50">
              Showing{" "}
              <span className="text-secondary">
                {limit * (pageNum - 1) + 1} -{" "}
                {data?.total > limit * pageNum ? limit * pageNum : data?.total}
              </span>{" "}
              of <span className="text-secondary">{data?.total}</span> product
            </p>
            <div className="w-fit flex items-center gap-7">
              <p>Display:</p>
              <SelectInput
                className="max-w-20"
                options={sortOptions}
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            {isLoading ? (
              <p>Loading products...</p>
            ) : (
              data?.products?.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))
            )}
          </div>
          <Pagination
            handelChange={(num) => setPageNum(num)}
            pageNum={pageNum}
            totalPage={totalPage}
          />
        </div>
      </div>
    </main>
  );
};

export default Shop;
