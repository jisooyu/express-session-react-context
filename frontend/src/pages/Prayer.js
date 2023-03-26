import React from 'react'
import { Paper, Button, dividerClasses } from '@mui/material'

function Prayer(props) {
    return (
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

            <h2 >{props.prayer.name}</h2>
            <p >{props.prayer.description}</p>

            <Button className="CheckButton">
            </Button>
        </Paper>
    )
}

export default Prayer;