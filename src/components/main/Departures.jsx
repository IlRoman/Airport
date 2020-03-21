import React from 'react'
import { Link } from 'react-router-dom';

const Departures = () => {
    return (
        <div>
            <button>
                <Link to="/departures">Departures</Link>
            </button>
            <button>
                <Link to="/arrivals">Arrivals</Link>
            </button>
        </div>
    )
}

export default Departures;