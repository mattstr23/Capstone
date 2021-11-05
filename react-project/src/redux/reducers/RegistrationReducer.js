import { GET_USER_INFO } from "../action-types/ActionTypes"

const initialState = []

const RegistrationData = (state=initialState, action) => {
    switch(action.type){
        case GET_USER_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default RegistrationData