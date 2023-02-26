import { addUser } from '../service/api';
import React, { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  }

  return (
    <Container>
      <h1>Add User</h1>
      <FormControl>
        <InputLabel>Name:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' />
      </FormControl>
      <FormControl>
        <InputLabel>Email:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' />
      </FormControl>
      <FormControl>
        <InputLabel>Phone:</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddUser