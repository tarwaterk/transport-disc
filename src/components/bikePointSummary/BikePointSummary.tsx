import React from 'react';
import { BikePoint } from '../../models/cycle';

interface OwnProps extends BikePoint {}

const BikePointSummary: React.FC<OwnProps> = ({
    id,
    commonName,
    lat,
    lon
}) => {
    return (
        <p>
            {`${id} ${commonName} (${lat}, ${lon})`}
        </p>
    );
};

export { BikePointSummary };
