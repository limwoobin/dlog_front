import { UserModel } from '../core/models/UserModel';

export const UserActionType = {
    SIGNUP_REQUEST : 'user/SIGNUP_REQUEST' as const,
    SIGNUP_SUCCESS : 'user/SIGNUP_SUCCESS' as const,
    SIGNUP_FAILURE : 'user/SIGNUP_FAILURE' as const,

    LOGIN_REQUEST : 'user/LOGIN_REQUEST' as const,
    LOGIN_SUCCESS : 'user/LOGIN_SUCCESS' as const,
    LOGIN_FAILURE : 'user/LOGIN_FAILURE' as const,

    LOGOUT_REQUEST : 'user/LOGOUT_REQUEST' as const,
    LOGOUT_SUCCESS : 'user/LOGOUT_SUCCESS' as const,
    LOGOUT_FAILURE : 'user/LOGOUT_FAILURE' as const,
}

export const SignUp = (data: UserModel) => ({ 
    type: UserActionType.SIGNUP_REQUEST,
    payload: data
});

export const SignUpSuccess = (data: any) => ({ 
    type: UserActionType.SIGNUP_SUCCESS,
    payload: data
});

export const SignUpFailure = (data: any) => ({ 
    type: UserActionType.SIGNUP_FAILURE,
    payload: data
});


export const LoginRequest = (data: any) => ({ 
    type: UserActionType.LOGIN_REQUEST 
});

export const LoginSuccess = (data: any) => ({
    type: UserActionType.LOGIN_SUCCESS,
    payload: data
});

export const LoginFailure = (data: any) => ({
    type: UserActionType.LOGIN_FAILURE,
    payload: data
})


export const LogoutRequest = (data: any) => ({ 
    type: UserActionType.LOGOUT_REQUEST 
});

export const LogoutSuccess = (data: any) => ({
    type: UserActionType.LOGOUT_SUCCESS,
    payload: data
});

export const LogoutFailure = (data: any) => ({
    type: UserActionType.LOGOUT_FAILURE,
    payload: data
})
