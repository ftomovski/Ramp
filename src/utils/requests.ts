import { Transaction } from "./types"
import { InputCheckbox } from "../components/InputCheckbox"

export const transactionToRow = (
  transaction: Transaction,
  toggleTransactionApproval: (id: string, approved: boolean) => void
) => {
  return {
    id: transaction.id,
    merchant: transaction.merchant,
    employee: transaction.employee,
    amount: transaction.amount,
    status: transaction.status,
    receipt: transaction.receipt,
    approve: (
      <InputCheckbox
        key={transaction.id}
        id={transaction.id}
        checked={transaction.approved}
        onChange={(checked) => toggleTransactionApproval(transaction.id, checked)}
      />
    ),
  }
}
