import React from 'react';
import Arrivals from './arrivals/Arrivals';
import Departures from './departures/Departures';
import { Route, Link } from 'react-router-dom';
import './main.scss'

class Main extends React.Component {
    render() {
        return (
            <>
                <Route path="/">
                    <div className="container">
                        <Link to="/arrivals">
                            <button className="btn active btn-arrivals">
                                <i className="fas fa-plane-arrival"></i>
                                <span className="nearIcon">Arrivals</span>
                            </button>
                        </Link>
                        <Link to="/departures">
                            <button className="btn disabled btn-departures">
                                <i className="fas fa-plane-departure"></i>
                                <span className="nearIcon">Departures</span>
                            </button>
                        </Link>
                    </div>
                </Route>
                <Route path="/arrivals">
                    <Arrivals
                        flightsList={this.props.flightsListArrivals}
                    />
                </Route>
                <Route path="/departures">
                    <Departures
                        flightsList={this.props.filterDepartures}
                    />
                </Route>
            </>
        )
    }
}

export default Main