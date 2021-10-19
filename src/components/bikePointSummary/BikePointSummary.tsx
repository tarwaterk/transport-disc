import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { BikePoint } from '../../models/cycle';

const StyledSummary = styled('div')`
    display: flex;
    align-items: baseline;
    padding-left: 16px;
    padding-bottom: 8px;
    margin-bottom: 8px;

    &:not(:last-child) {
        border-bottom: 2px solid #EEE;
    }

    p {
        margin: 0;
        margin-left: 8px;
    }
`;

interface OwnProps extends BikePoint {}

const BikePointSummary: React.FC<OwnProps> = ({
    id,
    commonName,
    lat,
    lon
}) => {
    return (
        <StyledSummary>
            <FontAwesomeIcon icon={faMap} size='sm' color='#53d475' />
            <p>
                {`${id} ${commonName} (${lat}, ${lon})`}
            </p>
        </StyledSummary>
    );
};

export { BikePointSummary };
