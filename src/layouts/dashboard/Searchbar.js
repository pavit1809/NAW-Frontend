import * as React from "react";
import { Icon } from "@iconify/react";
import searchFill from "@iconify/icons-eva/search-fill";
// material
import { styled, alpha } from "@mui/material/styles";
import { Box, Input, InputAdornment } from "@mui/material";

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 53;

const SearchbarStyle = styled("div")(({ theme }) => ({
  zIndex: 99,
  width: "430px",
  display: "flex",
  alignItems: "center",
  height: APPBAR_MOBILE,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  padding: theme.spacing(3, 3),
  borderRadius: theme.shape.borderRadiusXs,
  boxShadow: theme.customShadows.primary,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  return (
    <SearchbarStyle>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search"
        endAdornment={
          <InputAdornment position="start">
            <Box
              component={Icon}
              icon={searchFill}
              sx={{ color: "text.disabled", width: 20, height: 20 }}
            />
          </InputAdornment>
        }
        sx={{ mr: 1, fontWeight: "fontWeightBold" }}
      />
    </SearchbarStyle>
  );
}
