import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core/';
import styles from './Header.module.sass';

const Header = props => (
   <AppBar
      style={{ flexDirection: 'row', alignItems: 'center' }}
      color="primary"
      position="sticky"
      className={styles.Header}>
      <nav>
         <ul className={styles.ul}>
            <li>
               <Link className={styles.Link} to="/">
                  Register Company
               </Link>
            </li>
            <li>
               <Link className={styles.Link} to="/list">
                  List of companies
               </Link>
            </li>
         </ul>
      </nav>
      <h1>REGISTER YOUR COMPANY</h1>
   </AppBar>
);

export default Header;
