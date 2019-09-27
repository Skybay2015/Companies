import React from 'react';
import styles from './Company.module.sass';
import Employee from '../Employee/Employee';

const Company = ({ companyName, websiteUrl, videoUrl, users }) => {
   return (
      <div className={styles.container}>
         <div>
            <h2>{companyName}</h2>
            <p>
               <a href={websiteUrl}>Website</a>
            </p>
            <p>
               <a href={videoUrl}>Video</a>
            </p>
         </div>
         {users.length !== 0 && (
            <div>
               <h3>Employee</h3>
               {users.map(user => (
                  <Employee
                     name={user.name}
                     surname={user.surname}
                     email={user.email}
                     position={user.position}
                     key={user._id}
                     styles={styles}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default Company;
