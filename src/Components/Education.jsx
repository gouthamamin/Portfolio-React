import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

function Education() {
  const titleStyles = {
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
    padding: "1rem",
  };
  return (
    <div style={{ backgroundColor: "#bdd5ff" }}>
      <Typography style={titleStyles}>Educational Details</Typography>
      <Stack className="Education" sx={{ padding: "2rem" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            "@media (max-width: 600px)": {
              flexDirection: "column",
            },
            boxShadow: "4",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 300,
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
            image="/Assets/MITE.png"
            alt="Live from space album cover"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              //   "@media (max-width: 600px)": {
              //     order: 2,
              //   },
            }}
            bgcolor="#fff"
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontSize: "1.3rem",
                  color: "rgb(1, 41, 112);",
                  fontWeight: "bolder",
                }}
              >
                Bachelor of Engineering in Computer Science & Engineering
              </Typography>
              <Typography variant="subtitle1" component="div" color="grey">
                Mangalore Institute of Technology & Engineering | VTU
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bolder" }}
                color="#236e01"
              >
                2019-2023 | Completed | 8.74 CGPA
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Stack>
    </div>
  );
}

export default Education;
