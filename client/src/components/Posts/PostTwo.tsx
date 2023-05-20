import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    date: {
        fontSize: '10px',
        padding: '0vh 0rem 0vh 5vh',
        fontWeight: 'bold'
    },
    title: {
        fontSize: '25px',
        padding: '0vh 0rem 0vh 5vh',
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    description: {
        padding: '0.375rem 0.75rem',
        display: 'inline-block',
        textAlign: 'left',
    },
}));

const PostTwo = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <br/><br/>
                <Box>
                    <Box className={classes.title}>Getting Asjusted</Box>
                </Box>
                <Box>
                    <Box className={classes.date}>05-21-23</Box>
                </Box>
                <Box>
                    Day 2 ready
                </Box>
            </Box>
        </div>
    )
}

export default PostTwo