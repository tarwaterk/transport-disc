import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MENU_TYPES } from '../../reducers/menuReducer';
import { selectMenuData } from '../../selectors/menuSelectors';
import { MenuItem } from '../menuItem/MenuItem';
import { TFLService } from '../../models/menu';

const ServiceMenu: React.FC = () => {
    const menuData: Array<TFLService> = useSelector(selectMenuData);
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
        <menu>{menuData.map((item: TFLService) => <MenuItem {...item} />)}</menu>
    );
};

export { ServiceMenu };
