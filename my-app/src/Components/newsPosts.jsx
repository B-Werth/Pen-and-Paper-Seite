import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";

const Articels = [
  "yikes",
  "cringe",
  "lul",
  "yikes",
  "cringe",
  "lul",
  "yikes",
  "cringe",
  "lul",
  "yikes",
  "cringe",
  "lul",
];

function newsPost() {
  return (
    <main>
      <Grid item xs={"auto"} md={6} ml={40} mr={40} mt={10}>
        {Articels.map((page) => (
          <CardActionArea component="a">
            <Card
              onClick={() => {
                console.log("moin");
              }}
              sx={{
                display: "flex",
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="red"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="white">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{
                  maxHeight: 150,
                  maxWidth: 200,
                  height: 150,
                  width: 200,
                  display: { xs: "none", sm: "block" },
                }}
                src="https://img.freepik.com/vektoren-kostenlos/nachtmeerlandschaft-vollmond-und-sterne-leuchten_107791-7397.jpg?w=1380&t=st=1659232293~exp=1659232893~hmac=dd997a9678785ce7c7595cc1fbba43dc6cba7804b478cb6b4bf8156fd80304cahttps://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg"
              />
            </Card>
          </CardActionArea>
        ))}
        <Pagination count={10} />
      </Grid>
    </main>
  );
}

export default newsPost;
