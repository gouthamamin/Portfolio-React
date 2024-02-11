import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ResponsiveButton = styled(Button)(({ theme }) => ({
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

  "@keyframes glowing": {
    "0%": {
      backgroundColor: "#ccffff",
      boxShadow: "0 0 5px #ccffff",
    },
    "50%": {
      backgroundColor: "#00ffff",
      boxShadow: "0 0 20px #00ffff",
    },
    "100%": {
      backgroundColor: "#ccffff",
      boxShadow: "0 0 5px #ccffff",
    },
  },

  [theme.breakpoints.down("xs")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
}));

function IntroductionProfile() {
  const introProfileStyles = {
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
    minHeight: "600px",
    backgroundColor: "#6cdff02e",
    background: `linear-gradient(180deg, rgb(255, 255, 255), rgb(205, 237, 254))`,
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
        I'm <span style={{ color: "red", fontWeight: "bold" }}>Goutham</span>{" "}
        Amin
      </Typography>

      <ResponsiveButton>More About Me</ResponsiveButton>
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
