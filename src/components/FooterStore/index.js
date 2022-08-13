import { Container, Box } from "@mui/material";
import { Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

import PhoneCallbackRounded from "@mui/icons-material/PhoneCallbackRounded";

import HelpOutlineRounded from "@mui/icons-material/HelpOutlineRounded";
import PrivacyTipRoundedIcon from "@mui/icons-material/PrivacyTipRounded";

const FooterStore = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="#59C3C3">
                Help
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <PhoneCallbackRounded />
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <HelpOutlineRounded />
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <PrivacyTipRoundedIcon />
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="#59C3C3">
                Account
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <MailRoundedIcon /> Messages
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <BackupTableRoundedIcon />
                  BackUp
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <HistoryRoundedIcon /> History
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="#59C3C3">
                Redes Sociales
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <WhatsappRoundedIcon />
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <SubscriptionsRoundedIcon />
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <FacebookIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Proyecto de Ventas Bravazo &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default FooterStore;
