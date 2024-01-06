import React from "react";
import Image from "next/image";

function ComponentAds2() {
  return (
    <div className="w-full h-full m-auto flex justify-center items-center">
      <Image
        src="/logo.jpg"
        alt=""
        priority
        width={2000}
        height={800}
        style={{ height: "28rem", width: "100%" }}
      />
    </div>
  );
}

export default ComponentAds2;
