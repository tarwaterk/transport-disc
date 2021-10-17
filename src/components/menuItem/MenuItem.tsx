import React from 'react';
import { TFLService } from '../../models/menu';

interface OwnProps extends TFLService {}

const MenuItem: React.FC<OwnProps> = ({
    name
}) => {
    return (
        <li>{name}</li>
    );
};

export { MenuItem };
