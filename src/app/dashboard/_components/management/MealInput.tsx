"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

interface MealInputProps {
  control: Control<FieldValues>;
  name: string;
}

export default function MealInput({ control, name }) {
  const [number, setNumber] = useState(0);

  const handleButtonClick = (num: number) => {
    setNumber(num);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: "required",
      }}
      render={({ field }) => (
        <div className="w-full max-w-sm mx-auto space-y-4">
          <div className="flex justify-between">
            {[0, 1, 2, 3].map((num) => (
              <Button
                key={num}
                onClick={() => handleButtonClick(num)}
                variant="outline"
              >
                {num}
              </Button>
            ))}
          </div>

          <Input
            type="text"
            {...field}
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            placeholder="Enter numbers"
            className="text-center"
          />
        </div>
      )}
    />
  );
}
