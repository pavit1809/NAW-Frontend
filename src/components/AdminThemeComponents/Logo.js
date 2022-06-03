import * as React from 'react';
import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import logo from "./../../assets/images/Logo.png"
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={logo} sx={{ width: 170, height: 50, ...sx }} />;
}
