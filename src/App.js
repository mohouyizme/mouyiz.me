import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import useTheme from './utils/useTheme';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Uses from './pages/Uses';
import NotFound from './pages/NotFound';

import Box from './components/helpers/Box';
import Navbar from './components/ui/Navbar';
import SideMenu from './components/ui/SideMenu';
import Footer from './components/ui/Footer';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    position: relative;
    padding-bottom: 5rem;
    font-family: 'Open Sans';
    line-height: 1.5;
    min-height: 100%;
    color: ${({ theme }) => theme.paragraph};
    background: ${({ theme }) => theme.background};
    transition: 300ms ease-in-out;
  }

  #root {
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.headline}
  }

  a {
    color: ${({ theme }) => theme.paragraph}
  }
`;

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Box m="auto" pt="2rem" p="0 2rem" mw="50rem">
          <Box mb="5rem">
            <Navbar />
          </Box>
          <SideMenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/uses" exact component={Uses} />
            <Route path="/404" exact component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;