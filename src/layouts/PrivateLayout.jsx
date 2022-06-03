import * as React from 'react';
import { Outlet } from "react-router-dom";
import PublicLayout from './PublicLayout';
import DashboardLayout from "./dashboard";

const PrivateLayout = () => {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <PublicLayout />
  );
};

export default PrivateLayout;