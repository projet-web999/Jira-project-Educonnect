
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "@/components/ui/use-toast";

type UserRole = 'student' | 'teacher' | 'parent';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Sample users for demo
const DEMO_USERS: Record<UserRole, User> = {
  student: {
    id: 'student-1',
    name: 'Alex Johnson',
    email: 'alex@school.edu',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?u=student'
  },
  teacher: {
    id: 'teacher-1',
    name: 'Ms. Rebecca Smith',
    email: 'rebecca@school.edu',
    role: 'teacher',
    avatar: 'https://i.pravatar.cc/150?u=teacher'
  },
  parent: {
    id: 'parent-1',
    name: 'Daniel Wilson',
    email: 'daniel@example.com',
    role: 'parent',
    avatar: 'https://i.pravatar.cc/150?u=parent'
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>('student');

  const login = async (email: string, password: string) => {
    // This would be a real auth call in a production environment
    try {
      if (email && password) {
        // For demo purposes, login as the selected role
        const loggedInUser = DEMO_USERS[userRole];
        setUser(loggedInUser);
        toast({
          title: "Logged in successfully",
          description: `Welcome, ${loggedInUser.name}!`,
        });
      } else {
        throw new Error("Email and password are required");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout,
      userRole,
      setUserRole
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
