import React, { useState, useEffect } from "react"
import { Transaction } from "../../utils/types"
import { InputCheckbox } from "../InputCheckbox"

const Transactions = ({ transactions }) => {
  const [localTransactions, setLocalTransactions] = useState<Transaction[]>(transactions)

  const toggleApproval = (id: string, approved: boolean) => {
    setLocalTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, approved } : transaction
      )
    )
  }

  useEffect(() => {
    setLocalTransactions(transactions)
  }, [transactions])

  return (
    <div>
      {localTransactions.map((transaction) => (
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
    </div>
  )
}

export default Transactions
