import { secondarySort } from '../helpers/sort';
import { MenuState } from '../models/state';

const initialState: MenuState = {
    sortedData: []
};

const MENU_TYPES = {
    UPDATE_MENU: 'UPDATE_MENU'
};

export default function menuReducer(state = initialState, action: any) {
    switch (action.type) {
        case MENU_TYPES.UPDATE_MENU:
            const sortedData = action.payload.sort(secondarySort('modeName', 'name'));
            console.log(sortedData);
            return {
                ...state,
                sortedData
            };
        default:
            return state;
    }
}

export { MENU_TYPES };
