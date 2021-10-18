import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelected } from '../../selectors/menuSelectors';
import { CYCLE_HIRE_OPTION } from '../serviceMenu/ServiceMenu';
import { CycleHire } from '../cycleHire/CycleHire';
import { TFLServiceSummary } from '../tflServiceSummary/TFLServiceSummary';

const MainContent: React.FC = () => {
    const menuSelected = useSelector(selectSelected);

    return (
        <section>
            {
                menuSelected === CYCLE_HIRE_OPTION.id
                ?
                <CycleHire />
                :
                <TFLServiceSummary />
            }
        </section>
    );
};

export { MainContent };
