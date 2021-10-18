import { TFLService } from '../models/menu';

export const selectMenuData = (state: any) => {
    return state.menu.sortedData;
};

export const selectedTFLService = (state: any) => {
    return state.menu.sortedData.find((item: TFLService) => {
        return item.id === state.menu.selected;
    });
}
