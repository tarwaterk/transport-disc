import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import styled from 'styled-components';
import { CYCLE_TYPES } from '../../reducers/cycleReducer';
import { BikePoint } from '../../models/cycle';

const StyledForm = styled('form')`
    padding: 8px;

    input {
        padding: 4px 8px;
        border-radius: 4px;
    }
`;

const cycleQueryPayload = (query: string, data: Array<BikePoint>) => {
    return {
        data,
        query
    };
};

const handleCycleDispatch = async (
    e: React.ChangeEvent<HTMLInputElement>,
    response: Response,
    dispatch: Dispatch
) => {
    const data = await response.json();
    dispatch({
        type: CYCLE_TYPES.UPDATE_BIKE_POINTS,
        payload: cycleQueryPayload(e.target.value, data)
    });
}

const CycleSearch: React.FC = () => {
    const dispatch = useDispatch();
    const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const requestURL = `https://api.tfl.gov.uk/BikePoint/Search?query=${e.target.value}`;

        caches.open('cycleCache')
        .then(async (cache) => {
            const cachedResp = await cache.match(requestURL);
            if (cachedResp) {
                handleCycleDispatch(e, cachedResp, dispatch);
            } else {
                fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${e.target.value}`)
                .then(async (response) => {
                    const respClone = response.clone();
                    await cache.put(requestURL, respClone);
                    handleCycleDispatch(e, response, dispatch);
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: CYCLE_TYPES.UPDATE_BIKE_POINTS,
                payload: cycleQueryPayload(e.target.value, [])
            });
        });
    }, 1000);

    return (
        <StyledForm>
            <input type='text' onChange={handleChange} placeholder={'Search for bike points'} />
        </StyledForm>
    );
};

export { CycleSearch };
