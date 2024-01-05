import {Call} from "../../types/ApiContainer";
import { Button, Stack} from "@mui/material";
import RenderCallProperty from "../RenderCallProperty/RenderCallProperty";
import {Archive} from "@mui/icons-material";
import {useState} from "react";
import {archieveCall, unarchieveCall} from "../../api/ApiContainer";


const CallDetailsSection = ({selectedCard}: { selectedCard: Call }) => {
    const[loading,setLoading] = useState(false)
    const getCallType = () => {
        if (selectedCard.call_type === 'answered') {
            return 'Answered Call'
        } else if (selectedCard.call_type === 'missed') {
            return 'Missed Call'
        } else if (selectedCard.call_type === 'voicemail') {
            return 'Voicemail'
        } else {
            return 'Unknown Call'
        }
    }
    const getDuration = () => {
        let duration = selectedCard.duration
        const hours = Math.floor(duration / 3600)
        duration = duration % 3600
        const minutes = Math.floor(duration / 60)
        duration = duration % 60
        const seconds = duration

        const formattedDuration = []

        if (hours) {
            formattedDuration.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`)
        }
        if (minutes) {
            formattedDuration.push(`${minutes} ${minutes === 1 ? 'min' : 'mins'}`)
        }
        formattedDuration.push(`${seconds} ${seconds === 1 ? 'sec' : 'secs'}`)

        return formattedDuration.join(', ')
    }
    const getCallFlow = () => {
        const flow = []
        flow.push(selectedCard.from || 'Unknown')
        flow.push(selectedCard.via || 'Unknown')
        flow.push(selectedCard.to || 'Unknown')

        return flow.join(' -> ')
    }
    const getCallDirection = () => {
        if (selectedCard.direction === 'inbound') {
            return 'Incoming'
        } else if (selectedCard.direction === 'outbound') {
            return 'Outgoing'
        } else {
            return 'Unknown'
        }
    }

    const archiveOne = async () => {
        setLoading(true)
        if(selectedCard.is_archived) {
            const res = await unarchieveCall(selectedCard.id)
            if (res) {
                setLoading(false)
            }
            else{
                setLoading(false)
            }
        }else{
            const res = await archieveCall(selectedCard.id)
            if (res) {
                setLoading(false)
            }
            else{
                setLoading(false)
            }
        }
    }


    return(
            <Stack spacing={3}>
                    <RenderCallProperty property="Call Type" value={getCallType()} />
                    <RenderCallProperty property="Direction" value={getCallDirection()} />
                    <RenderCallProperty property="Call Flow" value={getCallFlow()} />
                    <RenderCallProperty property="Duration" value={getDuration()} />
                    <Button
                        className='archive-all-button'
                        variant="contained"
                        startIcon={<Archive/>}
                        onClick={archiveOne}
                        disabled={loading}
                    >
                        {selectedCard.is_archived? 'Unarchive Call' : 'Archive Call'}
                    </Button>
            </Stack>
    )
}

export default CallDetailsSection;