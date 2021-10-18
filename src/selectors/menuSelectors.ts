import { TFLService } from '../models/menu';
import { AppState } from '../models/state';

export const selectMenuData = (state: AppState) => {
    return state.menu.sortedData;
};

export const selectSelected = (state: AppState) => {
    return state.menu.selected;
}

export const selectedTFLService = (state: AppState) => {
    return state.menu.sortedData.find((item: TFLService) => {
        return item.id === state.menu.selected;
    });
}
