import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const PageNotFound = () => {
    const containerStyle:React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };

    const textStyle = {
        marginBottom: '16px',
    };

    return (
        <Container style={containerStyle}>
            <Typography variant="h1" style={textStyle}>
                404 - Page Not Found
            </Typography>
            <Typography variant="h5" style={textStyle}>
                The page you are looking for might be in another universe.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Go Home
            </Button>
        </Container>
    );
};

export default PageNotFound;
