'use client';

import styles from './Pagination.module.css';

export default function Pagination() {
  return (
    <div>
      {/* Pagination */}
      <div className={styles.paginationContainer}>
        <div className={styles.pagination}>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              {"< Previous"}
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={`${styles.paginationLink} ${styles.paginationLinkActive}`}>
              1
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              2
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              3
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              4
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              ...
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={styles.paginationLink}>
              12
            </a>
          </div>
          <div className={styles.paginationItem}>
            <a href="#" className={`${styles.paginationLink} ${styles.paginationLinkNav}`}>
              {"Next >"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
