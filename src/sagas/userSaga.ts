import { takeLatest, all, call, put, take, delay } from 'redux-saga/effects';
import { API } from '../api/callAA';
import { UserActionType , SignUp} from '../actions/userAction';
import { ApiAction } from '../reducers/appReducer';
import { UserModel } from '../core/models/UserModel';
import {
    SignUpRequest,
    LoginRequest,
} from '../reducers/userReducer';

export default function* userSaga () {
    yield all([
        takeLatest(UserActionType.SIGNUP_REQUEST , signUp$),
        takeLatest(UserActionType.LOGIN_REQUEST , login$),
        takeLatest(UserActionType.LOGOUT_REQUEST , logout$)
    ]);
}


function* signUp$ (action: SignUpRequest) {
    try {
        API.SIGN_UP(action.payload);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({ 
            type: UserActionType.SIGNUP_SUCCESS,
            payload: 200
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.SIGNUP_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}

function* login$ (action: LoginRequest) {
    try {
        API.LOGIN(action.payload);
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({
            type: UserActionType.LOGIN_SUCCESS,
            payload: action.payload
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.LOGIN_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}

function* logout$ () {
    try {
        API.LOGOUT();
        yield put ({ type: ApiAction.REQUEST_API_CALL_STATUS })
        yield put ({ 
            type: UserActionType.LOGOUT_SUCCESS,
            payload: 200
        })
    } catch (error) {
        yield put ({ 
            type: UserActionType.LOGOUT_FAILURE,
            payload: error.message
        })
    } finally {
        yield put ({ type: ApiAction.CLEAR_API_CALL_STATUS })
    }
}