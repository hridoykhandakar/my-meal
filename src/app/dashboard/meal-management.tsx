"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  mealType: z.enum(["day", "night"], {
    required_error: "You need to select a meal type.",
  }),
  count: z.string().min(1, { message: "Count is required" }),
  isGuest: z.boolean().default(false),
});

export function MealManagement() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mealType: "day",
      count: "",
      isGuest: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Meal recorded",
        description: `${values.count} ${values.mealType} meal(s) recorded for ${
          values.isGuest ? "guest" : "member"
        }.`,
      });
      form.reset({ mealType: "day", count: "", isGuest: false });
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Record Meals</CardTitle>
        <CardDescription>
          Log day and night meals for members and guests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="mealType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Meal Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="day" />
                        </FormControl>
                        <FormLabel className="font-normal">Day Meal</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="night" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Night Meal
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="count"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meal Count</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter meal count"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isGuest"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Guest Meal</FormLabel>
                    <FormDescription>
                      Toggle if this meal is for a guest
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Recording..." : "Record Meal"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
