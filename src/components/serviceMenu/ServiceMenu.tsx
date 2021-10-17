import React, { useEffect, useState } from 'react';

const ServiceMenu: React.FC = () => {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        fetch('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
        .then(async (response) => {
            const body = await response.json();
            setMenuData(body);
        })
    }, [])

    return (
        <div>{JSON.stringify(menuData)}</div>
    );
};

export { ServiceMenu };
