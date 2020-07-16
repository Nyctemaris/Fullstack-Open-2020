import axios from 'axios'
const baseURL = 'http://localhost:3001/api/persons'

const fetchAllData = async () => {
    const request = axios.get(baseURL)
    const response = await request
    return response.data
}

const addNewPerson = async (newPersonData) => {
    const request = axios.post(baseURL, newPersonData)
    const response = await request
    return response.data
}

const updateNumber = async (id, newPersonData) => {
    const request = axios.put(`${baseURL}/${id}`, newPersonData)
    const response = await request
    return response.data
}
const deletePerson = async (personId) => {
    const request = axios.delete(`${baseURL}/${personId}`)
    const response = await request
    return response.data
}
export default {fetchAllData, addNewPerson, updateNumber, deletePerson}