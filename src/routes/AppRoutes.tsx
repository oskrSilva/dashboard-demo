import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage } from '@/pages/dashboard/DashboardPage';
import { ShipmentsPage } from '@/pages/shipments/ShipmentsPage';
import { TrackingPage } from '@/pages/tracking/TrackingPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/shipments" element={<ShipmentsPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}