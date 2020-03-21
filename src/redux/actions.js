import { fetchAirportData } from './gateWays'

export const FLIGHTS_LIST_RECEIVED = 'FLIGHTS_LIST_RECEIVED'

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
                // console.log(flightsList)
                dispatch(flightsListReceived(flightsList))
            })
    };
    return thunkAction;
}