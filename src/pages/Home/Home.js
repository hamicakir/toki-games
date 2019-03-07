import React, { Component } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { actions as cheapFlightActions, makeSelectCheapFlight } from "../../reducers/cheap";
import {actions as businessFlightActions, makeSelectBusinessFlight} from "../../reducers/business";
import menuItems from "../../configs/menuItems";

import BusinessFlights from "./sections/BusinessFlights";
import CheapFlights from "./sections/CheapFlights";
import Header from "../../components/Header";

class Home extends Component{

    async componentDidMount(){
        const { getCheapFlights, getBusinessFlights } = this.props;
        await getBusinessFlights();
        await getCheapFlights();
    }

    render(){
        const { businessFlights, cheapFlights } = this.props;
        return (
            <div>
                <Header menuItems={menuItems}/>
                {
                    businessFlights && <BusinessFlights businessFlights={businessFlights} />
                }
                {
                    cheapFlights && <CheapFlights cheapFlights={cheapFlights}/>
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cheapFlights: makeSelectCheapFlight(),
    businessFlights: makeSelectBusinessFlight()
});

const mapDispatchToProps = dispatch => ({
    getCheapFlights: () => dispatch(cheapFlightActions.cheapLoadStart()),
    getBusinessFlights: () => dispatch(businessFlightActions.businessLoadStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
