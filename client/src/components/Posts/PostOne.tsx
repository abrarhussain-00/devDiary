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

const PostOne = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <br/><br/>
                <Box>
                    <Box className={classes.title}>My First Post!</Box>
                </Box>
                <Box>
                    <Box className={classes.date}>05-20-23</Box>
                </Box>
                <Box>
                    Hey everyone! Check out my first blog post. Making a blog post site and updating everyday till I get hired. Im
                    going to post everyday in four sections:
                    <ul>
                        <li>Initial remarks</li>
                        <li>What project I worked on that day</li>
                        <li>Leetcode Prep</li>
                        <li>Closing remarks</li>
                    </ul>
                </Box>
            </Box>
        </div>
    )
}

export default PostOne