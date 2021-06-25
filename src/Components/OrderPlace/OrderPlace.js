import React from 'react';
import { useParams } from 'react-router-dom';

const OrderPlace = () => {
    const { servicekey } = useParams();
    console.log(servicekey);
    return (
        <div>
            <h2>order place comming soon</h2>
        </div>
    );
};

export default OrderPlace;