import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    title: {
        fontSize: '25px',
        padding: '0vh 0rem 0vh 5vh',
        fontWeight: 'bold',
        backgroundColor: 'white'
    },
    date: {
        fontSize: '15px',
        padding: '0vh 0rem 0vh 5vh',
        fontWeight: 'bold',
        marginTop:'0.25rem'
    },
    description: {
        display: 'inline-block',
        marginLeft: '5vh',
        marginTop: '3vh'
    },
}));

const PostTwo = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <br/><br/>
                <Box>
                    <Box className={classes.title}>Getting Adjusted</Box>
                </Box>
                <Box>
                    <Box className={classes.date}>05-23-23</Box>
                </Box>
                <Box className={classes.description}>
                    Day 2 ready
                </Box>
            </Box>
        </div>
    )
}

export default PostTwo