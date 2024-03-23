"use client";
import { Routine } from "@/types/routine";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { activateUserRoutine } from "@/model/User.model";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditRoutineButton from "./EditRoutineButton";
import { RoutineType } from "@/types/routineType";
interface RoutineInfoBoxProps {
  name: string;
  description: string;
  isActive: boolean;
  handleChange: () => void;
  routineTypes: RoutineType[];
}
const RoutineInfoBox = async ({
  name,
  description,
  isActive,
  handleChange,
  routineTypes,
}: RoutineInfoBoxProps) => {
  return (
    <>
      <div className="max-w-[300px] max-h-[300px] flex flex-row px-6 justify-between py-4 border-t">
        <div>
          <h2>{name}</h2>
          <p className="overflow-x-clip">{description}</p>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <DotsHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Routine</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <EditRoutineButton routineTypes={routineTypes} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Label></Label>
        <Switch
          className="absolute top-4 right-4"
          checked={isActive}
          onClick={handleChange}
        />
      </div>
    </>
  );
};

export default RoutineInfoBox;
