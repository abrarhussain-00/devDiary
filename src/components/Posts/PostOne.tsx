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
                <Box className={classes.description}>
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