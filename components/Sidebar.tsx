import React from 'react';
import { View, Role } from '../types';
import { LayoutDashboard, GraduationCap, ClipboardList, BookOpen, Settings, LogOut, BarChart3, PlusCircle } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  role: Role;
  onChangeView: (view: View) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, role, onChangeView, onLogout }) => {
  const isStudent = role === Role.STUDENT;

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => onChangeView(view)}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 ${
        currentView === view
          ? 'bg-secondary text-white font-bold shadow-md'
          : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`}
    >
      <Icon size={22} />
      <span>{label}</span>
    </button>
  );

  return (
    <aside className="hidden md:flex flex-col w-72 bg-slate-800 text-white h-screen sticky top-0 shadow-xl">
      <div className="flex items-center gap-3 p-8 border-b border-white/10">
        <div className="bg-primary-500 p-2 rounded-lg">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-wide">منصة الرياضيات</h2>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {isStudent ? (
          <>
            <NavItem view={View.STUDENT_DASHBOARD} icon={LayoutDashboard} label="لوحة التحكم" />
            <NavItem view={View.STUDENT_DASHBOARD} icon={GraduationCap} label="دوراتي" />
            <NavItem view={View.STUDENT_DASHBOARD} icon={ClipboardList} label="الواجبات" />
            <NavItem view={View.STUDENT_DASHBOARD} icon={BarChart3} label="تقدمي" />
          </>
        ) : (
          <>
            <NavItem view={View.TEACHER_DASHBOARD} icon={LayoutDashboard} label="الرئيسية" />
            <NavItem view={View.TEACHER_ASSIGNMENTS} icon={ClipboardList} label="الواجبات والاختبارات" />
            <NavItem view={View.TEACHER_RESOURCES} icon={BookOpen} label="الموارد التعليمية" />
            <NavItem view={View.ADD_RESOURCE} icon={PlusCircle} label="إضافة مورد" />
          </>
        )}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 transition-colors">
          <Settings size={22} />
          <span>الإعدادات</span>
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-lg text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors mt-2"
        >
          <LogOut size={22} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;