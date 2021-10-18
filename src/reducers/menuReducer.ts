import { secondarySort } from '../helpers/sort';
import { MenuState } from '../models/state';

const initialState: MenuState = {
    sortedData: [],
    selected: ''
};

const MENU_TYPES = {
    UPDATE_MENU_DATA: 'UPDATE_MENU_DATA',
    UPDATE_MENU_SELECTED: 'UPDATE_MENU_SELECTED'
};

export default function menuReducer(state = initialState, action: any) {
    switch (action.type) {
        case MENU_TYPES.UPDATE_MENU_DATA:
            const sortedData = action.payload.sort(secondarySort('modeName', 'name'));
            return {
                ...state,
                sortedData
            };
        case MENU_TYPES.UPDATE_MENU_SELECTED:
            const selected = action.payload;
            return {
                ...state,
                selected
            };
        default:
            return state;
    }
}

export { MENU_TYPES };
