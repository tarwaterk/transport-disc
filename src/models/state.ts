import { TFLService } from './menu';

export interface AppState {
    menu: MenuState;
}

export interface MenuState {
    sortedData: Array<TFLService>;
    selected: string;
}
