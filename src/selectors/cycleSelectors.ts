import { AppState } from '../models/state';

export const selectBikePoints = (state: AppState) => {
    return state.cycle.bikePoints;
};

export const selectCycleQuery = (state: AppState) => {
    return state.cycle.query;
};
