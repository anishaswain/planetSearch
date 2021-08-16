const initState = {
    data: [],
    colors:[],
    sizes:[],
    shapes:[],
    isLoading:true
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_FULL_DATA":
            return { ...state, data: action.payload}
        case "FETCH_COLORS":
            return { ...state, colors: action.payload}
        case "FETCH_SHAPES":
            return { ...state, shapes: action.payload}
        case "FETCH_SIZES":
            return { ...state, sizes: action.payload}
        case "LOADING_SUCCESS":
            return { ...state, isLoading: false}
        default:
            return state
    }
}

export default rootReducer