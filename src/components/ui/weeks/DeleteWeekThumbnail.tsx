"use client";
import { deleteWeek } from "@/model/Week.model";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DeleteWeekProps {
  weekId: string;
  routine_id: string;
}

const DeleteWeekThumbnail = ({ weekId, routine_id }: DeleteWeekProps) => {
  const router = useRouter();

  const handleWeekDeletion = (weekId: string, routine_id: string) => {
    deleteWeek(weekId);
  };

  return (
    <Button
      className="mt-5"
      variant="destructive"
      type="button"
      onClick={() => handleWeekDeletion(weekId, routine_id)}
    >
      Delete week
    </Button>
  );
};

export default DeleteWeekThumbnail;
