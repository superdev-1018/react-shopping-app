import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { alpha } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from '@/routes/hooks/index';
import { RouterLink } from '@/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';
import Scrollbar from '@/components/scrollbar';

import { HEADER, NAV } from './config-layout';
import { navConfig, navBottomConfig } from './config-navigation';
import styled from 'styled-components';
import { Button, Divider, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }: { openNav: boolean, onCloseNav: () => void }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: "90vh",
        '& .simplebar-content': {
          height: "90vh",
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box mt="50px">
      </Box>
    </Scrollbar>
  );

  return (
    <Box>
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }: { item: any }) {
  const pathname = usePathname();

  const active = item.path === '/' ? (pathname === item.path) : (pathname.indexOf(item.path) === 0);

  return (
    <StyledListItem>
      <ListItemButton
        component={RouterLink}
        href={item.path}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          display: 'block',
          backgroundColor: 'transparent !important',
          border: "1px solid #7e7d7d",
          borderColor: () => alpha("#7e7d7d", 0.15),
          transition: 'all 0.3s',
          '&:hover': {
            borderColor: () => alpha("#7e7d7d", 1),
          },
          ...(active && {
            color: 'text.primary',
            fontWeight: 'fontWeightSemiBold',
            borderColor: () => alpha("#7e7d7d", 1)
          }),
        }}
      >
        <Box component="span" sx={{ width: 32, height: 32 }}>
          {item.icon}
        </Box>
        <Box component="span">{item.title} </Box>
        <Box className={`active-symbol ${active ? '' : 'hidden'}`}></Box>
      </ListItemButton>
    </StyledListItem>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

const StyledListItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  .active-symbol {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #2b2929;
    right: -15px;
    bottom: -15px;
    border-radius: 50%;
    opacity: 1;
    transition: all 0.3s;
    &.hidden {
      opacity: 0;
    }
  }
  .MuiListItemButton-gutters {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    padding: 12px;
    .MuiBox-root {
      display: block;
    }
    .svg-color {
      width: 32px;
      height: 32px;
    }
  }
`