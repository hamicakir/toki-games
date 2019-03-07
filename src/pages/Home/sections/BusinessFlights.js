import React, { Component } from 'react';
import moment from 'moment';

import "./style.scss";

import Loading from '../../../components/Loading';

class BusinessFlights extends Component{


    render(){
        const { businessFlights: { loading, data } } = this.props;
        return (
            <div className="flight-list-wrapper">
                <h2 className="section-header">Business Flights</h2>
                {
                    loading && <div className="loading-wrapper"><Loading /></div>
                }
                {
                    data && data.map((flight, index) => {
                        const arrivalDate = moment(flight.arrival).utc().format('MMMM DD YYYY, HH:MM:SS');
                        return (
                            <div key={`flight-list-${index}`} className="flight-item-wrapper">
                                <p className="subtitle">Departure</p>
                                <p>{flight.flight}</p>
                                <p className="subtitle">Arrival</p>
                                <p>{arrivalDate}</p>
                            </div>
                        )
                    }) || <div className="loading-wrapper"><p>There is no item</p></div>
                }
            </div>
        )
    }
}

export default BusinessFlights;
