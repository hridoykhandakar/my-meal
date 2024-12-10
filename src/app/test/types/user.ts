export interface User {
  id: string;
  name: string;
}

export interface MealEntry {
  name: string;
  userID: string;
  date: string;
  meal: number;
}
