// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import HeroImg from '../assets/99.jpeg';

// export default function Home() {
//     const config = {
//         subtitle: 'Frontend & Python Developer'
//     };

//     return (
//         <Box 
//             sx={{ 
//                 display: 'flex', 
//                 flexDirection: { xs: 'column', md: 'row' }, 
//                 justifyContent: 'center', 
//                 alignItems: 'center', 
//                 py: 4, 
//                 bgcolor: 'white',
//                 px: 6
//             }}
//         >
//             <Container sx={{ textAlign: { xs: 'center', md: 'left' }, pt:{xs:0,md:10},maxWidth: 'sm' }}>
//                 <Typography 
//                     variant="h6" 
//                     component="h6" 
//                     sx={{ marginLeft:{md:10},color: 'black', fontWeight: 'extra-light', fontFamily: 'Roboto', fontSize: { xs: '1rem', md: '1rem' } }}
//                 >
//                     <br /> I'm <span style={{ color: 'black' }}>Madhavi</span>
//                 </Typography>
//                 <Typography variant="h4" sx={{ marginLeft:{md:10},color: 'black',fontFamily:'sans-serif',fontWeight:'bold', mt: 2 }}>
//                     {config.subtitle}
//                </Typography>
//                <Typography 
//                     variant="h6" 
//                     component="h6" 
//                     sx={{ marginLeft:{md:10},color: 'black', fontWeight: 'extra-light', fontFamily: 'Roboto', fontSize: { xs: '1rem', md: '1rem' } }}
//                 >
//                     <br />  <span style={{ color: 'black' }}>Turning lines of Python into impactful innovations.</span>
//                 </Typography>
//                 <Stack spacing={2} pt={2} marginLeft={{md:10,xs:1}} gap={4} direction="row">
      
      
//       <Button variant="outlined">Works</Button>
//       <Button variant="contained">Contact Me</Button>
//     </Stack>
//             </Container>
//             <Box 
//                 component="img" 
//                 src={HeroImg} 
//                 alt="Hero" 
                
//                 sx={{  pt:{xs:5,md:7},marginRight:{md:10},width: { xs: 300, md: 600 }, height: { xs: 330, md: 350 }, border: '4px solid white' }}
//             />
//         </Box>
//     );
// }






import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HeroImg from '../assets/99.jpeg';

export default function Home() {
    const config = {
        subtitle: 'Frontend & Python Developer'
    };

    return (
        <section id='home'>
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: 'center', 
                alignItems: 'center', 
                py: 4, 
                bgcolor: 'white',
                px: 6
            }}
        >
            <Container sx={{ textAlign: { xs: 'center', md: 'left' }, pt:{xs:0,md:10}, maxWidth: 'sm' }}>
                <Typography 
                    variant="h6" 
                    component="h6" 
                    sx={{ marginLeft:{md:10}, color: 'black', fontWeight: 'extra-light', fontFamily: 'Roboto', fontSize: { xs: '1rem', md: '1rem' } }}
                >
                    <br /> I'm <span style={{ color: 'black' }}>Madhavi</span>
                </Typography>
                <Typography variant="h4" sx={{ marginLeft:{md:10}, color: 'black', fontFamily:'sans-serif', fontWeight:'bold', mt: 2 }}>
                    {config.subtitle}
               </Typography>
               <Typography 
                    variant="h6" 
                    component="h6" 
                    sx={{ marginLeft:{md:10}, color: 'black', fontWeight: 'extra-light', fontFamily: 'Roboto', fontSize: { xs: '1rem', md: '1rem' } }}
                >
                    <br />  <span style={{ color: 'black' }}>Turning lines of Python into impactful innovations.</span>
                </Typography>
                <Stack spacing={2} pt={2} marginLeft={{md:10, xs:1}} gap={4} direction="row">
                    {/* Works Button - Scrolls to Project Section */}
                    <Button 
                        variant="outlined" 
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Works
                    </Button>

                    {/* Contact Me Button - Opens WhatsApp Chat */}
                    <Button 
                        variant="contained" 
                        onClick={() => window.open('https://wa.me/9384256321', '_blank')}
                    >
                        Contact Me
                    </Button>
                </Stack>
            </Container>
            <Box 
                component="img" 
                src={HeroImg} 
                alt="Hero" 
                sx={{ pt:{xs:5,md:7}, marginRight:{md:10}, width: { xs: 300, md: 600 }, height: { xs: 330, md: 350 }, border: '4px solid white' }}
            />
        </Box>
        </section>
    );
}
