"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex gap-16">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/register">
              <li>Register</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
            <Link href="/countries">
              <li>Countries</li>
            </Link>
            <Link href="/createPost">
              <li>CreatePost</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
