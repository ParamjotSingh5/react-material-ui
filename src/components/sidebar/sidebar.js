import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';


const Sidebar = () => (
  <Box bgcolor="skyblue" flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
    Sidebar
  </Box>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
