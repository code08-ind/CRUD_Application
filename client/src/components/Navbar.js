import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background-color:#111111;
`;

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`;

const Navbar = () => {
    return (
        <>
            <Header position='static'>
                <Toolbar>
                    <Tabs to="/">AryanG</Tabs>
                    <Tabs to="/all">All Users</Tabs>
                    <Tabs to="/add">Add User</Tabs>
                </Toolbar>
            </Header>
        </>
    )
}

export default Navbar