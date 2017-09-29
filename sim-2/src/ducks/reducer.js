import axios from 'axios';

let url = 'http://localhost:3000'

const wizardState = {
    userid: '',
    propertyName: '',
    propertyDescription: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    imageUrl: '',
    loanAmount: 0,
    monthlyMortgage: 0,
    recommendedRent: 0,
    desiredRent: 0,


    // Auth Components

    
    username: '',
    password: '',
    loginStatus: false,
    properties: []
}

const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = "UPDATE_PROPERTY_DESCRIPTION";
const UPDATE_PROP_ADDRESS = "UPDATE_PROP_ADDRESS";
const UPDATE_PROP_CITY = "UPDATE_PROP_CITY";
const UPDATE_PROP_STATE = "UPDATE_PROP_STATE";
const UPDATE_PROP_ZIP = "UPDATE_PROP_ZIP";
const UPDATE_IMAGEURL = "UPDATE_IMAGEURL";
const UPDATE_LOAN_AMOUNT = "UPDATE_LOAN_AMOUNT";
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE";
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT";
const UPDATE_USERID = "UPDATE_USERID";


//Auth Consts


const UPDATE_LOGIN_STATUS = "UPDATE_LOGIN_STATUS";
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";


//Dashboard Consts


const LOGOUT_USER = "LOGOUT_USER";
const GET_ALL_PROPERTIES = "GET_ALL_PROPERTIES";
const CREATE_NEW_PROPERTY = "CREATE_NEW_PROPERTY";
const FILTER_PROPERTIES = "FILTER_PROPERTIES";
const PUSH_WIZARD_COMPONENT = "PUSH_WIZARD_COMPONENT";
const RESET_WIZARD_STATUS = "RESET_WIZARD_STATUS";
const DELETE_PROPERTY = 'DELETE_PROPERTY';

function reducer( state = wizardState, action ) {
    switch ( action.type ) {


        //Auth Cases


        case UPDATE_LOGIN_STATUS:
            return Object.assign({}, state, { login: action.payload })
        case UPDATE_USERNAME:
            return Object.assign({}, state, { user: action.payload })
        case UPDATE_PASSWORD:
            return Object.assign({}, state, { password: action.payload })
        case LOGOUT_USER:
            return Object.assign({}, wizardState)


        //Wizard Cases


        case UPDATE_USERID:
            return Object.assign({}, state, { userid: action.payload })
        case UPDATE_PROPERTY_NAME:
            return Object.assign({}, state, { propertyName: action.payload })
        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({}, state, { propertyDescription: action.payload })
        case UPDATE_PROP_ADDRESS:
            return Object.assign({}, state, { address: action.payload })
        case UPDATE_PROP_CITY:
            return Object.assign({}, state, { city: action.payload })
        case UPDATE_PROP_STATE:
            return Object.assign({}, state, { state: action.payload })
        case UPDATE_PROP_ZIP:
            return Object.assign({}, state, { zip: action.payload })
        case UPDATE_IMAGEURL:
            return Object.assign({}, state, { imageUrl: action.payload })
        case UPDATE_LOAN_AMOUNT:
            return Object.assign({}, state, { loanAmount: action.payload })
        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({}, state, { monthlyMortgage: action.payload, recommendedRent: action.payload * 1.25 })
        case UPDATE_DESIRED_RENT:
            return Object.assign({}, state, { desiredRent: action.payload })


            //Dashboard Cases


        case CREATE_NEW_PROPERTY:
            return Object.assign({}, state, {properties: action.payload})
        case GET_ALL_PROPERTIES:
            return Object.assign({}, state, {properties: action.payload})
        case DELETE_PROPERTY:
            return Object.assign({}, state, { properties: state.properties.splice( state.properties.indexOf( action.payload, 1 ) ) });
        case FILTER_PROPERTIES:
            return Object.assign({}, state, { properties: action.payload });    
        case PUSH_WIZARD_COMPONENT: {
            let newState = Object.assign({}, state);
            for( var i in action.payload ) {
                newState.wizardState[i] = action.payload[i];
            }
            return newState;
        }
        
        case RESET_WIZARD_STATUS: {
            let newState = Object.assign({}, state);
            for( var j in newState.wizardState ) {
                newState.wizardState[j] = ({}, wizardState);
            }
            return newState;
        }
  
      default: return state;  
    }
}

export function updateLoginStatus( username, password ) {
    let loginStatus = false;
    
    if (username === 'username' && password === 'password') {
        loginStatus = true;        
    }
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: loginStatus
    }
}
export function updateUsername( username ) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updatePassword( password ) {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}
export function updateUserId( userid ) {
    return {
        type: UPDATE_USERID,
        payload: userid
    }
}
export function logoutUser( loginStatus ) {
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: loginStatus
    }
}
export function updatePropertyName( propertyName ) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: propertyName
    }
}
export function updatePropertyDescription( propertyDescription ) {
    return {
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propertyDescription
    }
}
export function updatePropAddress( address ) {
    return {
        type: UPDATE_PROP_ADDRESS,
        payload: address
    }
}
export function updatePropCity( city ) {
    return {
        type: UPDATE_PROP_CITY,
        payload: city
    }
}
export function updatePropState( state ) {
    return {
        type: UPDATE_PROP_STATE,
        payload: state
    }
}
export function updatePropZip( zip ) {
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: zip
    }
}
export function updateImageUrl( imageUrl ) {
    return {
        type: UPDATE_IMAGEURL,
        payload: imageUrl
    }
}
export function updateLoanAmount( loanAmount ) {
    return {
        type: UPDATE_LOAN_AMOUNT,
        payload: loanAmount
    }
}
export function updateMonthlyMortgage( monthlyMortgage ) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}
export function updateDesiredRent( desiredRent ) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}
export function updateWizard( obj ) {
    
 const promise = axios.post( url + '/api/properties' ).then( response => {

 } )   
  }
  
  export function resetWizard() {
    return {
      type: RESET_WIZARD_STATUS,
      payload: null
    };
  }
export default reducer;