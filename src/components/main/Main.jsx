import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Arrivals from './arrivals/Arrivals';
import Departures from './departures/Departures';
import { connect } from 'react-redux';
import { getFlightsList, getText } from '../../redux/actions'
import { filterArrivals, filterDepartures, textSelector } from '../../redux/selectors'
import './main.scss'

class Main extends React.Component {
    state = {
        text: '',
    }

    componentDidMount() {
        this.props.getFlightsList()
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = () => {
        this.props.getText(this.state.text)
    }

    render() {
        return (
            <div className="page">
                <div id="title">SEARCH FLIGHT</div>
                <div id="search-area">
                    <input
                        id="search-area__input"
                        type="text"
                        name="text"
                        placeholder={`airline, destination or flight#`}
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <button
                        id="search-button"
                        onClick={this.onSubmit}
                    >SEARCH</button>
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
                                flightsList={this.props.flightsListArrivals}
                            />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/departures">
                            <Departures
                                flightsList={this.props.filterDepartures}
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
        flightsListArrivals: filterArrivals(state),
        filterDepartures: filterDepartures(state),
        text: textSelector(state),
    }
}

const mapDispatch = {
    getFlightsList,
    getText,
}

export default connect(mapState, mapDispatch)(Main)