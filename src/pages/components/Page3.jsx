
import { Grid, Box, Typography, Paper, Divider, Chip } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experienceData = [
  {
    period: "2021 - Present",
    title: "Themeforest Market",
    subtitle: "Web Designer",
  },
  {
    period: "2021 - 2023",
    title: "Envato Theme Developer",
    subtitle: "Web Development",
  },
  {
    period: "2021 - 2022",
    title: "Marketing Expert GRP",
    subtitle: "Web Developer & Business Partner",
  },
];

const educationData = [
  {
    period: "2019 - 2015",
    title: "Bachelor Degree of IT",
    subtitle: "State University Bangladesh",
  },
  {
    period: "2021 - 2024",
    title: "Higher Secondary Education",
    subtitle: "Premium College United VC",
  },
  {
    period: "2021 - 2024",
    title: "Webster College",
    subtitle: "UI/UX Design",
  },
];

function ResumeBlock({ data }) {
  return (
    <Paper
      elevation={0}
      sx={{ p: 3, border: "1px solid #e0e0e0" }}
      data-aos="fade-up"          // ✅ Animation yaha add kiya
    >
      {data.map((item, index) => (
        <Box key={index}>
          <Box display="flex" alignItems="center" gap={2} mb={0.5}>
            <WorkOutlineIcon color="black" fontSize="small" />
            <Chip
              label={item.period}
              
              size="small"
              sx={{ fontSize: "0.7rem",backgroundColor:'black',color:'white' }}
            />
          </Box>

          <Typography fontWeight="bold">{item.title}</Typography>
          <Typography variant="body2" color="text.secondary" mb={1.5}>
            {item.subtitle}
          </Typography>
          {index !== data.length - 1 && <Divider sx={{ mb: 1.5 }} />}
        </Box>
      ))}
    </Paper>
  );
}

export default function ResumeSection() {
  // ✅ AOS initialize
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 4 ,px:{ xs: "24px", md: "0px" }}}>
      <Typography
        variant="overline"
        align="center"
        display="block"
        gutterBottom
        data-aos="fade-down"       // ✅ Heading animate
      >
        EXPERIENCE
      </Typography>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ marginBottom: "20px" }}
        data-aos="fade-up"         // ✅ Sub-heading animate
      >
        Professional Resume
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {/* Left Column - Experience */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            maxWidth: 300,
            flex: "1 1 250px",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
          data-aos="fade-right"    // ✅ Animation Left Column ke liye
        >
          <ResumeBlock data={experienceData} />
        </Grid>

        {/* Right Column - Education */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            maxWidth: 300,
            flex: "1 1 250px",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
            },
          }}
          data-aos="fade-left"     // ✅ Animation Right Column ke liye
        >
          <ResumeBlock data={educationData} />
        </Grid>
      </Grid>
    </Box>
  );
}

