import { useState, useEffect } from "react"
import { fetchEmployees } from "../utils/requests"

export const useEmployees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEmployees = async () => {
      const employees = await fetchEmployees()
      setEmployees(employees)
      setLoading(false)
    }

    loadEmployees()
  }, [])

  return { employees, loading }
}
