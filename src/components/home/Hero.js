'use client';
import { Grid, Button, Box } from '@mui/material';
import React, { useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Microsoft from '../../icons/Microsoft.svg';
import Adobe from '../../icons/Adobe.svg';
import Google from '../../icons/Google-Maps.svg';
import Oracle from '../../icons/Oracle.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ data }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0, 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <Grid
      container
      minHeight={{ xs: '120vh', md: '80vh', lg: '60vh', sm: '80vh' }}
      sx={{ backgroundColor: '#242424' }}
      width={'100%'}
      color={'white'}
    >
      <Box sx={{ width: '100%', marginX: '5%', mt: 10 }}>
        <motion.section ref={targetRef} style={{ opacity }}>
          <Grid container mb={15}>
            <Grid
              sx={{
                display: 'block',
                textAlign: { xs: 'center', md: 'unset' },
              }}
              item
              md={6}
              xs={12}
            >
              <Box
                className='extra'
                fontWeight={600}
                fontSize={{ xs: '1.5rem', md: '1.6rem', lg: '2.2rem' }}
              >
                KEYİFLE ÜRETTİĞİMİZ <br></br> MARKALAR
              </Box>
              <Button
                variant='contained'
                sx={{
                  'backgroundColor': 'white',
                  'color': '#242424',
                  ':hover': {
                    bgcolor: 'white',
                    color: '#242424',
                  },
                  'my': 5,
                  'textTransform': 'capitalize',
                  'borderRadius': '0',
                }}
                endIcon={<PlayArrowIcon sx={{ color: 'red' }} />}
              >
                Bizi izle
              </Button>
            </Grid>
            <Grid fontSize={'1.2em'} fontWeight={700} item md={6} xs={12}>
              <Box width={'50%'}> {data}</Box>
            </Grid>
          </Grid>
          <Grid
            spacing={15}
            container
            sx={{ mb: 6 }}
            alignItems={'center'}
            display={'flex'}
            flexDirection={'row'}
          >
            <Grid
              item
              md={6}
              lg={3}
              sm={6}
              xs={12}
              sx={{ textAlign: 'center' }}
            >
              <Image src={Microsoft} alt='microsoft' />
            </Grid>
            <Grid
              item
              md={6}
              lg={3}
              sm={6}
              xs={12}
              sx={{ textAlign: 'center' }}
            >
              <Image src={Adobe} alt='adobe' />
            </Grid>
            <Grid
              item
              md={6}
              lg={3}
              sm={6}
              xs={12}
              sx={{ textAlign: 'center' }}
            >
              <Image src={Google} alt='google' />
            </Grid>
            <Grid
              item
              md={6}
              lg={3}
              sm={6}
              xs={12}
              sx={{ textAlign: 'center' }}
            >
              <Image src={Oracle} alt='oracle' />
            </Grid>
          </Grid>
        </motion.section>
      </Box>
    </Grid>
  );
};

export default Hero;
