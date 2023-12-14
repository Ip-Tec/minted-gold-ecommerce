import Link from "next/link";
import React from "react";

export default function ButtonLink({ children, ...props }) {
  return (
    <Link
      {...props}
      className="border-0 px-5 py-2 rounded cursor-pointer inline-flex items-center text-decoration-none font-poppins font-semibold text-base transition-all duration-300 focus:outline-none focus:border-none focus:ring focus:ring-primary"
    >
      {children}
    </Link>
  );
}
