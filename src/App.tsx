
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Schedule from "@/pages/Schedule";
import Map from "@/pages/Map";
import Attendance from "@/pages/Attendance";
import AttendanceRecords from "@/pages/AttendanceRecords";
import Announcements from "@/pages/Announcements";
import Emergency from "@/pages/Emergency";
import Supplies from "@/pages/Supplies";
import StudyRooms from "@/pages/StudyRooms";
import Library from "@/pages/Library";
import Projects from "@/pages/Projects";
import ServiceIssues from "@/pages/ServiceIssues";
import Calendar from "@/pages/Calendar";
import CafeteriaMenu from "@/pages/CafeteriaMenu";
import Resources from "@/pages/Resources";
import Equipment from "@/pages/Equipment";
import Gradebook from "@/pages/Gradebook";
import Progress from "@/pages/Progress";
import Newsletters from "@/pages/Newsletters";
import Conference from "@/pages/Conference";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/map" element={<Map />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/attendance-records" element={<AttendanceRecords />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/supplies" element={<Supplies />} />
              <Route path="/study-rooms" element={<StudyRooms />} />
              <Route path="/library" element={<Library />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/service-issues" element={<ServiceIssues />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/cafeteria-menu" element={<CafeteriaMenu />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/gradebook" element={<Gradebook />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/newsletters" element={<Newsletters />} />
              <Route path="/conference" element={<Conference />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
