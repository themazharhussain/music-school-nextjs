"use client";
import Link from "next/link";
import { webinars } from "../data/webinars";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcommingWebinars() {
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Music Journey
          </p>
        </div>
      </div>

      <div className="mt-10 mx-8">
        <HoverEffect items={webinars} />
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/webinars"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  );
}

export default UpcommingWebinars;
