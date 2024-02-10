import { Typography } from "@mui/material";

function IntroductionProfile() {
  const introProfileStyles = {
    textAlign: "center",
    padding: "20px",
    marginBottom: "20px",
    minHeight: "450px",
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
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        I'm <span style={{ color: "red" }}>Goutham</span> Amin
      </Typography>
    </div>
  );
}

export default IntroductionProfile;
