'use client';
import { Alert, Box, Button, Divider, Snackbar, TextField, styled } from '@mui/material';
import React, { useRef } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const StyledInput = styled(TextField)`
  margin-top: 50px;
  width: 100%;
  & .MuiInput-underline::before {
    border-color: white !important;
  }
  & .MuiInput-underline::after {
    border-color: white;
  }
  & .MuiInputLabel-root {
    color: white;
    font-family: 'Barlow Condensed';
    font-weight: 300;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }
`;

const phoneRegExp = /([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g;

const validationSchema = yup.object({
  email: yup.string('Email giriniz').email('Geçerli Email giriniz').required('Geçerli Email giriniz'),
  telefon: yup.string().matches(phoneRegExp, 'Geçerli Numara giriniz').required('Geçerli Numara giriniz'),
  adres: yup.string().min(8, 'Minimum 8 karakter giriniz.').required('Gerekli alan'),
});

const ContactPage = () => {
  const form = useRef();
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      adres: '',
      telefon: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      emailjs.sendForm('service_54wkwo9', 'template_ibk3m2g', form.current, 'Yk4hVoKwWwOzLOf2r').then(
        (result) => {
          setOpen(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    },
  });
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Box width={'100%'} pt={10} px={8}>
        <Box textAlign={{ xs: 'center', md: 'unset' }} display={'block'} mb={10}>
          <Box className='extra' fontWeight='200' sx={{ fontSize: { xl: '11em', xs: '4em', sm: '6em', md: '7em', lg: '8em' } }} color={'white'}>
            BİZE
          </Box>
          <Box className='extra' sx={{ fontSize: { xl: '16em', xs: '6em', sm: '10.5em', md: '9.7em', lg: '13em' }, lineHeight: '0.5em' }} color={'white'}>
            ULAŞIN
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 4, borderTop: '3px solid #707070' }} />
      <Box width={{xs:'100%',md:'50%'}} minHeight={'20rem'} px={8} mt={5}>
        <form ref={form} onSubmit={formik.handleSubmit}>
          <StyledInput
            inputProps={{ style: { color: 'white', fontWeight: 700, fontSize: '1.2em', fontFamily: 'Barlow Condensed' } }}
            label='Adres'
            multiline
            value={formik.values.adres}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.adres && Boolean(formik.errors.adres)}
            helperText={formik.touched.adres && formik.errors.adres}
            maxRows={4}
            name='adres'
            variant='standard'
          />
          <StyledInput
            inputProps={{ style: { color: 'white', fontWeight: 700, fontSize: '1.2em', fontFamily: 'Barlow Condensed' } }}
            label='E-mail' 
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            name='email'
            variant='standard'
          />
          <StyledInput
            inputProps={{ style: { color: 'white', fontWeight: 700, fontSize: '1.2em', fontFamily: 'Barlow Condensed' } }}
            label='Telefon'
            error={formik.touched.telefon && Boolean(formik.errors.telefon)}
            helperText={formik.touched.telefon && formik.errors.telefon}
            placeholder='546..'
            name='telefon'
            value={formik.values.telefon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant='standard'
          />
          <Button type='submit' sx={{ mt: 5, backgroundColor: 'black' }} variant='contained' startIcon={<SendIcon />}>
            Gönder
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
            Mesajınız iletildi!
          </Alert>
        </Snackbar>
        <Box width={'100%'} display={'flex'} flexDirection={'row'}>
          <Button sx={{ mt: 5 }} variant='contained' color='secondary' size='lg' startIcon={<InstagramIcon />}>
            instagram
          </Button>
          <Button sx={{ mt: 5, ml: 2 }} variant='contained' color='primary' startIcon={<LinkedInIcon />}>
            linkedin
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
