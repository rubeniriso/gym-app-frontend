"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "../../dialog";
import { useToast } from "../../use-toast";
interface DeleteFormProps {
  submitFunction: Function;
  title: string;
  submit_id: string;
}

const DeleteFormContent = ({
  submitFunction,
  title,
  submit_id,
}: DeleteFormProps) => {
  const { toast } = useToast();
  async function onSubmit() {
    const status = await submitFunction(submit_id);
    console.log(status);
    if (status == 200) toast({ title: "Routine succesfully deleted!" });
    else toast({ title: "Server error" });
  }
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="flex flex-row items-center justify-center">
          <DialogClose asChild>
            <Button className="" type="submit">
              Submit
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={"secondary"}>Close</Button>
          </DialogClose>
        </div>
      </form>
    </>
  );
};

export default DeleteFormContent;
