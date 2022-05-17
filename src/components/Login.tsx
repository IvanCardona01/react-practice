import { useEffect, useReducer } from "react"
import { type } from '@testing-library/user-event/dist/type';

interface AuthState {
    validating: boolean;
    token: string | null;
    userName: string;
    name: string;
}

const initialState: AuthState = {
    validating: true, 
    token: null,
    userName: '',
    name: ''
}

type LoginPayload = {
    userName: string,
    name: string
}

type AuthAction = { type: 'logout'} | { type: 'login', payload: LoginPayload};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
                
            return {
                validating: false,
                token: null,
                userName: '',
                name: ''
            }   
        case 'login':
            const payload = action.payload
            return {
                validating: false,
                token: '1234',
                userName: payload.userName,
                name: payload.name
            }
        default:
            return state
    }
}

export const Login = () => {

    const [{validating, token, name}, dispach] = useReducer(authReducer, initialState);

    useEffect(() => {
            setTimeout(() => {
                dispach({type: 'logout'})
            },1500);
    },[])
    
    const login = () => {
        dispach({type: 'login', 
            payload: {
                name: "Ivan",
                userName: "Cardona"
            }
        })
    }

    const logout = () => {
        dispach({type: 'logout'})
    }

    if (validating){
        return (
            <>
                <h2>Login</h2>
                <br />  
                <div className="alert alert-info">
                Validating
                </div>
            </>
        )
    }

    return (
        <>
            {
                (token)
                ? <div className="alert alert-success">Athendicated with {name}</div>
                : <div className="alert alert-danger">Not Athenticated</div>
            }

            {
                (token)
                ? (<button className="btn btn-danger" onClick={logout}>Logout</button>)
                : (<button className="btn btn-primary" onClick={login}>Login</button>)
            }
            
        </>
    )

}
