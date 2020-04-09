import React, { useState, useEffect } from 'react'
import Main from './main/Main'
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFlightsList, getText } from '../redux/actions'
import { filterArrivals, filterDepartures, textSelector } from '../redux/selectors'

const SearchField = ({ flightsListArrivals, filterDepartures, getText, getFlightsList }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        getFlightsList()
    }, [])

    const history = useHistory()
    const location = useLocation()
    const { direction, search } = useParams();

    useEffect(() => {
        getFlightsList();
        if (search) setText(search);
    }, []);

    const handleChange = elem => {
        const { value } = elem.target;
        setText(value);
    };

    const onSubmit = () => {
        getText(text)
        if (search === text) {
            return;
        } else if (search !== text) {
            setText('')
            // вернуться на одну страницу назад
            // затем запустить хистори
        }

        text ?
            history.push(`${location.pathname}/${text}`) :
            history.push(`/${direction}`);
    };

    return (
        <div className="page">
            <div className="search-and-button">
                <div id="title">SEARCH FLIGHT</div>
                <div className="search-area">
                    <div id="input-area">
                        <i className="fas fa-search"></i>
                        <input
                            id="search-area__input"
                            type="text"
                            name="text"
                            placeholder={`airline, destination or flight#`}
                            value={text}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        id="search-button"
                        onClick={onSubmit}
                    >SEARCH</button>
                </div>
            </div>
            <Main
                getFlightsList={getFlightsList}
                flightsListArrivals={flightsListArrivals}
                filterDepartures={filterDepartures}
                text={text ? text : ''}
            />
        </div>
    )
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

export default connect(mapState, mapDispatch)(SearchField)