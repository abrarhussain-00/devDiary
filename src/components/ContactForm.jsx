import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { Button, TextField, Typography, Grid } from '@material-ui/core';

const ContactForm = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
      <section id="contact" className="contact py-48">
        <Grid container spacing={3}>
          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src="../assets/contact-image.jpeg" alt="contact" />
            </motion.div>
          </Grid>
  
          {/* FORM */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/0d4e1b164215f0dce09b664297407935"
                method="POST"
              >
                {/* Form inputs */}
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                  })}
                  style={{ width: '75%', marginLeft: '5vh' }}

                />
                {errors.name && (
                  <Typography variant="body2" color="error" style={{ width: '75%', marginLeft: '5vh' }}>
                    {errors.name.type === 'required' && 'This field is required.'}
                    {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                  </Typography>
                )}
  
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  style={{ width: '75%', marginLeft: '5vh' }}

                />
                {errors.email && (
                  <Typography variant="body2" color="error" style={{ width: '75%', marginLeft: '5vh' }}>
                    {errors.email.type === 'required' && 'This field is required.'}
                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                  </Typography>
                )}
  
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  minRows={4}
                  {...register('message', {
                    required: true,
                    maxLength: 2000,
                  })}
                  style={{ width: '75%', marginLeft: '5vh' }}
                />
                {errors.message && (
                  <Typography variant="body2" color="error" style={{ width: '75%', marginLeft: '5vh' }}>
                    {errors.message.type === 'required' && 'This field is required.'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 characters.'}
                  </Typography>
                )}
  
                <div className="flex justify-end">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{  marginLeft: '5vh', marginTop: '5px' }}
                    >
                    SUBMIT FORM
                  </Button>
                </div>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </section>
    );
  };
  
  export default ContactForm;