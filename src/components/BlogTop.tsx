import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '1.25rem',
    borderRadius: '50px',
    width: '100%',
    maxWidth: '352px',
    margin: 'auto',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    marginBottom: '2rem',
    maxWidth: '100%',
  },
  tagContainer: {
    marginBottom: '1rem',
    display: 'flex',
  },
  title: {
    fontSize: '25px',
    borderRadius: '9999px',
    padding: '0.375rem 0.75rem',
    fontWeight: 'bold',
    backgroundColor: 'white'
  },
  description: {
    padding: '0.375rem 0.75rem',
    display: 'inline-block',
    textAlign: 'left',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
    gridGap: '2rem',
    maxWidth: '1408px',
    margin: '0 auto',
    marginTop: '1rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns on medium screens
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr', // 1 column on small screens
    },
  },
}));

const BlogTop = () => {
  const classes = useStyles();

  return (
    <Box>
      <Title />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.jpg?s=612x612&w=0&k=20&c=ijjq-DLNxIaPuGvIX8k06IZxMAjGpyJeboaV_byCX9k="
          alt="pic"
          width='40%'
          style={{ justifyContent: 'center' }}
        />
      </div>
      <Typography variant='h5' style={{ marginTop: '0.75rem', marginLeft: '5vh' }}>***Lastest three posts 📝:</Typography>

      <Box className={classes.gridContainer}>
        <Box className={classes.container}>
          <Box className={classes.tagContainer}>
            <Box className={classes.title}>My First Post!</Box>
          </Box>
          <Box className={classes.description}>
            Join me on my first ever blog post! The tech markets is lower than it has ever been. Let's use this time to sharpen our skills
            and be better applicants! I will be blogging everyday and if you dont see one up for a certain day, be sure to contact me to
            hold me accountable. Join me on my journey!
          </Box>
          <a href='/day1'>Day 1</a>
        </Box>

        {/* <Box className={classes.container}>
          <Box className={classes.tagContainer}>
            <Box className={classes.title}>Getting adjusted</Box>
          </Box>
          <Box className={classes.description}>
            Living broke? You're not alone. Read up on how I keep myself motivated! And as always, we will talk about project, do a leetcode problem
            and end off! Remember, leetcode a day drives umemployment aways!
          </Box>
          <a href='/day2'>Day 2</a>
        </Box>

        <Box className={classes.container}>
          <Box className={classes.tagContainer}>
            <Box className={classes.title}>Keeping my head up</Box>
          </Box>
          <Box className={classes.description}>
            <Box className={classes.description}>
              Why is it hard to have hope and so easy to lose it? Read up on how I try to stay desciplined with my projects. Don't feel like doing leetcode?
              I have not been working on it either till I started the blog. As you may have seen, we are starting the from very top so chin up!
            </Box>
            <a href='/day3'>Day 3</a>
          </Box>
        </Box> */}
      </Box>
    </Box>

  );
};

export default BlogTop;
