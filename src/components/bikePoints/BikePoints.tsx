import React from 'react';
import { useSelector } from 'react-redux';
import { selectBikePoints, selectCycleQuery } from '../../selectors/cycleSelectors';
import { BikePointSummary } from '../bikePointSummary/BikePointSummary';
import { Notification } from '../notification/Notification';

const BikePoints: React.FC = () => {
    const bikePoints = useSelector(selectBikePoints);
    const query = useSelector(selectCycleQuery);

    return (
        <>
            {
                query ?
                <section>
                    {
                        bikePoints.length > 0 ?
                        bikePoints.map((bikePoint) =>
                        <BikePointSummary key={`bike-point-${bikePoint.id}`} {...bikePoint} />)
                        :
                        <Notification text={`No bike points found for '${query}'`} />
                    }
                </section>
                :
                null
            }
        </>
    );
};

export { BikePoints };
