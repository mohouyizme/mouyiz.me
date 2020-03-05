import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useTheme from './utils/useTheme';
import initializeGA from './utils/initializeGA';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Uses from './pages/Uses';
import NotFound from './pages/NotFound';

import Box from './components/helpers/Box';
import Navbar from './components/ui/Navbar';
import SideMenu from './components/ui/SideMenu';

const history = createBrowserHistory();

initializeGA(history);

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

  .page {
    position: absolute;
    left:2rem;
    right: 2rem;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router history={history}>
        <Box m="auto" pt="2rem" p="0 2rem" mw="50rem" position="relative">
          <Box mb="5rem">
            <Navbar />
          </Box>
          <SideMenu />
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={300}
                  classNames="page"
                >
                  <div className="page">
                    <Switch location={location}>
                      <Route path="/" exact component={Home} />
                      <Route path="/projects" exact component={Projects} />
                      <Route path="/blog" exact component={Blog} />
                      <Route path="/uses" exact component={Uses} />
                      <Route path="/404" exact component={NotFound} />
                      <Redirect to="/404" />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
