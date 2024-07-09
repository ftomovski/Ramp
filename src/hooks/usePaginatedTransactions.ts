import { useState, useEffect } from "react"
import { fetchPaginatedTransactions } from "../utils/requests"
import { Transaction } from "../utils/types"

export const usePaginatedTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTransactions = async () => {
      setLoading(true)
      const newTransactions = await fetchPaginatedTransactions()
      setTransactions(newTransactions)
      setLoading(false)
    }

    loadTransactions()
  }, [])

  const fetchMoreTransactions = async () => {
    setLoading(true)
    const newTransactions = await fetchPaginatedTransactions()
    setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions])
    setLoading(false)
  }

  return {
    data: transactions,
    loading,
    fetchMoreTransactions,
    invalidateData: () => setTransactions([]),
  }
}
