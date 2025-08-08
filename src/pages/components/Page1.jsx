import * as React from "react";
import { Card, Typography, Stack, Button, buttonBaseClasses } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <div>
      <Card sx={{padding:"0.5rem 2rem" }}>
        <Typography variant="h3"  sx={{justifyContent:"center", alignItems:"center"}}>I'am Aashish Kumar</Typography>
        <Stack direction={"row"}spacing={"0"}>
          <li>
          {[" UI Designer", "Webflow Developer ", "Marketer"].map((item)=>(
            <Button key={item} sx={{
                  color:"red",
                  border:"2 solid grey",
                 
                  
                  
                }}> {item}

            </Button>
          ))}</li>

        </Stack>
      </Card>
    </div>
  );
}
