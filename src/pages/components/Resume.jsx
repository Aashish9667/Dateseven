// pages/resume.js
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Resume() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>My Resume</h1>

      {/* ✅ PDF embed */}
       <iframe
        src="/resume.pdf#view=FitH&page=1" // FitH = width fit, page=1 = first page only
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Resume"
      ></iframe>

      {/* ✅ Home Button */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Link href="/" passHref>
          <Button
            variant="contained"
            sx={{
             
              backgroundColor: "black",
              color: "white",
              "&:hover": { background: "white", color: "black" },
            }}
          >
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
