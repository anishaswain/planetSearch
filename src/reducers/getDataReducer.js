const initState = {
    data: [],
    colors:[],
    sizes:[],
    shapes:[],
}

const getData = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_FULL_DATA":
            return { ...state, data: action.payload, loading: false }
        case "FETCH_COLORS":
            return { ...state, colors: action.payload, loading: false }
        case "FETCH_SHAPES":
            return { ...state, shapes: action.payload, loading: false }
        case "FETCH_COLORS":
            return { ...state, colors: action.payload, loading: false }
        default:
            return state
    }
}

export default getData