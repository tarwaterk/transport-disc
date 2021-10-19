import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSelected } from '../../selectors/menuSelectors';
import { ServiceMenu, CYCLE_HIRE_OPTION } from '../serviceMenu/ServiceMenu';
import { CycleHire } from '../cycleHire/CycleHire';
import { TFLServiceSummary } from '../tflServiceSummary/TFLServiceSummary';

const StyledSection = styled('section')`
    flex: 2;
    padding: 8px;
`;

const MainContent: React.FC = () => {
    const menuSelected = useSelector(selectSelected);

    return (
        <>
            <ServiceMenu />
            <StyledSection>
                {
                    menuSelected === CYCLE_HIRE_OPTION.id
                    ?
                    <CycleHire />
                    :
                    <TFLServiceSummary />
                }
            </StyledSection>
        </>
    );
};

export { MainContent };
