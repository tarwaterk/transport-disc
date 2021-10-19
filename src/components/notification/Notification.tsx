import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled('div')`
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: #579ade;
    color: #fff;
    border-radius: 2px;

    p {
        margin: 0;
        margin-left: 8px;
    }
`;

interface OwnProps {
    text: string;
}

const Notification: React.FC<OwnProps> = ({
    text
}) => {
    return (
        <StyledContainer>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <p>{text}</p>
        </StyledContainer>
    )
};

export { Notification };
