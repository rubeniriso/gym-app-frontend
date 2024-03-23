"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ReactNode, useEffect, useState } from "react";
import ModalForm from "../form/ModalForm";
import { RoutineType } from "@/types/routineType";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import RoutineFormContent from "./RoutineFormContent";
import { createRoutine } from "@/model/Routine.model";

interface EditRoutineButtonProps {
  routineTypes: RoutineType[]; // ReactNode represents any valid React child: JSX, string, array, etc.
}

const EditRoutineButton = ({ routineTypes }: EditRoutineButtonProps) => {
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
      dialogTrigger={<DropdownMenuItem>Edit</DropdownMenuItem>}
    >
      <RoutineFormContent
        submitFunction={createRoutine}
        routineTypes={routineTypes}
      />
    </ModalForm>
  );
};

export default EditRoutineButton;
