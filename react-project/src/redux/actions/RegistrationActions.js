import {GET_USER_INFO} from "../action-types/ActionTypes";

export const dispatchUserInfo = (dispatch, data) => {
    dispatch({type: GET_USER_INFO,payload: {data}})
}