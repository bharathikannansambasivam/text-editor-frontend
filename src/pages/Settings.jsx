import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function Settings() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <WrenchScrewdriverIcon className="h-16 w-16 text-gray-400 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-700">
        Under Construction
      </h1>
      <p className="mt-2 text-gray-500">
        This feature will be available in a future update.
      </p>
    </div>
  );
}
