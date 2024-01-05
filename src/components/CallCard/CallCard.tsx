import {Call, SortedCallArr} from "../../types/ApiContainer";
import {Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import CallIcon from "../CallIcon/CallIcon";
import {format} from "date-fns";
import './CallCard.css'


type Props = {
    cardDetails: SortedCallArr
    setSelectedCard: (card: Call) => void
}
const CallCard = ({cardDetails,setSelectedCard}: Props) => {
    return (
        <Stack gap={5}>
            <Divider variant={'fullWidth'}>
                <Typography align="center">{cardDetails.groupDate}</Typography>
            </Divider>
            <div style={{marginBottom: '1rem'}}>
                {cardDetails.calls.map((call) => {
                    return (
                        <Card elevation={3} className='callCardContainer'>
                            <div
                                className='flexContainer'
                                onClick={()=>{setSelectedCard(call)}}
                            >
                                <CardContent className='info'>
                                    <Typography style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}
                                                variant="h6" component="div">
                                        <CallIcon callType={call.call_type} direction={call.direction}/>
                                        {call.direction === 'inbound' ? (
                                            <span>{call.from || 'Unknown'}</span>
                                        ) : call.direction === 'outbound' ? (
                                            <span>{call.to || 'Unknown'}</span>
                                        ) : (
                                            'Unknown'
                                        )}
                                    </Typography>
                                </CardContent>
                                <Typography variant="body1">
                                    {format(call.created_at, 'hh:mm a')}
                                </Typography>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </Stack>
    )
}

export default CallCard;