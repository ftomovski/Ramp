import { useMemo } from "react"
import { Button, Table, PageLoader, InputSelect } from "../components"
import { useTransactionsByEmployee, useEmployeesContext } from "../../hooks"
import { transactionToRow } from "../../utils/requests"
import { TransactionFilters, TransactionsFilterOption } from "../../utils/types"

type TransactionPaneProps = {
  filter: TransactionFilters
  onFilterChange: (newFilter: TransactionFilters) => void
}

export function TransactionPane({ filter, onFilterChange }: TransactionPaneProps) {
  const { transactions, toggleTransactionApproval, loading, fetchMoreTransactions } =
    useTransactionsByEmployee(filter.employeeId)
  const { employees, loading: isLoadingEmployees } = useEmployeesContext()

  const filterOptions = useMemo<TransactionsFilterOption[]>(() => {
    const employeeOptions = employees.map((employee) => ({
      label: employee.name,
      value: employee.id,
    }))

    return [{ label: "All Employees", value: "all" }, ...employeeOptions]
  }, [employees])

  return (
    <div className="RampGrid--container">
      <div className="RampGrid--item RampGrid--item-12">
        <InputSelect
          label="Filter by employee"
          items={filterOptions}
          defaultValue={filterOptions[0]}
          onChange={(selectedOption) => onFilterChange({ employeeId: selectedOption.value })}
          isLoading={isLoadingEmployees}
          loadingLabel="Loading employees"
        />
      </div>
      <div className="RampGrid--item RampGrid--item-12">
        <Table
          columns={[
            { label: "Merchant", field: "merchant" },
            { label: "Employee", field: "employee" },
            { label: "Amount", field: "amount" },
            { label: "Status", field: "status" },
            { label: "Receipt", field: "receipt" },
            { label: "Approve", field: "approve" },
          ]}
          data={transactions.map((transaction) =>
            transactionToRow(transaction, toggleTransactionApproval)
          )}
          isLoading={loading}
        />
      </div>
      <div className="RampGrid--item RampGrid--item-12">
        <Button onClick={fetchMoreTransactions}>View More</Button>
      </div>
    </div>
  )
}
