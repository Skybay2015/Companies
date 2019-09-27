import React from 'react';

const Employee = ({name, surname, email, position, styles}) => {
   return (
      <div className={styles.container}>
         <p>Name - {`${name} ${surname}`}</p>
         <p>Email - {email}</p>
         <p>Position - {position}</p>
      </div>
   );
};

export default Employee;
