import React from 'react';
import Arrivals from '../arrivals/Arrivals';
import Departures from '../departures/Departures';
import { Route, Redirect, useParams } from 'react-router-dom';
import './main.scss'

const Main = ({ flightsListArrivals, flightsListDepartures }) => {
    let { direction, search } = useParams();

    const searchArrivals = (text) => {
        if (!flightsListArrivals) return '';

        if (!text) {
            return flightsListArrivals
        } else {
            return flightsListArrivals.filter(elem => {
                if (elem.hasOwnProperty('airline')) {
                    return (
                        elem['airportToID.city_en'] === text ||
                        elem.airline.en.name === text ||
                        elem.codeShareData[0].codeShare === text
                    )
                }
            })
        }
    }

    const searchDepartures = (text) => {
        if (!flightsListDepartures) return '';

        if (!text) {
            return flightsListDepartures
        } else {
            return flightsListDepartures.filter(elem => {
                if (elem.hasOwnProperty('airline')) {
                    return (
                        elem['airportToID.city_en'] === text ||
                        elem.airline.en.name === text ||
                        elem.codeShareData[0].codeShare === text
                    )
                }
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