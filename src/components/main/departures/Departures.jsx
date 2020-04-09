import React from 'react'
import { Link } from 'react-router-dom';
import { getPicture, getTerminalLogo } from '../../../functions'
import './departures.scss'

const Departures = ({ flightsList }) => {

    const getTime = (date) => {
        return `${date.split('T')[1].split(':')[0]}:${date.split('T')[1].split(':')[1]}`
    }

    const showDepartures = () => {
        if (flightsList === '') return <tr><td>NO RESULTS</td></tr>
        let arr = Array(flightsList.length).fill('0')
        return (
            arr.map((element, index) => {
                return (
                    <tr key={Math.random()}>
                        <td>{getTerminalLogo(flightsList[index].term)}</td>
                        <td>{getTime(flightsList[index].timeToStand)}</td>
                        <td>{flightsList[index]['airportToID.city_en']}</td>
                        <td>{flightsList[index].status === 'CX'
                            ? 'Cancelled'
                            : flightsList[index].status
                        }</td>
                        <td className="logo-container">
                            <img
                                className="logo"
                                src={getPicture(flightsList[index].airline.en.name)
                                }></img>
                            <div>{flightsList[index].airline.en.name}</div>
                        </td>
                        <td>{flightsList[index].codeShareData[0].codeShare}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>
            <div className="container">
                <Link to="/departures">
                    <button className="btn active btn-departures">
                        <i className="fas fa-plane-departure"></i>
                        <span className="nearIcon">Departures</span>
                    </button>
                </Link>
                <Link to="/arrivals">
                    <button className="btn disabled btn-arrivals">
                        <i className="fas fa-plane-arrival"></i>
                        <span className="nearIcon">Arrivals</span>
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
                        ? showDepartures()
                        : <tr><td>NO RESULTS</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Departures;