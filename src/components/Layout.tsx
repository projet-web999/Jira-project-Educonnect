
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
      {/* Main layout container with sidebar and content area */}
      <div className="flex w-full">
        {/* Navigation sidebar - fixed width */}
        <Navigation />
        
        {/* Main content area - takes remaining width */}
        <main className="flex-1 ml-64 pt-16 lg:pt-16">
          <div className="w-full px-6 py-6 max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
