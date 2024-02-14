import { Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function IntroductionProfile() {
  const introProfileStyles = {
    textAlign: "center",
    padding: "20px",
    minHeight: "600px",
    backgroundColor: "#6cdff02e",
    background: `linear-gradient(180deg, rgb(255, 255, 255), rgb(205, 237, 254))`,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "64px",
  };

  const typewriterContainerStyles = {
    display: "flex",
    alignItems: "center",
    height: "2rem",
  };

  const typewriterTextStyles = {
    fontWeight: "bold",
    color: "green",
    fontSize: "1.5rem",
  };

  const waveStyle = {
    fontSize: "3rem",
    animationName: "wave-animation",
    animationDuration: "2.1s",
    animationIterationCount: "infinite",
    transformOrigin: "70% 70%",
    display: "inline-block",
  };

  const keyframesStyle = `
    @keyframes wave-animation {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(14deg);
      }
      20% {
        transform: rotate(-8deg);
      }
      30% {
        transform: rotate(14deg);
      }
      40% {
        transform: rotate(-4deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `;

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Game Developer"],
    loop: {},
  });

  return (
    <div style={introProfileStyles} className="intro-profile">
      <style>{keyframesStyle}</style>
      <div style={{ textAlign: "left" }}>
        <Typography
          variant="h5"
          style={{
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Hey There!{" "}
          <span style={waveStyle} role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </Typography>
        <Typography variant="h3" gutterBottom>
          I'm <span style={{ color: "red", fontWeight: "bold" }}>Goutham</span>{" "}
          Amin
        </Typography>

        <div style={typewriterContainerStyles}>
          <span style={typewriterTextStyles}>{text}</span>
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntroductionProfile;
