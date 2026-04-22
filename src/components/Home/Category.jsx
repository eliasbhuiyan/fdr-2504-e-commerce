import React from "react";
import { FaShirt } from "react-icons/fa6";
import {
  MdArrowForwardIos,
  MdOutlineHealthAndSafety,
  MdOutlineToys,
} from "react-icons/md";
import { Link } from "react-router";
import { useGetCategoryListQuery } from "../../services/api";

const Category = () => {
  const { data } = useGetCategoryListQuery();

  return (
    <section className="py-12">
      <div className="container">
        <h3 className="sub_head">Category</h3>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {data?.map((item) => (
            <Link
              key={item}
              to={`/shop?category=${item}`}
              className="p-4 shadow flex items-center rounded-xl"
            >
              <p className="pl-2.5 font-normal text-base text-secondary capitalize">
                {item}
              </p>
              <MdArrowForwardIos className="text-[#999999] ml-auto" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
