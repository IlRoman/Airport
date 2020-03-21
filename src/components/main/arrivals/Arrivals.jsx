import React from 'react'
import { Link } from 'react-router-dom';
import { getPicture, getTerminalLogo } from '../../../functions'
import './arrivals.scss'

const Arrivals = (flightsList) => {
    const getTime = (date) => {
        return `${date.split('T')[1].split(':')[0]}:${date.split('T')[1].split(':')[1]}`
    }

    const showArrivals = () => {
        let arr = Array(flightsList.flightsList.body.arrival.length).fill('0')
        return (
            arr.map((element, index) => {
                return (
                    <tr key={Math.random()}>
                        <td>{getTerminalLogo(flightsList.flightsList.body.arrival[index].term)}</td>
                        <td>{getTime(flightsList.flightsList.body.arrival[index].timeLandCalc)}</td>
                        <td>{flightsList.flightsList.body.arrival[index]['airportFromID.city']}</td>
                        <td>{flightsList.flightsList.body.arrival[index].status}</td>
                        <td className="logo-container">
                            <img
                                className="logo"
                                src={getPicture(flightsList.flightsList.body.arrival[index].airline.en.name)
                                }></img>
                            <div>{flightsList.flightsList.body.arrival[index].airline.en.name}</div>
                        </td>
                        <td>{flightsList.flightsList.body.arrival[index].codeShareData[0].codeShare}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="main">
            <div className="container">
                <Link to="/arrivals">
                    <button className="btn active btn-arrivals">
                        Arrivals
                </button>
                </Link>
                <Link to="/departures">
                    <button className="btn disabled btn-departures">
                        Departures
                </button>
                </Link>
            </div>
            <table className="table">
                <thead>
                    <tr key={Math.random()}>
                        <th>Terminal</th>
                        <th>Local Time</th>
                        <th>Destination</th>
                        <th>Status</th>
                        <th>Airline</th>
                        <th>Flight</th>
                    </tr>
                </thead>
                <tbody>
                    {flightsList.flightsList.body
                        ? showArrivals()
                        : <tr><td>efw</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Arrivals;