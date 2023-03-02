import { editUser, getUser } from '../service/api';
import React, { useState, useEffect } from 'react';
import { FormControl, FormGroup, Input, InputLabel, styled, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

// for styling
const Container = styled(FormGroup)`
  width:50%;
  margin:5% auto 0 auto;
  & > div{
    margin-top:20px;
  }
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
};

const EditUser = () => {
    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

//   load the pre edition details of a user
    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data[0]);
    }

//     when a value is changed up in an input box
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

//     user details are edited up
    const editUserDetails = async () => {
        await editUser(user, id);
        navigate("/all");
    }

    return (
        <Container>
            <h1>
                Edit User
            </h1>
            <FormControl>
                <InputLabel>Name:</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username:</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={user.username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email:</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone:</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={user.phone} />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => editUserDetails()}>
                    Edit User
                </Button>
            </FormControl>
        </Container>
    );
}

export default EditUser
