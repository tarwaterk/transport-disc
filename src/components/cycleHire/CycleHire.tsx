import React from 'react';
import { CycleSearch } from '../cycleSearch/CycleSearch';
import { BikePoints } from '../bikePoints/BikePoints';

const CycleHire: React.FC = () => {
    return (
        <>
            <CycleSearch />
            <BikePoints />
        </>
    );
};

export { CycleHire };
