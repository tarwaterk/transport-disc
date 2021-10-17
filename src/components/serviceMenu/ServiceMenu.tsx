import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_TYPES } from '../../reducers/menuReducer';

const ServiceMenu: React.FC = () => {
    const menuData = useSelector((state: any) => {
        return state.menu.data
    });
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
        .then(async (response) => {
            const data = await response.json();
            dispatch({
                type: MENU_TYPES.UPDATE_MENU,
                payload: data
            });
        });
    }, [dispatch])

    return (
        <div>{JSON.stringify(menuData)}</div>
    );
};

export { ServiceMenu };
