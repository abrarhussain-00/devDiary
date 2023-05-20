import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { TextField, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
  },
  image: {
    width: '75%',
    height: 'auto',
    marginLeft: '5vh',
  },
}));

const useContactForm = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return {
    register,
    onSubmit,
    errors,
  };
};

const ContactForm = () => {
  const classes = useStyles();
  const { register, onSubmit, errors } = useContactForm();

  return (
    <section>
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Box textAlign="center">
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 'bold', fontSize: '2rem' }}>
            <span style={{ color: 'black', marginLeft: '5vh' }}>CONTACT ME</span>
          </h1>
        </Box>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className={classes.container}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img className={classes.image} src="../assets/contact-image.jpeg" alt="contact" />
            </motion.div>
          </Grid>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/abrarsoftwaredev@gmail.com"
              method="POST"
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
                error={!!errors.name}
                helperText={
                  errors.name
                    ? errors.name.type === 'required'
                      ? 'This field is required.'
                      : 'Max length is 100 characters.'
                    : ''
                }
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                error={!!errors.email}
                helperText={
                  errors.email
                    ? errors.email.type === 'required'
                      ? 'This field is required.'
                      : 'Please enter a valid email address.'
                    : ''
                }
                style={{ marginTop: '3vh' }}
              />
              <TextField
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
                label="Message"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
                error={!!errors.message}
                helperText={
                  errors.message
                    ? errors.message.type === 'required'
                      ? 'This field is required.'
                      : 'Max length is 2000 characters.'
                    : ''
                }
                style={{ marginTop: '3vh' }}
              />
              <div className="flex">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    fontWeight: 'bold',
                    marginTop: '3vh',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  type="submit"
                >
                  <span style={{ marginRight: '10px', color: 'black' }}>SUBMIT FORM</span>
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-sharp/24/filled-sent.png"
                    alt="filled-sent"
                  />
                </Button>
              </div>
            </form>
          </motion.div>
        </Grid>
      </div>
    </section>
  );
};

export default ContactForm;
