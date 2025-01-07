import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from '@/routes/AppRoutes';
import { DashboardLayout } from '@/layouts/DashboardLayout';

export function App() {
  return (
    <Router>
      <DashboardLayout>
        <AppRoutes />
      </DashboardLayout>
    </Router>
  );
}