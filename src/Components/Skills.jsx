import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import skillsObject from "../Config/skillsConfig";

function Skills() {
  const titleStyles = {
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
    padding: "1rem",
  };

  const cardStyles = {
    maxWidth: 345,
    bgcolor: "#dedede",
    transition: "transform 0.5s, background-color 0.5s,box-shadow 0.5s",
    "&:hover": {
      transform: "scale(1.01)",
      bgcolor: "#bfe5ff36",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
      "& .MuiTypography-root": {
        color: "black",
        transition: "color 0.5s",
      },
    },
  };

  const textStyle = {
    textAlign: "center",
    fontSize: "1rem",
    textWrap: "nowrap",
    fontWeight: "bold",
    color: "#6a6a6a",
  };

  return (
    <div className="Skills" style={{ backgroundColor: "#ededed" }}>
      <Typography style={titleStyles}>Skills & Abilities</Typography>
      <Grid container spacing={2} padding="2rem 4rem">
        {skillsObject.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={cardStyles}>
              <Box
                className="AMIN"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={skill.iconUrl}
                  alt={skill}
                  sx={{ marginBottom: "8px", height: "72px", width: "72px" }}
                />
                <Typography variant="h6" component="div" sx={textStyle}>
                  {skill.name}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
