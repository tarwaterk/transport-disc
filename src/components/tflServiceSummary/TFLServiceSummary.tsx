import React from 'react';
import { useSelector } from 'react-redux';
import { selectedTFLService } from '../../selectors/menuSelectors';
import { serviceDisruptions } from '../../helpers/tflService';
import { TFLServiceDisruption } from '../tflServiceDisruption/TFLServiceDisruption';
import { Notification } from '../notification/Notification';

const TFLServiceSummary: React.FC = () => {
    const selectedService = useSelector(selectedTFLService);
    const tflServiceDisruptions = serviceDisruptions(selectedService);
    const hasDisruption = tflServiceDisruptions.length > 0;

    return (
        selectedService ?
        <div>
            {
                hasDisruption ? 
                <Notification text={'Service currently suffering disruptions'} />
                :
                <Notification text={'No service disruptions'} />
            }
            {tflServiceDisruptions.map((disruption) => <TFLServiceDisruption key={`disruption-${disruption.lineId}`} {...disruption} />)}
        </div>
        :
        null
    );
};

export { TFLServiceSummary };
