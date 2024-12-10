"use client";
import { useEffect } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
}

interface MealEntry {
  name: string;
  userID: string;
  date: string;
  meal: number;
}
export function MealManagement() {
  // const [users, setUsers] = useState<User[]>([]);
  const { register, control, handleSubmit, setValue, watch, reset } = useForm<{
    entries: MealEntry[];
  }>();
  const { fields, append } = useFieldArray({
    control,
    name: "entries",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setValue("entries", []); // Clear existing entries

        data.forEach((user: User) => {
          append({
            name: user.name,
            userID: user.id,
            date: format(new Date(), "yyyy-MM-dd"),
            meal: 0, // Default meal value
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [append, setValue]);

  const onSubmit: SubmitHandler<{ entries: MealEntry[] }> = (data) => {
    console.log(data);
    reset();
    // Here you would send the data to your API
  };

  const handleMealButtonClick = (index: number, value: number) => {
    setValue(`entries.${index}.meal`, value); // Update the meal value
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" ">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">User Meal Form</CardTitle>
        </CardHeader>
        <CardContent>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border p-2 rounded-md last:border-b-0"
            >
              <div className="space-y-4">
                <div>
                  <Label className="text-sm ">Name</Label>
                  <div className="flex lg:block ">
                    <div className="p-2 font-bold">{field.name}</div>
                    <input
                      type="hidden"
                      {...register(`entries.${index}.name`)}
                    />
                    <Input
                      type="date"
                      disabled={true}
                      {...register(`entries.${index}.date`)}
                      id={`entries.${index}.date`}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor={`entries.${index}.meal`}
                    className="text-sm font-medium"
                  >
                    Meal
                  </Label>
                  <div className="flex space-x-2 mt-1 mb-2">
                    {[0, 1, 2, 3].map((num) => (
                      <Button
                        key={num}
                        type="button"
                        onClick={() => handleMealButtonClick(index, num)}
                        variant="outline"
                        size="sm"
                        className={`
        ${
          watch(`entries.${index}.meal`) === num
            ? "bg-primary text-primary-foreground"
            : ""
        }`}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    {...register(`entries.${index}.meal`, {
                      valueAsNumber: true,
                    })}
                    id={`entries.${index}.meal`}
                  />
                </div>
              </div>
            </div>
          ))}
          <Button type="submit" className="w-full md:w-fit mt-4">
            Submit
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
