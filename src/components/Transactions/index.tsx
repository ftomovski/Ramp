import React, { useState, useEffect } from "react"
import { Transaction } from "../../utils/types"
import { InputCheckbox } from "../InputCheckbox"

const Transactions = ({ initialTransactions, totalTransactions }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions)
  const [showViewMore, setShowViewMore] = useState(true)

  const toggleApproval = (id: string, approved: boolean) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, approved } : transaction
      )
    )
  }

  const handleViewMore = async () => {
    const newTransactions = await fetchMoreTransactions() // Fetch additional transactions
    if (newTransactions.length === 0) {
      setShowViewMore(false)
    } else {
      setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions])
    }
  }

  useEffect(() => {
    if (transactions.length >= totalTransactions) {
      setShowViewMore(false)
    }
  }, [transactions, totalTransactions])

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <span>{transaction.merchant}</span>
          <span>{transaction.employee}</span>
          <span>{transaction.amount}</span>
          <span>{transaction.status}</span>
          <span>{transaction.receipt}</span>
          <InputCheckbox
            id={transaction.id}
            checked={transaction.approved}
            onChange={(checked) => toggleApproval(transaction.id, checked)}
          />
        </div>
      ))}
      {showViewMore && <button onClick={handleViewMore}>View More</button>}
    </div>
  )
}

export default Transactions
