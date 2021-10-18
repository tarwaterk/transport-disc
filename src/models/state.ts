import { TFLService } from './menu';
import { BikePoint } from './cycle';

export interface AppState {
    menu: MenuState;
    cycle: CycleState;
}

export interface MenuState {
    sortedData: Array<TFLService>;
    selected: string;
}

export interface CycleState {
    bikePoints: Array<BikePoint>;
}
