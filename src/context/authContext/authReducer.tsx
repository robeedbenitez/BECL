

const authReducer =(state, action) =>{
    
    switch(action.type){
        case 'singIn':
            return {
                ...state,
                isLoggedIn: true,
            }
            case 'setGoogleToken':
            return {
                ...state,
                googleToken:action.payload,
            }
            case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                googleToken:null,
                BECLToken: null,
            }
            case 'setBECLToken':
            return {
                ...state,
                BECLToken:action.payload,
            }
            
        default:
            return state;
    }
}
export default authReducer;
