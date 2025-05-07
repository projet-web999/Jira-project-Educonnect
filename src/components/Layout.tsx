
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-1 overflow-hidden pt-16 lg:pt-2 lg:pl-64">
        <div className="container mx-auto px-4 py-2 max-w-7xl">
          <div className="overflow-auto max-h-[calc(100vh-64px)] p-2">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
