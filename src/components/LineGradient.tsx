import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '0.5rem',
    background: 'linear-gradient(to right, #CCCCCC, #FFFFFF)', // Replace with your desired shades of gray
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    marginTop: '1rem', // Add marginTop style

  },
}));

const LineGradient: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default LineGradient;
