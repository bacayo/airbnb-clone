"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {},
        // change bgcolor and text color
      }}
    />
  );
};

export default ToasterProvider;
