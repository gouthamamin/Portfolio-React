import { Button, Typography } from "@mui/material";

function IntroductionProfile() {
  const introProfileStyles = {
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
    minHeight: "600px",
    backgroundColor: "#6cdff02e",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={introProfileStyles} className="intro-profile">
      <Typography
        variant="h5"
        style={{
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        Welcome
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }} gutterBottom>
        I'm <span style={{ color: "red" }}>Goutham</span> Amin
      </Typography>

      <Button
        sx={{
          backgroundColor: "#1c87c9",
          borderRadius: "60px",
          border: "none",
          color: "white",
          cursor: "pointer",
          display: "inline-block",
          fontFamily: "sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "5px 15px",
          textAlign: "center",
          textDecoration: "none",
          animation: "glowing 1300ms infinite",
          //   bluish glow
          "@keyframes glowing": {
            "0%": {
              backgroundColor: "#ccffff", // Blue color for glow start
              boxShadow: "0 0 5px #ccffff",
            },
            "50%": {
              backgroundColor: "#00ffff", // Blue color for glow midpoint
              boxShadow: "0 0 20px #00ffff",
            },
            "100%": {
              backgroundColor: "#ccffff", // Blue color for glow end
              boxShadow: "0 0 5px #ccffff",
            },
          },
        }}
      >
        More About Me
      </Button>
    </div>
  );
}

export default IntroductionProfile;

//-------------------Greenish glow effects-------------------

//   "@keyframes glowing": {
//     "0%": {
//       backgroundColor: "#2ba805",
//       boxShadow: "0 0 5px #2ba805",
//     },
//     "50%": {
//       backgroundColor: "#49e819",
//       boxShadow: "0 0 20px #49e819",
//     },
//     "100%": {
//       backgroundColor: "#2ba805",
//       boxShadow: "0 0 5px #2ba805",
//     },
//   },
