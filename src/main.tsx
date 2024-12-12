
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage/ui/TasksPage';
import { CategoriesPage } from './pages/CategoriesPage/ui/CategoriesPage';

// Роутер
const router = createBrowserRouter([
  {
    path: '/',
    element: <CategoriesPage />,
  },
  {
    path: '/tasks',
    element: <TasksPage />,
  },
]);

// Главный компонент
const App = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
