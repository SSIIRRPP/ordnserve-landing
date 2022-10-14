import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
/* import Image from "next/image"; */
import OrdNServeLogo from "../../Visual/OrdNServeLogo";
import LightIcon from "../../../assets/icons/light_mode.svg";
import DarkIcon from "../../../assets/icons/dark_mode.svg";
import { useContext } from "react";
import ThemeContext from "../../../contexts/ThemeContext";

/* const LightIcon = () => <Image src={LightIconSrc} style={{ fill: "red" }} />; */
/* const DarkIcon = () => <Image src={DarkIconSrc} style={{ fill: "red" }} />; */

const Header = ({ setOpenSidebar }) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <AppBar
      style={{
        padding: ".35rem",
        backgroundColor: theme.raw.dark.backgroundSecondary,
      }}
      position="sticky"
    >
      <Toolbar sx={{ p: "0 .5rem" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, pl: 1.5 }}
          onClick={() => setOpenSidebar((s) => !s)}
        >
          <MenuIcon
            style={{
              color: theme.raw.dark.color,
              cursor: "pointer",
            }}
          />
        </IconButton>
        <Typography variant="caption" sx={{ flexGrow: 1 }}>
          <OrdNServeLogo />
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            size="large"
            aria-controls="theme-switch"
            aria-haspopup="false"
            onClick={changeTheme}
            color="inherit"
            sx={{ pr: 0 }}
          >
            {theme.name === "dark" ? (
              <LightIcon fill={theme.raw.dark.color} />
            ) : (
              <DarkIcon fill={theme.raw.dark.color} />
            )}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
