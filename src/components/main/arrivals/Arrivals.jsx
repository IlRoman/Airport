import React from 'react'
import { Link } from 'react-router-dom';
import { getPicture, getTerminalLogo } from '../../../functions'
import './arrivals.scss'

const Arrivals = (flightsList) => {

    const getTime = (date) => {
        return `${date.split('T')[1].split(':')[0]}:${date.split('T')[1].split(':')[1]}`
    }

    const showArrivals = () => {
        if (flightsList.flightsList === '') return <tr><td>NO RESULTS</td></tr>
        let arr = Array(flightsList.flightsList.length).fill('0')
        return (
            arr.map((element, index) => {
                return (
                    <tr key={Math.random()}>
                        <td>{getTerminalLogo(flightsList.flightsList[index].term)}</td>
                        <td>{getTime(flightsList.flightsList[index].timeLandCalc)}</td>
                        <td>{flightsList.flightsList[index]['airportFromID.city_en']}</td>
                        <td>{flightsList.flightsList[index].status === 'CX'
                            ? 'Cancelled'
                            : flightsList.flightsList[index].status
                        }</td>
                        <td className="logo-container">
                            <img
                                className="logo"
                                src={getPicture(flightsList.flightsList[index].airline.en.name)
                                }></img>
                            <div>{flightsList.flightsList[index].airline.en.name}</div>
                        </td>
                        <td>{flightsList.flightsList[index].codeShareData[0].codeShare}</td>
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
                    {flightsList
                        ? showArrivals()
                        : <tr><td>NO RESULTS</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Arrivals;