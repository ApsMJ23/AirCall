import { Call } from '../types/ApiContainer'
import {sortCallByDate} from "../Utils/ApiUtility";
import axios from "axios";

const BASEURL = 'https://cerulean-marlin-wig.cyclic.app'
const GET = 'get'

export const getCallData = async () => {
    const res = await axios({
        method: GET,
        url: `${BASEURL}/activities`,
    })
    const result: Call[] = res.data
    const inboxCall = result.filter((call) => !call.is_archived)
    return sortCallByDate(inboxCall)
}

export const getArchievedCalls = async () => {
    const res = await axios({
        method: GET,
        url: `${BASEURL}/activities`,
    })
    const result: Call[] = res.data
    const archievedCall = result.filter((call) => call.is_archived)
    return sortCallByDate(archievedCall)
}

export const archieveCall = async (call_id: string) => {
    const res = await axios({
        method: 'PATCH',
        url: `${BASEURL}/activities/${call_id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            is_archived: true
        })
    })
    if (res.status!==200) {
        throw Error('Failed to Archieve Call.')
    }

    return 'Succesfully Archieved Call.'
}

export const archieveCalls = async (call_ids: string[]) => {
    const promises: Promise<string>[] = []
    call_ids.forEach((id) => {
        promises.push(archieveCall(id))
    })

    const response = await Promise.all(promises)

    if (!response) {
        throw Error('Failed to Archieve all calls.')
    }

    return 'Succesfully Archieved all calls.'
}

export const unarchieveCall = async (call_id: string) => {
    const res = await axios({
        method: 'PATCH',
        url: `${BASEURL}/activities/${call_id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            is_archived: true
        })
    })
    if (res.status!==200) {
        throw Error('Failed to Unarchieve Call.')
    }

    return 'Succesfully Unarchieved Call.'
}

export const unarchieveCalls = async (call_ids: string[]) => {
    const promises: Promise<string>[] = []
    call_ids.forEach((id) => {
        promises.push(unarchieveCall(id))
    })

    const response = await Promise.all(promises)

    if (!response) {
        throw Error('Failed to unarchieve all calls.')
    }

    return 'Succesfully Unarchieved all calls.'
}
