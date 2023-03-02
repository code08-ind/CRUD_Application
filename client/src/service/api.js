import axios from 'axios';

// api is taken from backend
const URL = "http://localhost:8000";

// user is added, the api is called
export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while calling add user API ", error);
    }
}

// all the users are obtained up
export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all/`);
    } catch (error) {
        console.log("Error while calling users: " + error);
    }
}

// a particular user is obtained from a id
export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling user: " + error);
    }
}

// edit a user with a particular id
export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log("Error while editing user: " + error);
    }
}

// delete a user with a particular id
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while deleting user: " + error);
    }
}
