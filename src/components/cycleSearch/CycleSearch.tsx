import React from 'react';
import { useDispatch } from 'react-redux';
import { CYCLE_TYPES } from '../../reducers/cycleReducer';

const CycleSearch: React.FC = () => {
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${e.target.value}`)
        .then(async (response) => {
            const data = response.json();
            dispatch({
                type: CYCLE_TYPES.UPDATE_BIKE_POINTS,
                payload: data
            })
        });
    }
    return (
        <form>
            <input type='text' onChange={handleChange} />
        </form>
    );
};

export { CycleSearch };
