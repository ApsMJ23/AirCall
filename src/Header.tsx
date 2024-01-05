import React, {ChangeEvent} from 'react';
import {AppBar, Container, Tab, Tabs, Toolbar} from "@mui/material";
import {useLocation, useNavigate} from "react-router";
import logo from './assets/aircallLogo.svg'

const Header = () => {
    const router = useNavigate();
    const location = useLocation()
    const [value, setValue] = React.useState(location.pathname.split('/')[1]);
    const handleChange = (event:ChangeEvent<{}>,newValue:string) => {
        setValue(newValue);
        router('/'+newValue);
    }
    return (
        <AppBar position="static" color='default' elevation={3} style={{background:'whitesmoke'}}>
            <Container maxWidth="md">
                <Toolbar>
                    {/* Logo */}
                    <img src={logo} alt={'Aircall Logo'} style={{ width: 100, height: 'auto', marginRight: 100 }} />

                    {/* Tabs */}
                    <Tabs value={value} onChange={handleChange}>
                        <Tab  value={'calls'} label="Calls" />
                        <Tab  value={'archived'} label="Archived" />
                    </Tabs>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;