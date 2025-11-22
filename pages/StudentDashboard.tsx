import React from 'react';
import { Course, Task } from '../types';
import { PlayCircle, HelpCircle, FileText } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const mockCourses: Course[] = [
  { id: 1, title: 'أساسيات الجبر', progress: 75, color: '#1ABC9C', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop&q=60' },
  { id: 2, title: 'مقدمة في الهندسة', progress: 45, color: '#3498DB', image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&auto=format&fit=crop&q=60' },
  { id: 3, title: 'حساب المثلثات', progress: 20, color: '#9B59B6', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&auto=format&fit=crop&q=60' },
];

const mockTasks: Task[] = [
  { id: 1, title: 'واجب الجبر الخطي', dueDate: '25 يونيو', dueText: 'مستحق خلال يومين', month: 'يونيو', day: '25', colorClass: 'text-secondary bg-secondary/10' },
  { id: 2, title: 'اختبار منتصف الفصل', dueDate: '02 يوليو', dueText: 'مستحق الأسبوع القادم', month: 'يوليو', day: '02', colorClass: 'text-yellow-600 bg-yellow-100' },
  { id: 3, title: 'مشروع الهندسة الفراغية', dueDate: '10 يوليو', dueText: 'مستحق خلال 3 أسابيع', month: 'يوليو', day: '10', colorClass: 'text-slate-600 bg-slate-200' },
];

const chartData = [
  { name: 'الإحصاء', uv: 90 },
  { name: 'التفاضل', uv: 60 },
  { name: 'المثلثات', uv: 30 },
  { name: 'الهندسة', uv: 80 },
  { name: 'الجبر', uv: 50 },
];

const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats and Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-6">تقدمك في الدورات</h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="uv" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#1ABC9C' : '#3498DB'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 space-y-4">
              {mockCourses.slice(0, 2).map((course) => (
                <div key={course.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-bold text-slate-700">{course.title}</span>
                      <span className="text-sm font-bold" style={{ color: course.color }}>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5">
                      <div className="h-2.5 rounded-full transition-all duration-500" style={{ width: `${course.progress}%`, backgroundColor: course.color }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-6">وصول سريع</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition duration-200 group">
                <PlayCircle className="w-10 h-10 text-secondary group-hover:scale-110 transition" />
                <span className="text-sm font-bold text-slate-700">تطبيقات تفاعلية</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition duration-200 group">
                <HelpCircle className="w-10 h-10 text-secondary group-hover:scale-110 transition" />
                <span className="text-sm font-bold text-slate-700">بنك الأسئلة</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition duration-200 group">
                <FileText className="w-10 h-10 text-secondary group-hover:scale-110 transition" />
                <span className="text-sm font-bold text-slate-700">الشروحات</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar / Upcoming Tasks */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
            <h2 className="text-xl font-bold text-slate-800 mb-6">المهام القادمة</h2>
            <div className="space-y-6">
              {mockTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition">
                  <div className={`rounded-xl p-3 flex flex-col items-center justify-center min-w-[70px] ${task.colorClass}`}>
                    <span className="text-xs font-bold uppercase">{task.month}</span>
                    <span className="text-2xl font-black leading-none">{task.day}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{task.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{task.dueText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;