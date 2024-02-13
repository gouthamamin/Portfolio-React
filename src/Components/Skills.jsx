import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import skillsObject from "../Config/skillsConfig";

function Skills() {
  return (
    <div className="Skills">
      <Grid container spacing={2} padding="4rem">
        {skillsObject.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2} xl={2}>
            <Card sx={{ maxWidth: 345 }}>
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
                  sx={{ marginBottom: "8px", height: "96px", width: "96px" }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center", fontSize: "1rem" }}
                >
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
