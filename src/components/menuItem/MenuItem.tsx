import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { TFLService } from '../../models/menu';
import { MENU_TYPES } from '../../reducers/menuReducer';

const StyledLi = styled('li')`
    list-style: none;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;

    & > svg {
        margin-right: 4px;
    }
`;

const handleClick = (id: string, dispatch: Dispatch) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    
    dispatch({
        type: MENU_TYPES.UPDATE_MENU_SELECTED,
        payload: id
    });
};

interface OwnProps extends TFLService {}

const MenuItem: React.FC<OwnProps> = ({
    id,
    name,
    serviceTypes,
    lineStatuses
}) => {
    const dispatch = useDispatch();

    const hasNightService = serviceTypes.reduce((prev, serviceType) => {
        return serviceType.name === 'Night' || prev;
    }, false);
    const hasDisruption = lineStatuses.reduce((prev, lineStatus) => {
        return lineStatus.statusSeverity !== 10 || prev;
    }, false);

    return (
        <StyledLi onClick={handleClick(id, dispatch)}>
            {hasNightService && <FontAwesomeIcon icon={faMoon} size='sm' color='#1c7694' />}
            {hasDisruption && <FontAwesomeIcon icon={faExclamationTriangle} size='sm' color='#ebe12d' />}
            {name}
        </StyledLi>
    );
};

export { MenuItem };
