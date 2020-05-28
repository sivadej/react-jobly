import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import CompanyContext from './sidebarJobsContext';

const useStyles = makeStyles(theme=>({
  container: { padding: theme.spacing(2), maxWidth: 1200, margin: 'auto' },
  sidebar: { padding: theme.spacing(2), [theme.breakpoints.down('xs')]: { order: -1 } }
}));

function App() {
  const classes = useStyles();
  const [currentCompany, setCurrentCompany] = useState(null);
  console.log('current company',currentCompany)


  return (
    <div>
      <CompanyContext.Provider value={{currentCompany, setCurrentCompany}}>
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
      </CompanyContext.Provider>
    </div>
  );
}

export default App;


