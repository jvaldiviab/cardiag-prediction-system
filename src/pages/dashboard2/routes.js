import { Navigate } from 'react-router-dom';
import Prediction from '../ia/Prediction';


import Signup from '../signup/Signup';
import Dashboard from './Dashboard';
import DashboardLayout from './DashboardLayout';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'signup', element: <Signup /> },
      { path: 'customers', element: <Prediction /> }
    ]
  }
];

export default routes;
