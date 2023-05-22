import React from 'react'
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../Title';


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
        marginTop: '0.25rem'
    },
    description: {
        display: 'inline-block',
        marginLeft: '5vh',
        marginRight: '5vh',
        marginTop: '3vh'
    },
}));

const PostOne = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <br /><br />
                <Box>
                    <Box className={classes.title}>My First Post!</Box>
                </Box>
                <Box>
                    <Box className={classes.date}>05-20-23</Box>
                </Box>
                <Box className={classes.description}>
                    Hey everyone! Welcome to my first-ever blog post. I'm thrilled to embark on this journey of sharing my
                    experiences, projects, and growth with all of you. The purpose of this blog is to hold myself accountable
                    and document my progress until I land a job. But more importantly, I want to create a space where we can learn
                    and grow together. In today's post, I'll be covering four sections: initial remarks, projects I worked on,
                    LeetCode prep, and closing remarks. So, let's dive in!

                    <h4>Initial Remarks:</h4>
                    I want to express my gratitude for your support and for joining me on this exciting adventure. Building this
                    blog is my way of being accountable to myself and to you, my readers. In this challenging time, where the tech
                    market is at an all-time low, it's important to stay positive and focused. Together, we can weather the storm
                    and emerge stronger. So, let's embrace this opportunity to sharpen our skills and become better applicants.

                    <h4>Projects I Worked On:</h4>
                    Over the weekend, I had the opportunity to work on an exciting project. The main purpose of this blog site is 
                    to hold myself accountable throughout my job search journey. By documenting and sharing the projects I work on, 
                    I aim to showcase my skills, highlight my progress, and demonstrate my dedication to continuous improvement.
                    <br/><br/>
                    Additionally, I want this blog to serve as a resource for others who are also navigating the tech job market. I 
                    believe that we can learn a great deal from each other's experiences and insights. By sharing the projects I work
                    on, I hope to inspire and provide practical insights into real-world applications of our skills.
                    <br/><br/>
                    Through this blog, I want to foster a sense of community and create a supportive space where we can learn and 
                    grow together. I encourage you to join me on this journey, engage with the content, and share your own 
                    experiences and projects. Together, we can overcome challenges, expand our skill sets, and become better 
                    applicants in the tech industry.

                    <h4>LeetCode Prep:</h4>
                    As part of my daily routine, I've decided to dedicate time to LeetCode practice. Starting from the basics, I 
                    will solve a LeetCode problem every day, sharing my thought process and approach from start to end. I want to 
                    make sure that everyone can tune in and benefit, regardless of their experience level. Together, we can tackle 
                    these challenges and enhance our problem-solving skills.

                    <h4>Closing Remarks:</h4>
                    Thank you for joining me on this new chapter of my life. Your support means the world to me. I'm committed to 
                    updating this blog every day, sharing my progress, insights, and thoughts with you. And in the event that I do 
                    happen to miss a day, please feel free to reach out and kindly remind me! Your support and accountability are 
                    greatly appreciated, and knowing that people are here with me will further motivate and encourage me to stay 
                    consistent in my blogging journey. I encourage you to follow along and engage with me. Your feedback and 
                    questions will not only hold me accountable but also foster a sense of community. Together, let's overcome 
                    obstacles, learn from each other, and achieve our goals. I look forward to seeing you every day as we continue 
                    this journey together.
                    <br/><br/>
                    Once again, thank you for being a part of my first blog post. Stay tuned for more exciting updates and inspiring 
                    content. Together, we'll navigate the challenges and emerge stronger than ever. Until next time!
                </Box>
            </Box>
        </div>
    )
}

export default PostOne