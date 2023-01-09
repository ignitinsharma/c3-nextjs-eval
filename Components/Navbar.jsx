import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbardiv">
      <Link href="/">Nitin</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/experience">Experience</Link>
    </div>
  );
};

export default Navbar;
