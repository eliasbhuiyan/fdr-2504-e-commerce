import React, { useState } from "react";
import Button from "./Button";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export function Pagination({ handelChange, pageNum, totalPage }) {
  const next = () => {
    if (pageNum === totalPage) return;

    handelChange(pageNum + 1);
  };

  const prev = () => {
    if (pageNum === 1) return;

    handelChange(pageNum - 1);
  };

  return (
    <div className="flex items-center gap-4 mt-10 justify-center">
      <Button
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={pageNum === 1}
      >
        <BiArrowFromRight strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPage)].map((i, indx) => (
          <Button
            variant={pageNum == (indx + 1) ? "primary": "secondary"}
            className="rounded-full"
            onClick={() => handelChange(indx + 1)}
          >
            {indx + 1}
          </Button>
        ))}
      </div>
      <Button
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={pageNum === totalPage}
      >
        Next
        <BiArrowFromLeft strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
