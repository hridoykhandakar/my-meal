"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export function AddMealCount() {
  const { toast } = useToast();
  const [mealType, setMealType] = useState("day");
  const [count, setCount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Submitting meal count:", { mealType, count });
    toast({
      title: "Meal count added",
      description: `Added ${count} ${mealType} meals.`,
    });
    setCount("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Meal Count</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="meal-type">Meal Type</Label>
            <RadioGroup
              id="meal-type"
              value={mealType}
              onValueChange={setMealType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="day" />
                <Label htmlFor="day">Day Meal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="night" id="night" />
                <Label htmlFor="night">Night Meal</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="count">Count</Label>
            <Input
              id="count"
              type="number"
              placeholder="Enter meal count"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Add Meal Count</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
