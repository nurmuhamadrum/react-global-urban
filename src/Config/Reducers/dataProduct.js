import { SET_DATA_PRODUCT } from '../Type';

const initialState = {
    data: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_PRODUCT:
            return { data: action.payload}
        default:
            return state;
    }
}

export default reducers;