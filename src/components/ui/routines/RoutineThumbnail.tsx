"use client";

import Image from "next/image";
import Link from "next/link";
interface RoutineThumbnailProps {
  icon_url: string;
  icon_alt_text: string;
  routine_id: string;
}
const RoutineThumbnail = async ({
  icon_url,
  icon_alt_text,
  routine_id,
}: RoutineThumbnailProps) => {
  return (
    <>
      {icon_url !== undefined ? (
        <Link
          href={{
            pathname: `/routines/${routine_id}/week/day-trainings`,
            query: { week_id: "" },
          }}
        >
          <Image
            className="rounded-xl"
            alt={icon_alt_text}
            src={icon_url}
            width={300}
            height={300}
          />
        </Link>
      ) : (
        <div className="w-[300px] h-[300px]"></div>
      )}
    </>
  );
};

export default RoutineThumbnail;
