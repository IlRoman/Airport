import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import SearchField from './components/SearchField'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/:direction?/:search?" component={SearchField} />
                </Switch>
            </ BrowserRouter>
        </Provider>
    )
}

export default App;