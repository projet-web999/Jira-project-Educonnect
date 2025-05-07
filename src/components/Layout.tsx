
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
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation />
      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
