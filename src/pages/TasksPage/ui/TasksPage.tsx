import { tasks } from "@/shared/constants/tasks";
import { Link, useSearchParams } from "react-router-dom";
import styles from './TasksPage.module.css';

export const TasksPage: React.FC = () => {
  // const [searchParams] = ...
  // const category = searchParams.get('category') || 'all';

  // const filteredTasks = category === 'all'
  //   ? tasks
  //   : tasks.filter((task) => task.category === category);

  return (
    <div className={styles.tasksContainer}>
      {/* <h1>Задачи {category === 'all' ? '' : `в категории ${category}`}</h1>
      <ul className={styles.tasksList}>
        {filteredTasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>{task.title}</li>
        ))}
      </ul>
      <Link to="/" className={styles.backLink}>🎁 Вернуться к выбору категорий</Link> */}
    </div>
  );
};