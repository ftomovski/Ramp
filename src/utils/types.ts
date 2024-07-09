export type Transaction = {
  id: string
  merchant: string
  employee: string
  amount: string
  status: string
  receipt: string
  approved: boolean
}

export type TransactionFilters = {
  employeeId?: string
  status?: string
}

export type TransactionsFilterOption = {
  label: string
  value: string
}

export type InputCheckboxComponent = (props: {
  id: string
  checked: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}) => JSX.Element
