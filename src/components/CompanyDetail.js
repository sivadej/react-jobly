import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
  const {id} = useParams();
  return (
    <div>
      Company Detail Component for {id}
    </div>
  )
}

export default CompanyDetail
