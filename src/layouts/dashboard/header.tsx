import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useResponsive } from "src/hooks/use-responsive";
import Iconify from "@/components/iconify";
import NotificationsPopover from "./common/notifications-popover";
import logo from "/assets/logo.png";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }: { onOpenNav: () => void }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");
  const mdUp = useResponsive("up", "md");

  const renderContent = (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton onClick={onOpenNav} sx={{ mr: 1}}>
          <Iconify icon="eva:menu-outline"/>
        </IconButton>

        <Stack>
          <img src={logo} alt="Logo" style={{ maxHeight: "50px" }} />
        </Stack>

        <Stack direction="row" spacing={lgUp ? 3 : 1} alignItems="center">
          <NotificationsPopover />
        </Stack>
      </Stack>
    </>
  );

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: 80,
          px: { lg: 5 },
          backgroundColor:'white',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
