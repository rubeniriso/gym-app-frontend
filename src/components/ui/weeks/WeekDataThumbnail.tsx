import { getWeekData } from "@/model/Week.model";
import { Week } from "@/types/week";
import { useEffect, useState } from "react";

interface WeekDataThumbnailProps {
  weekId: string;
}

const WeekDataThumbnail = async ({ weekId }: WeekDataThumbnailProps) => {
  const weekData: Week = await getWeekData(weekId);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      {weekData?.week_id ? (
        <>
          <h3 className="text-xl font-semibold text-gray-900">
            {weekData?.name}
          </h3>
          <p className="text-gray-600">{weekData?.description}</p>
        </>
      ) : (
        <div className="flex items-center justify-center h-24">
          <svg
            className="animate-spin h-5 w-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span className="ml-2 text-gray-600">Loading week data ...</span>
        </div>
      )}
    </div>
  );
};

export default WeekDataThumbnail;
