import React, { useState } from 'react';
import { Box, Typography, Container, Fab } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Home() {
    
   

    return (
        <section id='contact'>
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                py: 1, 
                bgcolor: 'white',
                px: 2,
                position: 'relative'
            }}
        >
            <Container sx={{ textAlign: 'center', pt: { xs: 0, md: 2 }, maxWidth: 'sm' }}>
                <Typography 
                    variant="h1" 
                    sx={{ color: 'black', py:1.5,fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: { xs: '2rem', md: '2rem' } }}
                >
                    <br /> <span style={{ color: 'black' }}>Let's Talk</span>
                </Typography>
                <Box  
                 sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    py: 1, 
                    bgcolor: 'white',
                    px: 3,
                    position: 'relative',
                    gap:2,
                    justifyContent:'center'
                }}
                >
                <WhatsAppIcon/>
                <GitHubIcon/>
                <InstagramIcon/>
                <LinkedInIcon/>

                </Box>
            </Container>
        </Box>
        </section>
    );
}
