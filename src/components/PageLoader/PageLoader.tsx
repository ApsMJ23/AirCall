import {Box, CircularProgress, Container} from "@mui/material";
import Logo from "../../assets/aircallLogo.svg";
import './PageLoader.css';


export const PageLoader = () => {
    return (
        <Container className='PageLoaderWrapper'>
            <Box sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
                <img src={Logo} alt={'Aircall Logo'} style={{width: '70%', height: 'auto'}}/>
                <CircularProgress size={50} color={"primary"}/>
            </Box>
        </Container>
    )
}