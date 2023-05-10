import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";

function MovieSummary() {
  return (
    <Box
      sx={{
        p: 2,
        backgroundImage: "linear-gradient(to right, #f6d365, #fda085)",
        marginTop: "10px",
        marginLeft: "20px",
        marginRight: "20px",
        borderRadius: "2%"
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary="Overview"
            secondary="Life is a struggle for single father Chris Gardner. Evicted from their apartment, he and his young son find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son."
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Release Year" secondary="2006" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Director" secondary=" Gabriel" />
        </ListItem>
      </List>
    </Box>
  );
}

export default MovieSummary;
