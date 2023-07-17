"use client";

import React from "react";
import { Range } from "react-date-range";
import Calendar from "../Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  dateRange,
  disabledDates,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
  disabled,
}: ListingReservationProps) => {
  return (
    <div className="overflow-hidden border bg-neutral-900 border-rose-300 rounded-xl text-gray-200-900">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="font-light ">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center justify-between p-4 text-lg font-semibold">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
