import React, { Component } from 'react';
import { connect } from "react-redux";

import { actions as cheapFlightActions } from "../../reducers/cheap";
import { actions as businessFlightActions } from "../../reducers/business";

class Home extends Component{

    componentDidMount(){
        const { getCheapFlights, getBusinessFlights } = this.props;
        getCheapFlights();
        getBusinessFlights();
    }

    render(){
        console.log(this.props);
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
    getCheapFlights: () => dispatch(cheapFlightActions.cheapLoadStart()),
    getBusinessFlights: () => dispatch(businessFlightActions.businessLoadStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
