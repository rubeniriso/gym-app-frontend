"use client";
import React from "react";
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RoutineType } from "@/types/routineType";
import { newRoutineData } from "@/types/data/newRoutineData";
import { DialogFooter } from "@/components/ui/dialog";
import { useDialog } from "@/components/hooks/useDialog";
interface RoutineFormContentProps {
  routineTypes: RoutineType[];
  submitFunction: Function;
  title: string;
  submit_id: string;
}

const RoutineFormContent = ({
  routineTypes,
  submitFunction,
  title,
  submit_id,
}: RoutineFormContentProps) => {
  const form = useForm<z.infer<typeof newRoutineData>>({
    resolver: zodResolver(newRoutineData),
    defaultValues: {
      name: "",
      description: "",
      routinetype_id: "",
    },
  });
  const { onClose } = useDialog();
  function onSubmit(values: z.infer<typeof newRoutineData>) {
    submitFunction(submit_id, values);
    onClose();
  }
  return (
    <>
      <h1 className="text-center font-bold text-md">{title}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Routine name</FormLabel>
                <FormControl>
                  <Input placeholder="Weightlifting rt 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="routinetype_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Routine type</FormLabel>
                <Select
                  defaultValue={field.value.toString()}
                  onValueChange={field.onChange}
                  value={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a routine type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {routineTypes.map((routineType) => (
                      <SelectItem
                        key={routineType.routinetype_id}
                        value={routineType.routinetype_id.toString()}
                      >
                        {routineType.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center justify-center">
            <DialogFooter>
              <Button className="" type="submit">
                Submit
              </Button>
            </DialogFooter>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RoutineFormContent;
