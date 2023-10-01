import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


const Rightbar = () => (
  <Box bgcolor="coral" flex={2} p={2} sx={{display:{xs: "none", sm: "block"}}}>
    Rightbar Component
  </Box>
);

Rightbar.propTypes = {};

Rightbar.defaultProps = {};

export default Rightbar;
