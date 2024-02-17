import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, Grid } from "@mui/material";

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "4rem",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1200px"
        margin="0 auto"
      >
        {/* Amin's Portfolio Section */}
        <Grid item xs={12} sm={6} style={{ textAlign: "left" }}>
          <h1 style={{ margin: 0 }}>Amin's Portfolio</h1>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀.</p>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={6} style={{ textAlign: "left" }}>
          <h1 style={{ margin: 0 }}>Contact Info</h1>
          <p>+91 XXX-XXX-XXXX</p>
          <p>gouthamamin@gmail.com</p>
          <p>Mangalore, Karnataka-575006</p>

          <div style={{ display: "flex" }}>
            <IconButton aria-label="delete">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <EmailIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <XIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <TelegramIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "10px",
          borderTop: "1px solid #555",
        }}
      >
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
