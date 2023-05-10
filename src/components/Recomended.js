import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function RecommendedMovies({ movies }) {
  return (
    <div>
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
            "linear-gradient(to right, #f6d365, #fda085, #f6d365)",
          marginTop: "15px"
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ fontWeight: "bold", margin: 0 }}
        >
          Recommended Movies
        </Typography>
      </Box>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            sx={{
              minWidth: "10%",
              maxWidth: "25%",
              minHeight: "7%",
              maxHeight: "5%",
              height: 400,
              margin: 2,
              marginLeft: 4.5
            }}
          >
            <CardMedia
              component="img"
              image={movie.poster}
              alt={movie.title}
              sx={{ objectFit: "cover", height: "100%" }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RecommendedMovies;
