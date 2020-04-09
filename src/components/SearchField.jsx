import React, { useState, useEffect } from 'react'
import Main from './main/Main'
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFlightsList } from '../redux/actions'
import { filterArrivals, filterDepartures } from '../redux/selectors'

const SearchField = ({ flightsListArrivals, flightsListDepartures, getFlightsList }) => {
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
        if (search === text) {
            return;
        } if (text) {
            history.push(`/${direction}/${text}`)
            console.log(direction)
            return
        } if (!text) {
            history.push(`/${direction}`);
        }
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
                flightsListDepartures={flightsListDepartures}
            />
        </div>
    )
}

const mapState = state => {
    return {
        flightsListArrivals: filterArrivals(state),
        flightsListDepartures: filterDepartures(state),
    }
}

const mapDispatch = {
    getFlightsList,
}

export default connect(mapState, mapDispatch)(SearchField)