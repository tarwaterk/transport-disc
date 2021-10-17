import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { TFLService } from '../../models/menu';

const StyledLi = styled('li')`
    list-style: none;
    padding: 5px;
    margin: 5px;
    border: 1px solid black;

    & > svg {
        margin-right: 4px;
    }
`;

const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log('clicked');
};

interface OwnProps extends TFLService {}

const MenuItem: React.FC<OwnProps> = ({
    name,
    serviceTypes,
    lineStatuses
}) => {
    const hasNightService = serviceTypes.reduce((prev, serviceType) => {
        return serviceType.name === 'Night' || prev;
    }, false);
    const hasDisruption = lineStatuses.reduce((prev, lineStatus) => {
        return lineStatus.statusSeverity !== 10 || prev;
    }, false);
    return (
        <StyledLi onClick={handleClick}>
            {hasNightService && <FontAwesomeIcon icon={faMoon} size='sm' color='#1c7694' />}
            {hasDisruption && <FontAwesomeIcon icon={faExclamationTriangle} size='sm' color='#ebe12d' />}
            {name}
        </StyledLi>
    );
};

export { MenuItem };
