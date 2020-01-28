const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "LOADING":
            return { ...state, loading: true }
            
        case "DASHBOARD_LOADED":
            return { ...state, ...payload, loading: false }
        default:
            return state
    }
}
