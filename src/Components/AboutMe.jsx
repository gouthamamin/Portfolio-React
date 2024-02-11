import { Avatar, Button, Typography, Box } from "@mui/material";

function AboutMe() {
  const aboutMeStyles = {
    display: "flex",
    gap: "2rem",
    padding: "1rem",
  };
  const titleStyles = {
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
  };
  return (
    <div>
      <Typography style={titleStyles}>About Me</Typography>
      <div className="AboutMe" style={aboutMeStyles}>
        <Box>
          <Avatar
            alt="Profile-Image"
            src="/Assets/Profile-Photo.jpg"
            sx={{
              width: "200px",
              height: "200px",
            }}
          ></Avatar>
        </Box>
        <Box>
          <Typography sx={{ color: "#898282" }}>
            A dedicated Computer Science & Engineering graduate with
            immeasurable enthusiasm for acquiring new skills, I am a creative
            problem solver with hands-on experience in front-end JavaScript
            development. Proficient in crafting responsive and user-friendly web
            applications using HTML, CSS, JavaScript, React JS, and Material
            UI.Additionally, I demonstrate a talent for developing web-based
            games, both single-player and multi-player, employing game engines
            such as PlayCanvas and Cocos Creator
          </Typography>
          <Button>Download Resume</Button>
        </Box>
      </div>
    </div>
  );
}
export default AboutMe;
