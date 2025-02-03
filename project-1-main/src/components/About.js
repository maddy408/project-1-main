import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Home() {
   
    return (
        <section id='about'>
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: 'center', 
                alignItems: 'center', 
                py: 1, 
                bgcolor: 'white',
                px: 2
            }}
        >
            <Container sx={{ textAlign: { xs: 'center', md: 'center' }, pt:{xs:0,md:2},maxWidth: 'sm' }}>
                <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: { xs: '2rem', md: '2rem' } }}
                >
                    <br /> <span style={{ color: 'black' }}>About Me</span>
                </Typography>
                
               <Typography 
                    variant="h6" 
                    component="h6" 
                    sx={{ marginLeft:{md:10},color: 'black', fontWeight: 'extra-light', fontFamily: 'Roboto', fontSize: { xs: '1rem', md: '1rem' } }}
                >
                    <br />  <span style={{ color: 'black' }}>Hi, I’m Madhavi, a passionate Python developer focused on building efficient, scalable solutions. I have hands-on experience in web development using Django and Flask, as well as applying machine learning algorithms to solve real-world problems. I enjoy solving complex problems and am continuously learning new skills to keep up with the latest technologies in the Python ecosystem.</span>
                </Typography>
                <Stack spacing={2} pt={5} justifyContent={{ xs: 'center', md: 'center' }} 
    alignItems="center"  direction="row">
      
      
      
      <Button variant="contained" onClick={() => window.open('https://drive.google.com/file/d/1_rEsfN9Yj94lVJxxNbsIkSOb52FnXOmC/view?usp=drivesdk', '_blank')} >Download Resume </Button>
    </Stack>
            </Container>
            
        </Box>
        </section>
    );
}






