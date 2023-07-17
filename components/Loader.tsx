"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70ch] flex flex-col justify-center items-center">
      <PuffLoader size={100} color="#e11d48" />
    </div>
  );
};

export default Loader;
