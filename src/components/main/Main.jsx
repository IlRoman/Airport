import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Arrivals from './Arrivals';
import Departures from './Departures';

const Main = () => {
    return (
        <>
            <div>SEARCH FLIGHT</div>
            <input type="text" />
            <button>SEARCH</button>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <button>
                                <Link to="/departures">Departures</Link>
                            </button>
                            <button>
                                <Link to="/arrivals">Arrivals</Link>
                            </button>
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/arrivals">
                        <Arrivals />
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/departures">
                        <Departures />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Main;