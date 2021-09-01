const kittens = (state = { kittens: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_KITTENS":
            return {
                ...state,
                loading: true
            }
        case "KITTENS_LOADED":
            return {
                ...state, 
                kittens: action.payload,
                loading: false
            }
        case "ADDING_KITTEN":
            return {
                ...state,
                loading: true
            }
        case "KITTEN_ADDED":
            return {
                ...state,
                kittens: [...state.kittens, action.payload],
                loading: false
            }
            case "DELETING_KITTEN":
                return {
                    ...state,
                    loading: true
                }
            case "KITTEN_DELETED":
                return {
                    ...state,
                    kittens: [...state.kittens.filter(kitten => kitten.id !== parseInt(action.payload))],
                    loading: false
                }
            case "EDITING_KITTEN":
                return {
                    ...state,
                    loading: true
                }
            case "KITTEN_EDITED":
                return {
                    ...state,
                    kittens: [...state.kittens.filter(kitten => kitten.id !== action.payload.id), action.payload],
                    loading: false
                }
        default:
            return state
    }
}

export default kittens
