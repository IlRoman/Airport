import moment from 'moment'

const baseUrl = 'https://api.iev.aero/api/flights'

const currentDatedate = moment().format('DD-MM-YYYY')

export const fetchAirportData = () => {
    return fetch(`${baseUrl}/${currentDatedate}`)
        .then(response => response.json())
}
