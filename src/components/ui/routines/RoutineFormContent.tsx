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
import { DialogFooter } from "../dialog";
import { createRoutine } from "@/model/Routine.model";
import { newRoutineData } from "@/types/data/newRoutineData";
const formSchema = z.object({
  name: z.string().trim().min(1, { message: "The routine must have a name" }),
  description: z.string().optional(),
  routinetype_id: z.string(),
});
interface RoutineFormContentProps {
  routineTypes: RoutineType[];
}

const RoutineFormContent = ({ routineTypes }: RoutineFormContentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      routinetype_id: "0",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(formData: FormData) {
    console.log(formData.get("routinetype_id"));
    createRoutine({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      routinetype_id: formData.get("routinetype_id") as string,
      // TODO: Change User_id from context
      user_id: 1,
    });
  }
  return (
    <>
      <Form {...form}>
        <form action={onSubmit} className="space-y-8">
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
                  defaultValue={field.value}
                  onValueChange={field.onChange}
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
          <div className="flex flex-col items-center justify-center w-full">
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
