"use client";
import { Routine } from "@/types/routine";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import ModalForm from "../form/ModalForm";
import RoutineFormContent from "./RoutineFormContent";

const AddRoutineThumbnail = async () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenRoutineForm = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div
        className="flex flex-row items-center justify-center w-[400px] h-[400px] bg-slate-200"
        onClick={handleOpenRoutineForm}
      >
        <AddCircleOutlineIcon width={400} height={400} />
      </div>
      <ModalForm isOpen={isModalOpen}>
        <RoutineFormContent />
      </ModalForm>
    </div>
  );
};

export default AddRoutineThumbnail;
