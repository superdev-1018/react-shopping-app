import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { StyledLabel } from './styles';

// ----------------------------------------------------------------------

const Label = forwardRef(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, iconSize, sx, ...other }: any, ref) => {
    const theme = useTheme();

    const iconStyles = {
      width: iconSize,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ flexShrink: 0, ...iconStyles }}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={{ flexShrink: 0, ...iconStyles }}> {endIcon} </Box>}
      </StyledLabel>
    );
  }
);

Label.propTypes = {
  children: PropTypes.node,
  endIcon: PropTypes.object,
  startIcon: PropTypes.object,
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'soft']),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
  ]),
};

export default Label;
