import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../service/api';
import { Table, TableHead, TableRow, TableBody, TableCell, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width:90%;
    margin:50px auto 10px auto;
`;

const StyledTHead = styled(TableRow)`
    background:#000000;
    & > th {
        color:#ffffff;
        font-size:20px;
    }
`;

const StyledTBody = styled(TableRow)`
    & > td {
        font-size:20px;
    }
`;

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <StyledTHead>
                    <TableCell>
                        Id
                    </TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Username
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Phone
                    </TableCell>
                    <TableCell>
                        Option
                    </TableCell>
                </StyledTHead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => {
                        return (
                            <>
                                <StyledTBody key={user._id}>
                                    <TableCell>{user._id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <Button variant='contained' color='warning' style={{ marginRight: "10px" }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                        <Button variant='contained' color="error" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                                    </TableCell>
                                </StyledTBody>
                            </>
                        );
                    })
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers