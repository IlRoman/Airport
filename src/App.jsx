import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Header from './components/header/Header';
import SearchField from './components/SearchField'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/:direction?/:search?" component={SearchField} />
                </Switch>
            </ BrowserRouter>
        </Provider>
    )
}

export default App;