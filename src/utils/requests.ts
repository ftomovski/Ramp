import { Transaction, Employee } from "./types"

// Simulated API request for employees
export const fetchEmployees = async (): Promise<Employee[]> => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    { id: "1", firstName: "John", lastName: "Doe" },
    { id: "2", firstName: "Jane", lastName: "Smith" },
  ]
}

// Simulated API request for paginated transactions
export const fetchPaginatedTransactions = async (): Promise<Transaction[]> => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      id: "1",
      merchant: "Amazon",
      employee: "John Doe",
      amount: "$100",
      status: "Completed",
      receipt: "Receipt1",
      approved: false,
    },
    {
      id: "2",
      merchant: "Apple",
      employee: "Jane Smith",
      amount: "$200",
      status: "Pending",
      receipt: "Receipt2",
      approved: true,
    },
  ]
}

// Simulated API request for transactions by employee
export const fetchTransactionsByEmployee = async (employeeId: string): Promise<Transaction[]> => {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    {
      id: "1",
      merchant: "Amazon",
      employee: "John Doe",
      amount: "$100",
      status: "Completed",
      receipt: "Receipt1",
      approved: false,
    },
    {
      id: "2",
      merchant: "Apple",
      employee: "John Doe",
      amount: "$200",
      status: "Pending",
      receipt: "Receipt2",
      approved: true,
    },
  ]
}
