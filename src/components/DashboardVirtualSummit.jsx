import { Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import virtualSummit from "./../assets/images/virtualSummit.png";
import virtualSummitCounter from "./../assets/images/virtualSummitCounter.png";

export default function DashboardVirtualSummit() {
  return (
    <Container
      disableGutters
      sx={{ py: 10, display: "flex", justifyContent: "space-between" }}
    >
      <Grid width='45%'>
        <img src={virtualSummit} alt="virtual summit" />
      </Grid>
      <Grid
        container
        direction="column"
        width="50%"
        justifyContent="space-evenly"
        py={8}
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{
            fontWeight: "900",
            fontSize: "40px",
            lineHeight: "48px",
          }}
        >
          Social Media Virtual Summit
        </Typography>
        <Typography
          component="p"
          sx={{
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#656464",
          }}
        >
          1-Day Online Event Ends In:
        </Typography>
        <img src={virtualSummitCounter} alt="virtual summit counter" />
      </Grid>
    </Container>
  );
}
