import React from 'react';
import { LineStatus } from '../../models/menu';

interface OwnProps extends LineStatus {}

const TFLServiceDisruption: React.FC<OwnProps> = ({
    statusSeverityDescription,
    reason
}) => {
    return (
        <div>
            <p>
                Status Severity: {statusSeverityDescription}
            </p>
            <p>
                Reason: {reason}
            </p>
        </div>
    );
};

export { TFLServiceDisruption };
