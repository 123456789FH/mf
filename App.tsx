import React, { useState } from 'react';
import { View, Role } from './types';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import { Bell, Menu, Search } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);
  const [userRole, setUserRole] = useState<Role>(Role.GUEST);

  const handleLogin = (role: Role) => {
    setUserRole(role);
    setCurrentView(role === Role.STUDENT ? View.STUDENT_DASHBOARD : View.TEACHER_DASHBOARD);
  };

  const handleLogout = () => {
    setUserRole(Role.GUEST);
    setCurrentView(View.LANDING);
  };

  // Views that don't need the dashboard layout
  if (currentView === View.LANDING) {
    return <Landing onNavigate={setCurrentView} />;
  }

  if (currentView === View.LOGIN) {
    return <Login onLogin={handleLogin} onBack={() => setCurrentView(View.LANDING)} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans" dir="rtl">
      <Sidebar 
        currentView={currentView} 
        role={userRole} 
        onChangeView={setCurrentView} 
        onLogout={handleLogout} 
      />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-20 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-600">
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block w-96">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="ابحث في فصولك، طلابك، والمزيد..." 
                className="w-full pl-4 pr-10 py-2.5 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary-500 text-sm outline-none transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <img 
                src={userRole === Role.STUDENT 
                  ? "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60" 
                  : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"}
                alt="User Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-slate-100 shadow-sm"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-800">
                  {userRole === Role.STUDENT ? 'محمد عبدالله' : 'أحمد محمود'}
                </p>
                <p className="text-xs text-slate-500">
                  {userRole === Role.STUDENT ? 'طالب' : 'مدرس رياضيات'}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {userRole === Role.STUDENT && <StudentDashboard />}
            {userRole === Role.TEACHER && <TeacherDashboard currentView={currentView} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;