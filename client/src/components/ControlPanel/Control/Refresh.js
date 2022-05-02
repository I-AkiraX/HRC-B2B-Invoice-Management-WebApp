import React, { useState } from 'react';
import './Control.css'
import {Button, ButtonGroup} from '@mui/material';

export default function Refresh(props) {
    var reloadData = () => {
        window.location.reload(false);
    }
    return (
        <ButtonGroup size="large" aria-label="large button group" className='control'>
            <Button size='large' id='refresh-button' variant="contained" onClick={reloadData}>↻</Button>
        </ButtonGroup>
    );
}