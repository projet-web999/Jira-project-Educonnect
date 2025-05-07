
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
    <div className="flex min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex-1 transition-all duration-300 lg:ml-64">
        <div className="min-h-screen pt-16 lg:pt-0">
          <div className="p-4 md:p-6 max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
