import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Company from '../../components/Company/Company';

const CompanyList = () => {
   const [companies, setCompanies] = useState([]);
   useEffect(() => {
      async function getCompanies() {
         const response = await axios.get('http://localhost:8080/company/');
         console.log(response.data)
         setCompanies(response.data);
      }
      getCompanies();
   }, []);
   return (
      <div>
         {companies.length ? (
            companies.map(item => (
               <Company
                  key={item._id}
                  companyName={item.company.name}
                  websiteUrl={item.company.website}
                  videoUrl={item.company.video}
                  users={item.users}
               />
            ))
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default CompanyList;
