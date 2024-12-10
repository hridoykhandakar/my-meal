// DateInput.tsx
import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

interface DateInputProps {
  control: Control<FieldValues>;
  name: string;
}

const DateInput: React.FC<DateInputProps> = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: "Date is required",
        validate: {
          isValidDate: (value) => {
            const regex =
              /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20[0-9]{2})$/;
            return regex.test(value) || "Date must be in DD/MM/YYYY format";
          },
        },
      }}
      render={({ field, fieldState }) => (
        <div>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            {...field}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
          />
          {fieldState.error && (
            <p className="text-red-500">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default DateInput;
