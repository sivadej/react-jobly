import React, { useState, useEffect } from 'react';
import JoblyApi from './../JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

const Companies = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(()=>{
    async function getDataFromApi() {
      const companies = await JoblyApi.getCompanies();
      setData(companies);
      setLoading(false);
    }
    getDataFromApi();
  },[]);

  const companiesComponents = () => {
    return(
        data.map(c=><CompanyCard key={c.handle} handle={c.handle} name={c.name} description={c.description} logoUrl={c.logo_url}/>)
    )
  }

  return (
    <div>
      <Search/>
      <h2>Companies</h2>
      {loading ? <h1>loading</h1> : companiesComponents()}
    </div>
  )
}

export default Companies;