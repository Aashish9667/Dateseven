import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Paper,Chip } from "@mui/material";
import { ResetTvRounded, Subtitles, Title } from "@mui/icons-material";
import {Grid}from"@mui/material"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

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

function ResumeBlock({data}){
    return(
        <Paper elevation={0} sx={{p:3,border:"1px solid #eoeoeo"}}>
       {data.map(()=>(

<Box key={index}>
          <Box display="flex" alignItems="center" gap={2} mb={0.5}>
            <WorkOutlineIcon color="disabled" fontSize="small" />
            <Chip
              label={item.period}
              color="primary"
              size="small"
              sx={{ fontSize: "0.7rem" }}
            />
          </Box>
          <Typography fontWeight="bold">{item.title}</Typography>
          <Typography variant="body2" color="text.secondary" mb={1.5}>
            {item.subtitle}
          </Typography>
          {index !== data.length - 1 && <Divider sx={{ mb: 1.5 }} />}
        </Box>
        

       ))} </Paper>
    )
}

export default function ResumeSection() {
  return (
    <Box sx={{ backgroundColor: "#f5f7fa", py: 6 }}>
      <Typography
        variant="overline"
        align="center"
        display="block"
        gutterBottom
      >
        EXPERIENCE
      </Typography>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Professional Resume
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        <Grid item xs={12} md={5}>
          <ResumeBlock data={experienceData} />
        </Grid>
        <Grid item xs={12} md={5}>
          <ResumeBlock data={educationData} />
        </Grid>
      </Grid>
    </Box>
  );
}