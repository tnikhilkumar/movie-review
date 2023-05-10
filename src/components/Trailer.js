import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import ReactPlayer from "react-player";

function MovieTrailer({ trailerUrl }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          width: "fit-content",
          padding: "10px",
          margin: "auto",
          marginBottom: "10px",
          backgroundImage:
            "linear-gradient(to right, #f2d305, #fda085, #f6b365)",
          marginTop: "15px"
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ fontWeight: "bold", margin: 0 }}
        >
          Trailer
        </Typography>
      </Box>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          marginTop: "30px"
        }}
      >
        {trailerUrl && (
          <CardMedia
            component="div"
            sx={{ paddingTop: "56.25%", position: "relative" }}
          >
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=DMOBlEcRuw8"}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              playing
            />
          </CardMedia>
        )}
      </Card>
    </>
  );
}

export default MovieTrailer;
