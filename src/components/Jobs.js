import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import JoblyApi from './../JoblyApi';
import CompanyContext from './../sidebarJobsContext';

const useStyles = makeStyles({
  sticky: { padding: 16, position: 'sticky', top: 16 },
  indentJobDetails: {textIndent:'1em'},
  posRight: {position: 'absolute', right: 24}
});


const Jobs = () => {
  const [jobs, setJobs] = useState();
  const [companyName, setCompanyName] = useState();
  const {currentCompany} = useContext(CompanyContext);
  const classes = useStyles();

  useEffect(()=>{
    async function getJobsFromApi() {
      const company = await JoblyApi.getCompany(currentCompany);
      setJobs(company.jobs);
      setCompanyName(company.name)
    }
    getJobsFromApi();
  },[currentCompany]);

  return (
    <div>
      {!currentCompany ? <p>Select a company to see the jobs available</p> : <h3>Job Openings at {companyName}:</h3>}
        {!jobs ? null : jobs.map(job=>
        <>
          <Tooltip title='Apply'>
            <Fab size="small" color="primary" aria-label="add" className={classes.posRight}>
              <AddIcon />
            </Fab>
          </Tooltip>
          <Typography variant='h6'>{job.title}</Typography>
          <div className={classes.indentJobDetails}>Salary: {job.salary}</div>
          <div className={classes.indentJobDetails}>Equity: {job.equity}</div>
          <Box py={2}> <Divider variant="middle"/>  </Box>
         
        </>) }
    </div>
  )
}

export default Jobs
