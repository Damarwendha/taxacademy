"use client";

import { Button, Rating, RatingStar } from "flowbite-react";
import Link from "@/components/Link";

function Checkout({ onCheckout, title, avgRating, totalRatings, price }) {
  return (
    <div className="fixed bottom-0 flex w-screen p-1 bg-gray-900 sm:border-b-2 sm:border-brand-secondary sm:p-6 sm:place-content-between ">
      <div className="hidden w-full sm:inline sm:mr-10">
        <p className="font-bold text-classic-white">{title}</p>
        <Link>
          <Rating>
            <p className="mr-1 text-xs text-yellow-400 no-underline">
              {avgRating}
            </p>
            <RatingStar />
            <p className="ml-1 text-xs underline text-brand-secondary">
              {totalRatings}
            </p>
          </Rating>
        </Link>
      </div>

      <div className="flex items-center justify-end w-screen sm:w-11/12">
        <p className="font-medium text-center w-28 text-classic-white">
          {price}
        </p>
        <Button
          className="flex-grow max-w-xs rounded-none bg-brand-primary rounded-l-3xl hover:bg-brand-secondary"
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
