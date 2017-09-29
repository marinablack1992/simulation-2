import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { updateDesiredRent, updateWizard } from '../../ducks/reducer';

class StepFive extends Component {
    render(){
        const { updateDesiredRent, recommendedRent, updateWizard } = this.props;

        return(
            <div className="step_container">
                <p> Step 5</p>
            <div className="step5_container">
                <div className="step5_recommended_rent">
                    <span>Recommended Rent: ${recommendedRent}</span><br />
                </div>
                <div className="step5_desired_rent">
                    <span>Desired Rent</span><br/>
                    <input placeholder="desiredRent" type="text" onChange={ ( e ) => updateDesiredRent( e.target.value ) } />   
                </div>
            <Link to="/StepFour"><button className="/StepFive"> Previous Step </button></Link>
            <Link to="/"><button className="complete" onClick={() => console.log(this.props) }> Complete </button></Link>
        </div>
      </div>
        )
    }
}

function mapStateToProps(state) {

return state;
}

export default connect (mapStateToProps, { updateDesiredRent, updateWizard }) (StepFive);