"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ReactNode, useEffect, useState } from "react";
import ModalForm from "../form/ModalForm";
import RoutineFormContent from "./RoutineFormContent";
import { RoutineType } from "@/types/routineType";
import { createRoutine } from "@/model/Routine.model";
interface AddRoutineThumbnailProps {
  routineTypes: RoutineType[]; // ReactNode represents any valid React child: JSX, string, array, etc.
}

const AddRoutineThumbnail = ({ routineTypes }: AddRoutineThumbnailProps) => {
  const [isNewRoutineModalOpen, setIsNewRoutineModalOpen] =
    useState<boolean>(false);
  const handleOpenNewRoutineModal = () => {
    setIsNewRoutineModalOpen(true);
  };
  const handleCloseNewRoutineModal = () => {
    setIsNewRoutineModalOpen(false);
  };
  return (
    <ModalForm
      isOpen={isNewRoutineModalOpen}
      onClose={handleCloseNewRoutineModal}
      hasCloseBtn={true}
      dialogTrigger={
        <button className="flex flex-row items-center justify-center w-[300px] h-[400px] bg-slate-200">
          <AddCircleOutlineIcon width={700} height={700} />
        </button>
      }
    >
      <RoutineFormContent
        submitFunction={createRoutine}
        routineTypes={routineTypes}
      />
    </ModalForm>
  );
};

export default AddRoutineThumbnail;
