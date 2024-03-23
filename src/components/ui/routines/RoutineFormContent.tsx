"use client";
import React from "react";
import {
  Form,
  FormItem,
  FormControl,
  FormDescription,
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
} from "../select";
import { RoutineType } from "@/types/routineType";
import { createRoutine } from "@/model/Routine.model";
import { newRoutineData } from "@/types/data/newRoutineData";
interface RoutineFormContentProps {
  routineTypes: RoutineType[];
  submitFunction: Function;
}

const RoutineFormContent = ({
  routineTypes,
  submitFunction,
}: RoutineFormContentProps) => {
  const form = useForm<z.infer<typeof newRoutineData>>({
    resolver: zodResolver(newRoutineData),
    defaultValues: {
      name: "",
      description: "",
      routinetype_id: "0",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof newRoutineData>) {
    submitFunction(1, values);
  }
  return (
    <>
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
                <FormLabel>Email</FormLabel>
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
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center justify-center">
            <Button className="" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RoutineFormContent;
