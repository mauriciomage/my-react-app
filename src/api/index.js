import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-expenses-mage.cloudfunctions.net/app/api',
});

export const insertExpense = payload => api.post(`/expense`, payload)
export const getAllExpenses = () => api.get(`/expenses`)
export const updateExpenseById = (id, payload) => api.put(`/expense/${id}`, payload)
export const deleteExpenseById = id => api.delete(`/expense/${id}`)
export const getExpenseById = id => api.get(`/expense/${id}`)

const apis = {
    insertExpense,
    getAllExpenses,
    updateExpenseById,
    deleteExpenseById,
    getExpenseById,
}

export default apis