import React from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const useStyles = makeStyles((theme)=>({
  container: { padding: theme.spacing(2), maxWidth: 1200, margin: 'auto' },
  sidebar: { padding: theme.spacing(2), [theme.breakpoints.down('xs')]: { order: -1 } }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Grid container direction='row' className={classes.container}>
          <Grid item xs={12} sm={8}>
            <Routes />
          </Grid>
          <Grid item xs sm={4} className={classes.sidebar}>
            <Sidebar />
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;


