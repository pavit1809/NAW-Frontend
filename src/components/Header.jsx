import { AppBar, Container, Toolbar, Grid, Button, Tabs, Tab } from "@mui/material";
import React, { useEffect } from "react";
import logo from "./../assets/images/Logo.png"
import { useLocation, useNavigate } from "react-router-dom";
import './Header.css'
const pages = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Events',
    url: '/events'
  },
  {
    name: 'Products',
    url: '/products'
  },
  {
    name: 'Membership',
    url: '/membership'
  },
  {
    name:  'Blog',
    url: '/blogs'
  },
];
function LinkTab(props) {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        navigate(props.href);
      }}
      {...props}
    />
  );
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pageIndex = pages.findIndex((page) => {
      return location.pathname == page.url;
    })
    setValue(pageIndex != -1 ? pageIndex : 0)
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar disableGutters variant="string">
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              alignSelf: "center",
              width: "30%",
            }}
          >
            <img src={logo} alt="logo" />
          </Grid>
          <Grid
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              width: "80%",
            }}
          >
            <Tabs
              aria-label="nav tabs example"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                children: (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#3874FF",
                      display: "flex",
                      margin: "0 auto",
                    }}
                  />
                ),
                style: {
                  background: "unset",
                  height: "6px",
                },
              }}
            >
              {pages.map((page, index) => (
                <LinkTab label={page.name} href={page.url} key={index} />
              ))}
            </Tabs>
            <Button
              variant="outlined"
              sx={{ m: 2 }}
              onClick={() => navigate("/sign-up")}
            >
              Sign up
            </Button>
            <Button
              variant="contained"
              sx={{ m: 2 }}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Container >
          {displayDesktop()}
        </Container>
      </AppBar>
    </header>
  );
}