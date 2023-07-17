"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import useCountries from "@/hooks/useCountries";
import { searchModalOnOpen } from "@/redux/slices/searchModalSlice";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }
    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) return `${guestCount} Guests`;

    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={() => {
        dispatch(searchModalOnOpen());
      }}
      className="w-full py-2 transition bg-white border rounded-full cursor-pointer text-neutral-900 md:w-auto "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold ">{locationLabel}</div>
        <div className="flex-1 hidden px-6 text-sm font-semibold text-center sm:block">
          {durationLabel}
        </div>
        <div className="flex items-center gap-3 pl-6 pr-2 text-sm">
          <div className="hidden text-gray-500 sm:block ">{guestLabel}</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
