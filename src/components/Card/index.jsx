import React from 'react';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.scss';

export default function GifCard(props) {
    const { imageUrl, deleteSelectedGif, selectedId } = props;

    return (
        <div className="cardContent" style={{ border: `6px solid rgb(${Math.floor(Math.random() * 111)}, ${Math.floor(Math.random() * 111)}, ${Math.floor(Math.random() * 111)})` }}>
            <DeleteIcon onClick={() => deleteSelectedGif(selectedId)} className='delete-gif-icon' />
            <Card sx={{ maxWidth: 345 }}>
                <iframe src={imageUrl} title={imageUrl} width="200" height="200" frameBorder="0" className="giphy-embed" />
            </Card>
        </div>

    );
}
