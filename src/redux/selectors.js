import { createSelector } from 'reselect'

export const flightsSelector = (state) => {
    return state.flightsList.flightsList
}

export const filterArrivals = createSelector(
    [flightsSelector],
    (elements) => {
        if (elements === '') return '';
        return elements.body.arrival
    }
)

export const filterDepartures = createSelector(
    [flightsSelector],
    (elements) => {
        if (elements === '') return '';
        return elements.body.departure
    }
)