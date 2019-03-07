import React, { Component } from 'react';
import moment from 'moment';

import "./style.scss";

import Loading from '../../../components/Loading';

class CheapFlights extends Component{


    render(){
        const { cheapFlights: { loading, data } } = this.props;
        return (
            <div className="flight-list-wrapper">
                <h2 className="section-header">Cheap Flights</h2>
                {
                    loading && <div className="loading-wrapper"><Loading /></div>
                }
                {
                    data && data.map((flight, index) => {
                        const departureTime = moment(flight.departureTime).utc().format('MMMM DD YYYY, HH:MM:SS')
                        return (
                            <div key={`flight-list-${index}`} className="flight-item-wrapper">
                                <p className="subtitle">Departure:</p>
                                <p>{flight.departure}</p>
                                <p className="subtitle">Arrival:</p>
                                <p>{flight.arrival}</p>
                                <p className="subtitle">Departure Time:</p>
                                <p>{departureTime}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CheapFlights;
