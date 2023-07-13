"use client";

import React, { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter = ({ onChange, subtitle, title, value }: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col ">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-400">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex items-center justify-center w-10 h-10 text-gray-200 transition border rounded-full cursor-pointer border-neutral-600 hover:opacity-80"
          onClick={onReduce}
        >
          <AiOutlineMinus className="text-white" />
        </div>
        <div className="text-xl font-light ">{value}</div>
        <div
          className="flex items-center justify-center w-10 h-10 text-gray-200 transition border rounded-full cursor-pointer border-neutral-600 hover:opacity-80"
          onClick={onAdd}
        >
          <AiOutlinePlus className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
