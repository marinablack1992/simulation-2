import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { updateLoanAmount, updateMonthlyMortgage } from '../../ducks/reducer';

class StepFour extends Component {
    render(){
        const { updateLoanAmount, updateMonthlyMortgage } = this.props;

        return(
            <div className="step_container">
                <p> Step 4</p>
            <div className="step4_container">
                <span>Loan Amount</span><br />
                <input placeholder="updateLoanAmount" type="text" onChange={ ( e ) => updateLoanAmount( e.target.value ) } />
          
                <span>Monthly Mortgage</span><br/>
                <input placeholder="updateMonthlyMortgage" type="text" onChange={ ( e ) => updateMonthlyMortgage( e.target.value ) } />   
            
        <Link to="/StepThree"><button className="/StepFour"> Previous Step </button></Link>
        <Link to="/StepFive"><button className="/StepFour"> Next Step </button></Link>
        </div>
      </div>

        )
    }
}
function mapStateToProps(state) {
    const { loanAmount, monthlyMortgage } = state;

    return{
        loanAmount,
        monthlyMortgage
    };
}

export default connect ( mapStateToProps, { updateLoanAmount, updateMonthlyMortgage } ) ( StepFour ); 