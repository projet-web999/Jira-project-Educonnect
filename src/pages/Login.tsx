
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { School, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, userRole, setUserRole } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: "Login Successful",
        description: "Welcome to EduConnect! Redirecting to dashboard...",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Predefined credentials for demo purposes
  const fillDemoCredentials = (role: 'student' | 'teacher' | 'parent') => {
    setUserRole(role);
    
    const demoEmails = {
      'student': 'alex@school.edu',
      'teacher': 'rebecca@school.edu',
      'parent': 'daniel@example.com'
    };
    
    setEmail(demoEmails[role]);
    setPassword('password123');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-white shadow-md mb-4">
            <School className="h-12 w-12 text-edu-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">EduConnect</h1>
          <p className="text-gray-600 mt-2">Your Educational Portal</p>
        </div>
        
        <Card className="w-full shadow-xl border-t-4 border-t-edu-primary animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role" className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-gray-500" />
                  I am a
                </Label>
                <Select 
                  value={userRole} 
                  onValueChange={(value) => setUserRole(value as 'student' | 'teacher' | 'parent')}
                >
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="your.email@school.edu"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="flex items-center">
                    <Lock className="h-4 w-4 mr-2 text-gray-500" />
                    Password
                  </Label>
                  <a href="#" className="text-sm text-edu-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white"
                />
              </div>

              <div className="pt-2 pb-1">
                <p className="text-sm text-gray-500 mb-2">Quick login for demo:</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => fillDemoCredentials('student')}
                    className="flex-1 text-xs"
                  >
                    Student Demo
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => fillDemoCredentials('teacher')}
                    className="flex-1 text-xs"
                  >
                    Teacher Demo
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => fillDemoCredentials('parent')}
                    className="flex-1 text-xs"
                  >
                    Parent Demo
                  </Button>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-edu-primary hover:bg-edu-primary/90 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : "Sign In"}
              </Button>
              
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-edu-primary font-medium hover:underline">
                  Request Access
                </a>
              </p>
              
              <div className="mt-6 text-xs text-center text-gray-500">
                <p>Protected by EduConnect security</p>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
