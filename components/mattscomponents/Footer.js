import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-8 bg-[#00a87e]">
      <div className="bg-[#00a87e] h-60 text-white w-11/12 justify-center mx-[5%]">
        <div className="flex justify-between flex-row">
          <div className="flex flex-col flex-wrap pt-4 pr-24 pl-6">
            <p className="font-medium text-lg pb-1">Shop</p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              How it works
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Explore
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Trust & safety
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Safe trade spots
            </p>
            <p className="text-sm font-light pt-12">© 2022 OfferUp Inc.</p>
          </div>
          <div className="flex flex-col pt-4 pr-24">
            <p className="font-medium text-lg">Sell</p>
            <Link href ={"postitem"}>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Post an item
            </p>
            </Link>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Auto dealerships
            </p>
          </div>
          <div className="flex flex-col pt-4 pr-24">
            <p className="font-medium text-lg">About</p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Our story
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Careers
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Press
            </p>
          </div>
          <div className="flex flex-col pt-4 pr-24">
            <p className="font-medium text-lg">Help</p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Help center
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Community
            </p>
            <p className="underline text-sm font-light hover:decoration-gray-500 pb-1">
              Blog
            </p>
          </div>
          <div className="flex flex-col pt-4 pr-24">
            <div className="text-xl border-2 rounded-2xl max-h-12 w-28 pl-0.5 hover:bg-emerald-300 mt-10 ml-[50%]">
              Get the app
            </div>
            <p className="underline text-sm font-light hover:decoration-gray-500 mt-24">
              Terms of Service / Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
