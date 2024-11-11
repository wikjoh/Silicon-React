import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from './Breadcrumb.module.css'

const Breadcrumb = () => {
  
  const location = useLocation();
  const lastPathSegment = location.pathname.split('/').pop();


  return (
    <div className={styles.breadcrumbDiv}>
      <Link to="/"><img className={styles.homeIcon} src="/icons/homeicon.svg" />Homepage</Link>
      <img className={styles.chevron} src="/icons/chevronrightdouble.svg" />
      <span className={styles.pathText}>{lastPathSegment}</span>
    </div>
  );
};

export default Breadcrumb;