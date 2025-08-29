// components/PricingCard.jsx
import {
  Container,
  Typography,
  Grid,
  Card,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function PricingSection() {
  const pricingData = [
    {
      plan: "Basic",
      price: "15",
      subtitle: "Not have any design? Leave it for me",
      features: [
        "Need your wireframe",
        "Design with Figma",
        "Product Design",
        "Digital Marketing",
        "Custom Support",
      ],
    },
    {
      plan: "Standard",
      price: "59",
      subtitle: "Not have any design? Leave it for me",
      features: [
        "Website Design",
        "Mobile Apps Design",
        "Product Design",
        "Digital Marketing",
        "Custom Support",
      ],
    },
    {
      plan: "Premium",
      price: "69",
      subtitle: "Not have any design? Leave its for me",
      features: [
        "Website Design",
        "Mobile Apps Design",
        "Product Design",
        "Digital Marketing",
        "Custom Support",
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: "white", py: 3 }}>
      <Container>
        <Typography variant="overline" textAlign="center" display="block">
          PRICING
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Flexible Pricing Plan
        </Typography>

        <Grid
          container
          spacing={4}
          mt={2}
          justifyContent="center"
          alignItems="stretch"
          sx={{ display: "flex", flexWrap: "wrap" }}
        >
          {pricingData.map((plan, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#f5f7fa",
                  boxShadow: "none",
                  border: "1px solid #dfe3e8",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  flex: 1,
                  minHeight: 200,
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {plan.plan}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {plan.subtitle}
                </Typography>
                <Typography variant="h4" fontWeight="bold" sx={{ my: 1 }}>
                  ${plan.price}
                  <span style={{ fontSize: 14 }}>/Hour</span>
                </Typography>

                <List dense sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon>
                        <ArrowRightAltIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

               
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
