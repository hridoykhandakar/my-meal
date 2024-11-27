"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function AddMarketExpense() {
  const [date, setDate] = useState("")
  const [items, setItems] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Submitting market expense:", { date, items, amount })
    toast({
      title: "Market expense submitted",
      description: `Expense of $${amount} for ${items} on ${date} has been submitted for approval.`,
    })
    setDate("")
    setItems("")
    setAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Market Expense</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date of Purchase</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="items">Items Purchased</Label>
            <Textarea
              id="items"
              placeholder="Enter items (name and quantity)"
              value={items}
              onChange={(e) => setItems(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Total Cost</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter total cost"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Expense</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

