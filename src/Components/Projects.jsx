import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import projects from "../Config/projectsConfig";
import { Box } from "@mui/system";

const Styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    overflowX: "hidden", // Remove auto to hide the scrollbar
    padding: "2rem",
    position: "relative",
  },
  title: {
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
    padding: "1rem",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto", // Center the cards
  },
  card: {
    flex: `0 1 calc(25% - 16px)`, // Adjust the width based on the number of cards per row
    margin: "0 8px 16px", // Add margin between cards
    minWidth: "250px", // Set a minimum width for the cards
  },
  media: {
    height: "180px",
    objectFit: "cover", // Ensure images don't stretch
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
    projectsPerPage = 4;
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
    <div className="Projects">
      <Typography variant="h4" gutterBottom style={Styles.title}>
        Projects
      </Typography>
      <Box style={Styles.root}>
        <div style={Styles.cardContainer}>
          {visibleProjects.map((project, index) => (
            <Card key={index} style={Styles.card}>
              <CardMedia
                style={Styles.media}
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
        </div>
        {totalPages > 1 && (
          <>
            <IconButton
              style={{ ...Styles.arrowButton, left: 20 }}
              onClick={handlePrevPage}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </IconButton>
            <IconButton
              style={{ ...Styles.arrowButton, right: 20 }}
              onClick={handleNextPage}
            >
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </IconButton>
          </>
        )}
      </Box>
    </div>
  );
}

export default Projects;
