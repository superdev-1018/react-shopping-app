import { Helmet } from 'react-helmet-async';

import { AppView } from '@/sections/overview/view';
import { useTheme } from "@mui/material/styles";
import Label from '@/components/label/label';
import { Typography } from '@mui/material';
// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Safeli Escrow </title>
      </Helmet>
      <AppView />
    </>
  );
}
