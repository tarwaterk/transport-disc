const initialState = {
    data: []
};

const MENU_TYPES = {
    UPDATE_MENU: 'UPDATE_MENU'
};

export default function menuReducer(state = initialState, action: any) {
    switch (action.type) {
        case MENU_TYPES.UPDATE_MENU:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export { MENU_TYPES };
