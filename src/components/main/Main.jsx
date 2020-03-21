import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Arrivals from './arrivals/Arrivals';
import Departures from './departures/Departures';
import { connect } from 'react-redux';
import { getFlightsList } from '../../redux/actions'
import './main.scss'

class Main extends React.Component {
    componentDidMount() {
        this.props.getFlightsList()
    }

    render() {
        return (
            <div className="page">
                <div id="title">SEARCH FLIGHT</div>
                <div id="search-area">
                    <input id="search-area__input" type="text" placeholder={`airline, destination or flight#`} />
                    <button id="search-button">SEARCH</button>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <div>
                                <Link to="/departures">
                                    <button className="btn disabled btn-departures">
                                        Departures
                                </button>
                                </Link>
                                <Link to="/arrivals">
                                    <button className="btn active btn-arrivals">
                                        Arrivals
                                </button>
                                </Link>
                            </div>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/arrivals">
                            <Arrivals
                                flightsList={this.props.flightsList}
                            />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/departures">
                            <Departures
                                flightsList={this.props.flightsList}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapState = state => {
    return {
        flightsList: state.flightsList.flightsList
    }
}

const mapDispatch = {
    getFlightsList,
}

export default connect(mapState, mapDispatch)(Main)