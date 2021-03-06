import { createSelector } from 'reselect'

export const flightsSelector = (state) => {
    return state.flightsList.flightsList
}

export const filterArrivals = createSelector(
    [flightsSelector],
    (elements) => {
        if (elements === '') return '';
        return elements.body.arrival
            .filter(elem => new Date(elem.timeArrShedule).getDate() === new Date().getDate())
    }
)

export const filterDepartures = createSelector(
    [flightsSelector],
    (elements) => {
        if (elements === '') return '';
        return elements.body.departure
            .filter(elem => new Date(elem.timeDepShedule).getDate() === new Date().getDate())
    }
)