import React from 'react'
import { Link } from 'react-router-dom';
import { getTerminalLogo } from '../../functions'
import './arrivals.scss'

const Arrivals = ({ flightsList, search }) => {

    const getTime = (date) => {
        return `${date.split('T')[1].split(':')[0]}:${date.split('T')[1].split(':')[1]}`
    }

    const showArrivals = () => {
        if (!flightsList.length) return <tr><td>NO RESULTS</td></tr>

        let arr = Array(flightsList.length).fill('0')
        return (
            arr.map((element, index) => {
                return (
                    <tr key={Math.random()}>
                        <td>{getTerminalLogo(flightsList[index].term)}</td>
                        <td>{getTime(flightsList[index].timeLandCalc)}</td>
                        <td>{flightsList[index]['airportFromID.city_en']}</td>
                        <td>{flightsList[index].status === 'CX'
                            ? 'Cancelled'
                            : flightsList[index].status
                        }</td>
                        <td className="logo-container">
                            {flightsList[index].hasOwnProperty('logo') &&
                                <img
                                    className="logo-container__logo"
                                    src={`https://api.iev.aero${flightsList[index].logo}`}
                                ></img>
                            }
                            <div>{(flightsList[index]).hasOwnProperty('airline') &&
                                flightsList[index].airline.en.name
                            }</div>
                        </td>
                        <td>{flightsList[index].codeShareData[0].codeShare}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div className="main">
            <div className="container">
                <Link to={`/departures/${search ? search : ''}`}>
                    <button className="btn disabled btn-departures">
                        <i className="fas fa-plane-departure"></i>
                        <span className="button-name">Departures</span>
                    </button>
                </Link>
                <Link to={`/arrivals/${search ? search : ''}`}>
                    <button className="btn active btn-arrivals">
                        <i className="fas fa-plane-arrival"></i>
                        <span className="button-name">Arrivals</span>
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