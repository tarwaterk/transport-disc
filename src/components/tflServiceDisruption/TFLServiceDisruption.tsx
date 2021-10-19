import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { LineStatus } from '../../models/menu';

const StyledContainer = styled('div')`
    display: flex;
    padding: 8px;
    border-bottom: 2px solid #EEE;

    & > *:first-child {
        margin-right: 8px;
    }

    p {
        margin-top: 0;
        margin-bottom: 8px;
    }
`;

interface OwnProps extends LineStatus {}

const TFLServiceDisruption: React.FC<OwnProps> = ({
    statusSeverityDescription,
    reason
}) => {
    return (
        <StyledContainer>
            <FontAwesomeIcon icon={faExclamationTriangle} color='#ebe12d' />
            <div>
                <p>
                    <strong>Status Severity</strong>: {statusSeverityDescription}
                </p>
                <p>
                    <strong>Reason</strong>: {reason}
                </p>
            </div>
        </StyledContainer>
    );
};

export { TFLServiceDisruption };
