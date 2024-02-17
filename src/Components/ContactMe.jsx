import { styled, Stack } from "@mui/system";
import { Button, TextField, Typography, Grid } from "@mui/material";

function ContactMe() {
  const titleStyles = {
    fontWeight: "1rem",
    textAlign: "center",
    fontSize: "36px",
    fontFamily: `'Bungee Spice', 'cursive'`,
    padding: "1rem",
  };

  const ResponsiveButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#1c87c9",
    borderRadius: "60px",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "inline-block",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "5px 15px",
    textAlign: "center",
    textDecoration: "none",
    animation: "glowing 1300ms infinite",

    "@keyframes glowing": {
      "0%": {
        backgroundColor: "#2ba805",
        boxShadow: "0 0 5px #2ba805",
      },
      "50%": {
        backgroundColor: "#49e819",
        boxShadow: "0 0 20px #49e819",
      },
      "100%": {
        backgroundColor: "#2ba805",
        boxShadow: "0 0 5px #2ba805",
      },
    },
  }));

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="ContactMe">
      <Typography style={titleStyles}>Get in touch</Typography>
      <Grid container spacing={4} padding="2rem">
        <Grid item xs={12} md={7}>
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9237884563768!2d74.82121758162974!3d12.912619719817599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3507e38a35215%3A0xe4a4a92f140f60e6!2sNaga%20Brahma%20Sannidi!5e0!3m2!1sen!2sin!4v1708183443404!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="form-container" style={{ maxWidth: "400px" }}>
            <form style={formStyles}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Full Name"
                fullWidth
                required
                sx={{ mb: 4 }}
              />

              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Email Address"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Subject"
                  fullWidth
                  required
                />
              </Stack>
              <TextField
                multiline
                rows={6}
                variant="outlined"
                color="secondary"
                label="Message"
                fullWidth
                required
                sx={{ marginBottom: 4 }}
              />
              <ResponsiveButton>Send Message</ResponsiveButton>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default ContactMe;
