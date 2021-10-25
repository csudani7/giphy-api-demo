import React from 'react';
import Card from '@mui/material/Card';

import './style.scss';

export default function GifCard(props) {
    const { imageUrl } = props;

    return (
        <div className="cardContent">

            <Card sx={{ maxWidth: 345 }}  >
                <iframe src={imageUrl} width="200" height="200" frameBorder="0" className="giphy-embed"></iframe>
            </Card>
        </div>

    );
}
