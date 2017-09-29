import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateImageUrl } from '../../ducks/reducer';

class StepThree extends Component {
    render(){
        const { updateImageUrl } = this.props;

        return(
            <div className="step_container">
                <p>Step 3</p>
                
                <div className="step3_image_container">
                </div>
               
                <div className="step3_url_container">
                    <span>Image URL</span>
                    <input placeholder="image_URL" type="text" onChange={ ( e ) => updateImageUrl( e.target.value ) } />
        
                <Link to="/StepTwo"><button className="/StepThree"> Previous Step </button></Link>
                <Link to="/StepFour"><button className="/StepThree"> Next Step </button></Link>

                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { imageUrl } = state;

    return{
        imageUrl
        
    };
}

export default connect ( mapStateToProps, { updateImageUrl } ) ( StepThree ); 