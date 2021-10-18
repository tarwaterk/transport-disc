import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MENU_TYPES } from '../../reducers/menuReducer';
import { selectMenuData } from '../../selectors/menuSelectors';
import { MenuItem } from '../menuItem/MenuItem';
import { TFLService } from '../../models/menu';

const StyledMenu = styled('menu')`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
`;

const CYCLE_HIRE_OPTION: TFLService = {
    id: 'cycle-hire',
    name: 'Cycle Hire',
    modeName: 'bicycle',
    lineStatuses: [],
    serviceTypes: []
};

const ServiceMenu: React.FC = () => {
    const menuData: Array<TFLService> = useSelector(selectMenuData);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
        .then(async (response) => {
            const data = await response.json();
            dispatch({
                type: MENU_TYPES.UPDATE_MENU_DATA,
                payload: data
            });
        });
    }, [dispatch])

    return (
        <StyledMenu>
            {
                [...menuData, CYCLE_HIRE_OPTION].map((item: TFLService) => 
                    <MenuItem key={`menu-item-${item.modeName}-${item.name}`} {...item} />)
            }
        </StyledMenu>
    );
};

export { ServiceMenu };
