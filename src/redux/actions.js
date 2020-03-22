import { fetchAirportData } from './gateWays'

export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS_LIST_RECEIVED'
export const GET_TEXT = 'GET_TEXT'

export const flightsListReceived = (flightsList) => {
    const action = {
        type: FLIGHTS_LIST_RECEIVED,
        payload: {
            flightsList,
        }
    }
    return action;
}

export const getFlightsList = () => {
    const thunkAction = function (dispatch) {
        fetchAirportData()
            .then(flightsList => {
                dispatch(flightsListReceived(flightsList))
            })
    };
    return thunkAction;
}

export const getText = (text) => {
    const action = {
        type: GET_TEXT,
        payload: {
            text,
        }
    }
    return action;
}

export const filterArrivals = () => {
    const thunkAction = function (dispatch) {

    }
}