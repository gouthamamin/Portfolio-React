import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import projects from "../Config/projectsConfig";

const someStyles = {
  root: {
    display: "flex",
    overflowX: "hidden", // Remove auto to hide the scrollbar
    padding: "16px",
    position: "relative",
  },
  card: {
    minWidth: "250px",
    marginRight: "16px",
  },
  media: {
    height: "140px",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
};

function Projects() {
  const theme = useTheme();
  const smallScreens = useMediaQuery(theme.breakpoints.down("sm")); // below 600
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); //between 600 & 900
  const tabletScreen = useMediaQuery(theme.breakpoints.between("md", "lg")); //between 900 & 1200
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg")); // over 1200

  let projectsPerPage = 4;

  if (smallScreens) {
    projectsPerPage = 1;
  } else if (mediumScreen) {
    projectsPerPage = 2;
  } else if (tabletScreen) {
    projectsPerPage = 3;
  } else if (largeScreen) {
    projectsPerPage = 4; // You can adjust this value based on your requirements
  }

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Project Details Carousel
      </Typography>
      <Paper style={someStyles.root} elevation={3}>
        {visibleProjects.map((project, index) => (
          <Card key={index} style={someStyles.card}>
            <CardMedia
              style={someStyles.media}
              image={project.imageUrl}
              title={project.title}
            />
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
        {totalPages > 1 && (
          <>
            <IconButton
              style={{ ...someStyles.arrowButton, left: 0 }}
              onClick={handlePrevPage}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              style={{ ...someStyles.arrowButton, right: 0 }}
              onClick={handleNextPage}
            >
              <ArrowForwardIcon />
            </IconButton>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Projects;
