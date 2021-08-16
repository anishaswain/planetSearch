const initState = {
    colorFilter: [],
    shapeFilter: [],
    sizeFilter: [],
    searchFilter: "",
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_COLOR_FILTER":
            return { ...state, colorFilter: action.payload }
        case "SET_SHAPE_FILTER":
            return { ...state, shapeFilter: action.payload }
        case "SET_SIZE_FILTER":
            return { ...state, sizeFilter: action.payload }
        case "SET_SEARCH_FILTER":
            return { ...state, searchFilter: action.payload }
        default:
            return state
    }
}

export default filterReducer