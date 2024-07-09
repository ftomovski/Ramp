import { Transaction } from "./types"
import { InputCheckbox } from "../components/InputCheckbox"

export const transactionToRow = (transaction: Transaction, toggleTransactionApproval) => ({
  ...transaction,
  approve: (
    <InputCheckbox
      id={transaction.id}
      checked={transaction.approved}
      onChange={(checked) => toggleTransactionApproval(transaction.id, checked)}
    />
  ),
})
