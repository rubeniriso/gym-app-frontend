"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ReactNode, useEffect, useState } from "react";
import ModalForm from "../form/ModalForm";
import RoutineFormContent from "./RoutineFormContent";
import { RoutineType } from "@/types/routineType";
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
    >
      <RoutineFormContent routineTypes={routineTypes} />
    </ModalForm>
  );
};

export default AddRoutineThumbnail;
