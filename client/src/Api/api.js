import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:4000/users';

export const getApplications = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addApplication = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteApplication = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editApplication = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}