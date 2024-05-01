"use client";
import { useDialog } from "@/components/hooks/useDialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

const UpdateTrainingDayForm = ({ submitFunction, submit_id }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const { onClose } = useDialog();
  function onSubmit(values: z.infer<typeof newtrainingDayData>) {
    submitFunction(submit_id, values);
    onClose();
  }
  return (
    <>
      <h1 className="text-center font-bold text-md">Update training day</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Training day name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter new training day name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Training day description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter new training day description"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center justify-center">
            <Button className="" type="submit">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UpdateTrainingDayForm;
