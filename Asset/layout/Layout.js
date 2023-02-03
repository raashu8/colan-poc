import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import mypic from "../../Asset/Images/colan-logo.png";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { mainRoute } from "routes";
import { useRouter } from "next/router";
import { Card, createMuiTheme } from "@mui/material";
import ScrollToColor01 from "./scrollEffect";
import { ThemeProvider } from "@material-ui/core";

const drawerWidth = 240;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "theme.shape.borderRadius",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    borderRadius: "24px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "12px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function MainLayout({ children, title }, props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const routeHandler = (e) => {
    router.push(e);
  };
  const theme = createMuiTheme();
  const drawer = (
    <div className="trans">
      <Image
        src={mypic}
        alt="Picture of the author"
        style={{ width: "180px", height: "64px", marginLeft: "28px" }}
      />
      <Divider />
      <List>
        {mainRoute.map((e, i) => {
          return (
            <ListItem
              key={i}
              button
              onClick={() => routeHandler(e.path)}
              className={
                router.pathname.indexOf(e.path) !== -1
                  ? "dashbord-bar-active"
                  : "dashbord-bar"
              }
            >
              <span className="ico-left">{e.icon}</span>
              <span className="mar-lef" style={{ fontSize: "14px" }}>
                {e.name}
              </span>
            </ListItem>
          );
        })}
      </List>

      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToColor01>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" }, color: "#1c12f9" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ color: "black" }}
              >
                {title} Dashboard
              </Typography>
              <Card sx={{ padding: "10px", display: "flex" }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" }, color: "#1c12f9" }}
                >
                  <MenuIcon />
                </IconButton>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon
                      sx={{ color: "black", zIndex: "9", fontSize: "16px" }}
                    />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    sx={{ backgroundColor: "#f4f7fe", color: "grey" }}
                  />
                </Search>
              </Card>
            </Toolbar>
          </AppBar>
        </ScrollToColor01>
      </ThemeProvider>
      {/* <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#d9e4ff70",
            backdropFilter: "blur(20px)",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#1c12f9" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "black" }}
          >
            {title} Dashboard
          </Typography>
          <Card sx={{ padding: "10px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{ color: "black", zIndex: "9", fontSize: "16px" }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ backgroundColor: "#f4f7fe", color: "grey" }}
              />
            </Search>
          </Card>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
};

export default MainLayout;
