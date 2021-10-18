import React from 'react';
import { useSelector } from 'react-redux';
import { selectedTFLService } from '../../selectors/menuSelectors';
import { serviceDisruptions } from '../../helpers/tflService';
import { TFLServiceDisruption } from '../tflServiceDisruption/TFLServiceDisruption';

const TFLServiceSummary: React.FC = () => {
    const selectedService = useSelector(selectedTFLService);
    const tflServiceDisruptions = serviceDisruptions(selectedService);
    const hasDisruption = tflServiceDisruptions.length > 0;

    return (
        selectedService ?
        <div>
            <h3>
            {
                hasDisruption ? 
                'Service currently suffering disruptions'
                :
                'No service disruptions'
            }
            </h3>
            {tflServiceDisruptions.map((disruption) => <TFLServiceDisruption key={`disruption-${disruption.id}`} {...disruption} />)}
        </div>
        :
        null
    );
};

export { TFLServiceSummary };
