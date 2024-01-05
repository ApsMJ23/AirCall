import {Container, Paper, Typography} from "@mui/material";


export const ErrorPage = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={4} style={{ padding: 20, textAlign: 'center', marginTop: 200,borderRadius:12 }}>
                <Typography variant="h4" color="primary">
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" color="textSecondary" style={{ marginTop: 20 }}>
                    The page you are looking for might be temporarily unavailable or doesn't exist.
                </Typography>
            </Paper>
        </Container>
    );
}
