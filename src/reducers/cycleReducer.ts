import { CycleState } from '../models/state';

const initialState: CycleState = {
    bikePoints: []
};

const CYCLE_TYPES = {
    UPDATE_BIKE_POINTS: 'UPDATE_BIKE_POINTS'
};

export default function cycleReducer(state = initialState, action: any) {
    switch(action.type) {
        case CYCLE_TYPES.UPDATE_BIKE_POINTS:
            return {
                ...state,
                bikePoints: action.payload.data
            };
        default:
            return state;
    }
}

export { CYCLE_TYPES };
