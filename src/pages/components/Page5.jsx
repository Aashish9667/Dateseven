// components/ContactSection.jsx
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Typography variant="overline" textAlign="center" display="block" sx={{marginTop:"20px",marginBottom:"10px"}}>
          CONTACT
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
        
        >
          Get in Touch with Me!
        </Typography>

        <Grid
          container
          spacing={4}
       
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "80vh" }}
        >
          {/* Left Side: Office Info */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "#f5f7fa",
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <LocationOnIcon />
                  <Box>
                    <Typography fontWeight={600}>Our Office:</Typography>
                    <Typography variant="body2">
                      Jurain, Dhaka Bangladesh
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <PhoneIcon />
                  <Box>
                    <Typography fontWeight={600}>Contact Number:</Typography>
                    <Typography variant="body2">+123 431 3131</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <EmailIcon />
                  <Box>
                    <Typography fontWeight={600}>Email Us:</Typography>
                    <Typography variant="body2">
                      websitename@mail.com
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{ maxWidth: 600, width: "100%", padding: 10 }}
            >
              <Typography variant="h4" align="center" gutterBottom>
                Contact Us
              </Typography>

              <Typography variant="body1" align="center" gutterBottom>
                We'd love to hear from you. Please fill out the form below.
              </Typography>

              <Box component="form" noValidate autoComplete="off">
                <Grid container spacing={2} mt={1}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                          "& .MuiSvgIcon-root": {
                            color: "black",
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Box
            sx={{
              width: "100%",
              textAlign: "center", // Center the text
              padding: "1rem 0",
             // Optional: light gray background
            }}
          >
          
            <Typography variant="body2" sx={{marginBottom:"0 auto"}}>
              © 2025 AK. All Rights Reserved.
            </Typography>
           
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}