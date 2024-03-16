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

const formSchema = z.object({
  routineName: z
    .string()
    .trim()
    .min(1, { message: "The routine must have a name" }),
  description: z.string().optional(),
  routineType: z.number(),
});
interface RoutineFormContentProps {
  routineTypes: RoutineType[];
  handleFormSubmit: any;
}

const RoutineFormContent = ({
  handleFormSubmit,
  routineTypes,
}: RoutineFormContentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      routineName: "",
      description: "",
      routineType: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="z-20 relative px-8 py-6 lg:min-w-[500px] bg-slate-100 bg-opacity-100">
      <h1 className="w-full text-center font-bold uppercase text-xl pb-4">
        New Routine
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="routineName"
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
            name="routineType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  className="z-[100]"
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
            <Button className="" type="submit" onSubmit={handleFormSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RoutineFormContent;
