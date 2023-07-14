import React from "react";
import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory = ({
  description,
  icon: Icon,
  label,
}: ListingCategoryProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-gray-200" />
        <div className="text-lg font-semibold ">{label}</div>
        <div className="font-light text-gray-200">{description}</div>
      </div>
    </div>
  );
};

export default ListingCategory;
