import {Card, Stack, Typography} from "@mui/material";
import './RenderCallProperty.css'

type Props = {
    property: string;
    value: string;
}

const RenderCallProperty = ({ property,value}:Props)=>{
    return(
        <Stack direction="row" gap={2}>
            <Card elevation={5} variant={'outlined'} className='renderCallCard'>
            <Typography fontWeight="bold" fontSize="large">
                {property}:
            </Typography>
            <Typography fontSize={12}>{value}</Typography>
            </Card>
        </Stack>
    )
}

export default RenderCallProperty;