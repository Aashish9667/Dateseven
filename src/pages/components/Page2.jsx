import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Kane gives you the blocks & kits you need to create a true website within minutes.",
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Kane gives you the blocks & kits you need to create a true website within minutes.",
  },
  {
    id: 3,
    title: "Application Design",
    description:
      "Kane gives you the blocks & kits you need to create a true website within minutes.",
  },
];

function SelectActionCard() {
  return (
    <div>
      <h6
        style={{
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Services
      </h6>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Quality Services
      </h3>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
          mb: 6,
        }}
      >
        {cards.map((card) => (
          <Card
            sx={{
              height: "100%",

              backgroundColor: "#e6eaee",
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default SelectActionCard;
