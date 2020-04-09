import React from 'react';
import Arrivals from '../arrivals/Arrivals';
import Departures from '../departures/Departures';
import { Route, Redirect, useParams } from 'react-router-dom';
import './main.scss'

const Main = ({ flightsListArrivals, flightsListDepartures }) => {
    let { direction, search } = useParams();

    const searchArrivals = (text) => {
        if (!flightsListArrivals) return '';

        // for (let i = 0; i < flightsListArrivals.length; i++) {
        //     if (text !== flightsListArrivals[i]['airportFromID.city_en'] &&
        //         flightsListArrivals[i].airline.en.name !== text &&
        //         flightsListArrivals[i].codeShareData[0].codeShare !== text)
        //         console.log('no results')
        // }

        if (!text) {
            return flightsListArrivals
        } else {
            return flightsListArrivals.filter(elem => {
                return elem['airportFromID.city_en'] === text ||
                    elem.airline.en.name === text ||
                    elem.codeShareData[0].codeShare === text
            })
        }
    }

    const searchDepartures = (text) => {
        if (!flightsListDepartures) return '';

        // for (let i = 0; i < flightsListDepartures.length; i++) {
        //     if (flightsListDepartures[i]['airportToID.city_en'] !== text &&
        //         flightsListDepartures[i].airline.en.name !== text &&
        //         flightsListDepartures[i].codeShareData[0].codeShare !== text) {
        //         console.log('no results')
        //     }
        // }

        if (!text) {
            return flightsListDepartures
        } else {
            return flightsListDepartures.filter(elem => {
                return elem['airportToID.city_en'] === text ||
                    elem.airline.en.name === text ||
                    elem.codeShareData[0].codeShare === text
            })
        }
    }
    return (
        <>
            <Route exact path="/">
                <Redirect to="/arrivals"></Redirect>
            </Route>
            <Route path="/arrivals">
                <Arrivals
                    flightsList={searchArrivals(search)}
                    search={search}
                />
            </Route>
            <Route path="/departures">
                <Departures
                    flightsList={searchDepartures(search)}
                    search={search}
                />
            </Route>
        </>
    )
}

export default Main