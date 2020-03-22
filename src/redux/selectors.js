import { createSelector } from 'reselect'

export const flightsSelector = (state) => {
    return state.flightsList.flightsList
}

export const textSelector = (state) => {
    return state.text.text
}

export const filterArrivals = createSelector(
    [flightsSelector, textSelector],
    (elements, text) => {
        if (elements === '') return '';
        if (text === '') {
            return elements.body.arrival
        } else {
            return elements.body.arrival.filter(elem => {
                return elem['airportFromID.city_en'] === text ||
                    elem.airline.en.name === text ||
                    elem.codeShareData[0].codeShare === text
            })
        }
    }
)

export const filterDepartures = createSelector(
    [flightsSelector, textSelector],
    (elements, text) => {
        if (elements === '') return '';
        if (text === '') {
            return elements.body.departure
        } else {
            return elements.body.departure.filter(elem => {
                console.log(elem)
                return elem['airportToID.city_en'] === text ||
                    elem.airline.en.name === text ||
                    elem.codeShareData[0].codeShare === text
            })
        }
    }
)