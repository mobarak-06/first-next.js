"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h2>this is about page / route </h2>
      <Link href="/about/address" className="text-2xl font-semibold">
        Address Page
      </Link>
      <p type="button">
        <button onClick={handleNavigation}>Address Page</button>
      </p>
    </div>
  );
}
