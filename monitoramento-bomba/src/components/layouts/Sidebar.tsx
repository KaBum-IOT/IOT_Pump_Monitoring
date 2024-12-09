import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Sidebar() {

  return (
    <aside className="sidebar">
      <div className="w-full flex flex-col items-center">
        <Image src="/images/logo1.png" width={150} height={0}
          className="mb-4 rounded-lg" alt="Logotipo"
        />
      </div>
      <Navbar />
    </aside>
  );
}