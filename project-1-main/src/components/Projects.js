import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";

// Import images from the assets folder
import image1 from "../assets/3.jpeg";
import image2 from "../assets/2.jpeg";
import image3 from "../assets/1.jpeg";

const cards = [
  {
    title: "Basic Face Recognition Using Python",
    image: image1,
    description:
      "A basic face recognition project that detects and matches faces in images using DeepFace with MTCNN for detection and FaceNet for embeddings.",
  },
  {
    title: "License Card Number Detection",
    image: image2,
    description:
      "A basic license card number detection project that extracts and identifies license numbers from images using OCR and NLP techniques for accurate recognition.",
  },
  {
    title: "Aadhar Number Verification System",
    image: image3,
    description:
      "A basic Aadhaar number extraction project that identifies and verifies Aadhaar numbers from images using OCR and validation techniques.",
  },
];

export default function CardRow() {
  return (
    // Added <section> with an id for easy reference
    <section id="projects">
      {/* Centered Heading */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: "black",
          mt: 5,
          mb: 6,
          fontSize: { xs: "2rem", md: "2rem" },
        }}
      >
        My Projects
      </Typography>

      {/* Card Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
      >
        {cards.map((card, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: 300,
                height: 380,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1rem" },
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "start" }}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
                <Button size="small" variant="contained" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
