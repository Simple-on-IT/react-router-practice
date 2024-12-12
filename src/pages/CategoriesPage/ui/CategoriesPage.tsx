import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoriesPage.module.css';

export const CategoriesPage: React.FC = () => {
  const categories = ['all', 'frontend', 'maintenance', 'optimization', 'devops', 'testing'];

  return (
    <div className={styles.categoriesContainer}>
      <h1>Новогодние IT задачи</h1>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li key={category} className={styles.categoryItem}>
            {category === 'all' ? 'Все задачи' : category}
          </li>
        ))}
      </ul>
    </div>
  );
};
