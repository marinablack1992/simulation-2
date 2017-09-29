import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updatePropertyName, updatePropertyDescription } from '';

class StepOne extends Component {
    render(){
        const { updatePropertyName, updatePropertyDescription} = this.props;

        return(
        <div className="step_container">
                <p> Step 1</p>
            <div className="step1_container">
                <span>Property Name</span><br />
                <input placeholder="propertyName" type="text" onChange={ ( e ) => updatePropertyName( e.target.value ) } />
          
                <span>Property Description</span><br/>
                <input placeholder="propertyDescription" type="text" onChange={ ( e ) => updatePropertyDescription( e.target.value ) } />   
            
        <Link to="/StepTwo"><button className="/StepOne"> Next Step </button></Link>
        </div>
      </div>

        )
    }
}

function mapStateToProps(state) {
    const { propertyName, propertyDescription } = state;

    return{
        propertyName,
        propertyDescription
    };
}

export default connect ( mapStateToProps, { updatePropertyName, updatePropertyDescription } ) ( StepOne ); 
