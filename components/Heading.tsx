"use client";

import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, center, subtitle }: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold text-gray-200">{title}</div>
      <div className="mt-2 font-light text-neutral-300">{subtitle}</div>
    </div>
  );
};

export default Heading;
