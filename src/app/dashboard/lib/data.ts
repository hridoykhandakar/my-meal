export const currentUser = {
  id: "user1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Member",
  balance: -50.25,
  totalMealsConsumed: 45,
  totalMarketExpenses: 150.75,
  recentMeals: [
    { date: "2023-06-01", type: "Day", count: 1 },
    { date: "2023-06-01", type: "Night", count: 1 },
    { date: "2023-05-31", type: "Day", count: 1 },
    { date: "2023-05-30", type: "Night", count: 1 },
    { date: "2023-05-30", type: "Day", count: 1 },
  ],
  recentExpenses: [
    { date: "2023-06-01", amount: 25.50, items: "Vegetables, Fruits" },
    { date: "2023-05-28", amount: 45.75, items: "Rice, Oil, Spices" },
    { date: "2023-05-25", amount: 30.00, items: "Chicken, Fish" },
    { date: "2023-05-22", amount: 49.50, items: "Groceries" },
  ],
}

