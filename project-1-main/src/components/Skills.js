import React, { useState } from 'react';
import { Box, Typography, Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
    const [showDescription, setShowDescription] = useState({
        webDevelopment: false,
        pythonProgramming: false,
        databaseManagement: false
    });

    const handleToggle = (field) => {
        setShowDescription((prev) => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <section id='skills'>
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
                    sx={{ color: 'black', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: { xs: '2rem', md: '2rem' } }}
                >
                    <br /> <span style={{ color: 'black' }}>My Skills & Technologies</span>
                </Typography>

               
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, pt: 4 }}>
                    <Typography variant="h6" sx={{ textDecoration: 'underline', color: 'black', fontWeight: 'bold' }}>
                        Web Development  
                    </Typography>
                    <Fab 
                        color="primary" 
                        size="small" 
                        sx={{ width: 36, height: 36, minHeight: 0 }} 
                        onClick={() => handleToggle("webDevelopment")}
                    >
                        <AddIcon sx={{ fontSize: 20 }} />
                    </Fab>
                </Box>
                {showDescription.webDevelopment && (
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 'extra-light',fontSize: { xs: '1rem', md: '1rem' }, fontFamily: 'Roboto', mt: 2 }}>
                        Skilled in HTML, CSS, and JavaScript for creating responsive and visually appealing web pages.Experienced in React.js for building dynamic, interactive, and component-based user interfaces.Capable of implementing modern UI/UX principles to enhance user experience and accessibility.Proficient in using React hooks, state management, and performance optimization techniques.
                    </Typography>
                )}

                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, pt: 4 }}>
                    <Typography variant="h6" sx={{ textDecoration: 'underline', color: 'black', fontWeight: 'bold' }}>
                        Python Programming  
                    </Typography>
                    <Fab 
                        color="primary" 
                        size="small" 
                        sx={{ width: 36, height: 36, minHeight: 0 }} 
                        onClick={() => handleToggle("pythonProgramming")}
                    >
                        <AddIcon sx={{ fontSize: 20 }} />
                    </Fab>
                </Box>
                {showDescription.pythonProgramming && (
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 'extra-light', fontSize: { xs: '1rem', md: '1rem' },fontFamily: 'Roboto', mt: 2 }}>
                        Skilled in Python for developing efficient and scalable applications. Experienced in building machine learning and AI-based projects for real-world problem-solving . Capable of implementing data processing, automation, and text recognition using Python. Proficient in using libraries like OpenCV, TensorFlow, and Tesseract for computer vision tasks.

                    </Typography>
                )}

                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, pt: 4 }}>
                    <Typography variant="h6" sx={{ textDecoration: 'underline', color: 'black', fontWeight: 'bold' }}>
                        Database Management  
                    </Typography>
                    <Fab 
                        color="primary" 
                        size="small" 
                        sx={{ width: 36, height: 36, minHeight: 0 }} 
                        onClick={() => handleToggle("databaseManagement")}
                    >
                        <AddIcon sx={{ fontSize: 20 }} />
                    </Fab>
                </Box>
                {showDescription.databaseManagement && (
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 'extra-light', fontSize: { xs: '1rem', md: '1rem' },fontFamily: 'Roboto', mt: 2 }}>
                        Skilled in MySQL for basic database management and query execution.Experienced in creating and managing tables, inserting, updating, and retrieving data.Capable of writing simple SQL queries for data manipulation and retrieval.Familiar with database relationships, indexing, and basic optimization techniques.
                    </Typography>
                )}

                
            </Container>
        </Box>
        </section>
    );
}
