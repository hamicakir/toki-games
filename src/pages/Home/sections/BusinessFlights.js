import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux'

import "./style.scss";

import Loading from '../../../components/Loading';
import {actions as businessFlightActions} from "../../../reducers/business";

class BusinessFlights extends Component{

    state = {
        isModalVisible: false
    }

    handleEntranceModal = () => {
        this.setState((prevState) => ({
            isModalVisible: !prevState.isModalVisible
        }))
    }

    formSubmit = (e) => {
        e.preventDefault();
    };

    render(){
        const { businessFlights: { loading, data } } = this.props;
        const { isModalVisible } = this.state;
        return (
            <div className="flight-list-wrapper">
                <div className="section-header-wrapper">
                    <h2 className="section-header">Business Flights</h2>
                    <a href="#" onClick={this.handleEntranceModal}>Add New Business</a>
                </div>
                {
                    loading && <div className="loading-wrapper"><Loading /></div>
                }
                {
                    data && data.map((flight, index) => {
                        const arrivalDate = moment(flight.arrival).utc().format('MMMM DD YYYY, HH:MM:SS');
                        return (
                            <div key={`flight-list-${index}`} className="flight-item-wrapper">
                                {
                                    flight.flight &&
                                    <>
                                        <p className="subtitle">Departure</p>
                                        <p>{flight.flight}</p>
                                    </>
                                }
                                <p className="subtitle">Arrival</p>
                                <p>{arrivalDate}</p>
                            </div>
                        )
                    }) || <div className="loading-wrapper"><p>There is no item</p></div>
                }
                {
                    isModalVisible &&
                    <div className="modal-wrapper">
                        <div className="modal">
                            <a href="#" onClick={this.handleEntranceModal}>Close</a>
                            <form onSubmit={this.formSubmit}>
                                <div className="form-item-wrapper">
                                    <label htmlFor="flightName">Flight</label>
                                    <input type="text" name="flight"/>
                                </div>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addNewBusinessFlight: flightData => dispatch(businessFlightActions.addNewBusinessFlightStart(flightData))
})

export default connect(null, mapDispatchToProps)(BusinessFlights);
