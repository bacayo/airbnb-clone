"use client";

import React from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <div
      className="px-4 py-2 font-semibold transition hover:bg-neutral-700"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
