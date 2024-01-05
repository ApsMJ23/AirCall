import {Call} from "../../types/ApiContainer";
import {Call as CallerIcon} from '@mui/icons-material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

type Props = {
    callType: Call['call_type']
    direction: Call['direction']
}

const CallIcon = ({ callType, direction }: Props) => {
    if (callType === 'answered') {
        if (direction === 'inbound') {
            return (
                <CallerIcon color={"primary"}/>
            )
        } else {
            if (direction === 'outbound') {
                return (
                    <CallMadeIcon color={"warning"}/>
                )
            }
        }
    } else if (callType === 'missed') {
        if (direction === 'inbound') {
            return (
                <PhoneMissedIcon color={"primary"}/>
            )
        } else {
            if (direction === 'outbound') {
                return (
                   <CallMissedOutgoingIcon color={"error"}/>
                )
            }
        }
    } else if (callType === 'voicemail') {
        if (direction === 'inbound') {
            return (
                <VoicemailIcon color={"primary"}/>
            )
        } else {
            if (direction === 'outbound') {
                return (
                   <PhoneCallbackIcon color={"warning"}/>
                )
            }
        }
    }
    return (
        <div>
            <LocalPhoneIcon color={"info"}/>
        </div>
    )
}
export default CallIcon
