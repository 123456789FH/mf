import React from 'react';
import { View } from '../types';
import { Users, BookOpen, CheckCircle, Clock, Plus, Download, ExternalLink, MoreVertical, FileText, Video, Link as LinkIcon } from 'lucide-react';

interface TeacherDashboardProps {
  currentView: View;
}

const StatCard = ({ label, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-slate-500 font-medium mb-1">{label}</p>
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className="text-green-500 font-bold ml-1">{change}</span>
      <span className="text-slate-400">مقارنة بالشهر الماضي</span>
    </div>
  </div>
);

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ currentView }) => {
  
  // Sub-view: Add Resource Form
  if (currentView === View.ADD_RESOURCE) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-black text-slate-900">إضافة مورد تعليمي جديد</h1>
        </div>
        <p className="text-slate-500">املأ التفاصيل أدناه لإضافة ورقة عمل جديدة أو مورد تعليمي إلى مكتبتك.</p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">معلومات أساسية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-slate-700 font-medium mb-2">عنوان المورد</label>
              <input type="text" className="w-full p-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50" placeholder="مثال: ورقة عمل عن أساسيات الجبر" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-slate-700 font-medium mb-2">وصف مختصر</label>
              <textarea className="w-full p-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50 min-h-[120px]" placeholder="اكتب وصفاً قصيراً لمحتوى المورد..."></textarea>
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">الصف الدراسي</label>
              <select className="w-full p-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50">
                <option>اختر الصف</option>
                <option>الأول الثانوي</option>
                <option>الثاني الثانوي</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-2">الموضوع</label>
              <select className="w-full p-4 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 outline-none bg-slate-50">
                <option>اختر الموضوع</option>
                <option>الجبر</option>
                <option>الهندسة</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">اختر طريقة الإضافة</h3>
          
          <div className="flex border-b border-slate-200 mb-6">
             <button className="px-6 py-3 border-b-2 border-primary-500 text-primary-600 font-bold flex items-center gap-2">
                <FileText size={20} />
                <span>رفع ملف PDF</span>
             </button>
             <button className="px-6 py-3 text-slate-500 font-medium hover:text-slate-800 flex items-center gap-2">
                <LinkIcon size={20} />
                <span>رابط خارجي</span>
             </button>
          </div>

          <div className="border-2 border-dashed border-slate-300 rounded-xl p-10 text-center bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download size={32} />
            </div>
            <h4 className="text-lg font-bold text-slate-800">اسحب الملف إلى هنا</h4>
            <p className="text-slate-500 mt-2">أو اضغط للاختيار من جهازك (PDF فقط)</p>
            <button className="mt-4 px-6 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-bold hover:bg-slate-50">اختيار ملف</button>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-8 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition">إلغاء</button>
          <button className="px-8 py-3 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition shadow-lg shadow-primary-500/20">إضافة المورد</button>
        </div>
      </div>
    );
  }

  // Sub-view: Assignments List
  if (currentView === View.TEACHER_ASSIGNMENTS) {
    return (
      <div className="space-y-6">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h1 className="text-3xl font-black text-slate-900">إدارة الواجبات</h1>
          <button className="bg-primary-500 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-600 transition">
            <Plus size={20} />
            <span>إنشاء واجب جديد</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-wrap gap-4 justify-between items-center bg-slate-50">
             <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-800 shadow-sm">الكل</button>
                <button className="px-4 py-1.5 text-slate-500 text-sm font-medium hover:bg-white hover:shadow-sm rounded-lg transition">الحالية</button>
                <button className="px-4 py-1.5 text-slate-500 text-sm font-medium hover:bg-white hover:shadow-sm rounded-lg transition">المنتهية</button>
             </div>
             <input type="text" placeholder="ابحث عن واجب..." className="bg-white border border-slate-200 rounded-lg px-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-primary-500 outline-none" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm">عنوان الواجب</th>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm">الصف الدراسي</th>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm">تاريخ النشر</th>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm">الموعد النهائي</th>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm">الحالة</th>
                  <th className="px-6 py-4 text-slate-500 font-medium text-sm text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { title: "مقدمة في الجبر", class: "الأول الثانوي", date: "10 أكتوبر 2023", due: "20 أكتوبر 2023", status: "active" },
                  { title: "امتحان حساب المثلثات", class: "الثاني الثانوي", date: "05 أكتوبر 2023", due: "15 أكتوبر 2023", status: "urgent" },
                  { title: "مراجعة الهندسة", class: "الأول الثانوي", date: "01 أكتوبر 2023", due: "10 أكتوبر 2023", status: "closed" },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-bold text-slate-800">{item.title}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{item.class}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{item.date}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm">{item.due}</td>
                    <td className="px-6 py-4">
                      {item.status === 'active' && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700"><span className="w-2 h-2 rounded-full bg-green-500"></span>نشط</span>}
                      {item.status === 'urgent' && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700"><span className="w-2 h-2 rounded-full bg-yellow-500"></span>قرب الانتهاء</span>}
                      {item.status === 'closed' && <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600"><span className="w-2 h-2 rounded-full bg-slate-400"></span>مغلق</span>}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-primary-600 hover:text-primary-800 text-sm font-bold">تعديل</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Sub-view: Resources List
  if (currentView === View.TEACHER_RESOURCES) {
    return (
       <div className="space-y-6">
         <div className="flex justify-between items-center">
            <div>
               <h1 className="text-3xl font-black text-slate-900">موادي التعليمية</h1>
               <p className="text-slate-500 mt-1">تصفح وإدارة الموارد التي أضفتها لطلابك</p>
            </div>
            <div className="relative">
               <input type="text" placeholder="ابحث في المواد..." className="pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 w-64 focus:ring-2 focus:ring-primary-500 outline-none" />
            </div>
         </div>

         <div className="grid gap-4">
            {[
               { title: "ورقة عمل عن أساسيات الجبر", desc: "تمارين لتعزيز فهم المعادلات الخطية", type: "pdf", date: "15 أكتوبر 2023" },
               { title: "فيديو شرح نظرية فيثاغورس", desc: "رابط يوتيوب يشرح النظرية", type: "video", date: "12 أكتوبر 2023" },
               { title: "محاكاة تفاعلية للدوائر", desc: "مورد خارجي لاستكشاف خصائص الدوائر", type: "link", date: "01 أكتوبر 2023" }
            ].map((res, idx) => (
               <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-primary-300 transition group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${res.type === 'pdf' ? 'bg-red-100 text-red-500' : res.type === 'video' ? 'bg-blue-100 text-blue-500' : 'bg-green-100 text-green-500'}`}>
                     {res.type === 'pdf' ? <FileText size={28}/> : res.type === 'video' ? <Video size={28}/> : <ExternalLink size={28}/>}
                  </div>
                  <div className="flex-1">
                     <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition">{res.title}</h3>
                     <p className="text-slate-500 text-sm mt-1">{res.desc}</p>
                     <p className="text-xs text-slate-400 mt-2">تاريخ الإضافة: {res.date}</p>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 ${res.type === 'pdf' ? 'bg-primary-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                     {res.type === 'pdf' ? <Download size={16}/> : <ExternalLink size={16}/>}
                     <span>{res.type === 'pdf' ? 'تنزيل' : 'فتح'}</span>
                  </button>
               </div>
            ))}
         </div>
       </div>
    );
  }

  // Default: Overview Dashboard
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-3xl font-black text-slate-900">أهلاً بك مجدداً، أحمد</h1>
           <p className="text-slate-500 mt-2">هنا ملخص سريع لنشاطك اليوم مع فصولك الدراسية.</p>
        </div>
        <button className="bg-primary-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary-600 transition flex items-center gap-2">
           <Plus size={20} />
           <span>إنشاء محتوى</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard label="إجمالي الطلاب" value="120" change="+5%" icon={Users} color="bg-blue-100 text-blue-600" />
        <StatCard label="الفصول النشطة" value="4" change="+1" icon={BookOpen} color="bg-green-100 text-green-600" />
        <StatCard label="الواجبات المعلقة" value="3" change="-2%" icon={Clock} color="bg-orange-100 text-orange-600" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">نظرة عامة على الفصول</h2>
            <a href="#" className="text-primary-600 font-bold text-sm hover:underline">عرض الكل</a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "الجبر للمرحلة المتوسطة", students: 30, assignments: 5, progress: 75 },
              { name: "الهندسة التحليلية", students: 25, assignments: 8, progress: 90 },
            ].map((cls, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-800">{cls.name}</h3>
                  <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={20} /></button>
                </div>
                <div className="flex gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Users size={16}/> {cls.students} طالب</span>
                  <span className="flex items-center gap-1"><FileText size={16}/> {cls.assignments} واجبات</span>
                </div>
                <div>
                   <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
                      <span>نسبة إكمال الواجبات</span>
                      <span>{cls.progress}%</span>
                   </div>
                   <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${cls.progress}%` }}></div>
                   </div>
                </div>
                <button className="w-full mt-6 py-2 bg-primary-50 text-primary-600 rounded-lg font-bold text-sm hover:bg-primary-100 transition">إدارة الفصل</button>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-slate-900 mb-6">أحدث الأنشطة</h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
             <div className="space-y-6">
                {[
                   { user: "سارة علي", action: "أكملت واجب 'المعادلات الخطية'", time: "قبل 5 دقائق", icon: CheckCircle, color: "text-green-500 bg-green-50" },
                   { user: "طالب جديد", action: "انضم إلى فصل 'الهندسة'", time: "قبل 30 دقيقة", icon: Users, color: "text-blue-500 bg-blue-50" },
                   { user: "يوسف خالد", action: "قدم واجب 'تحليل الدوال'", time: "قبل ساعة", icon: FileText, color: "text-orange-500 bg-orange-50" },
                ].map((activity, idx) => (
                   <div key={idx} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}>
                         <activity.icon size={20} />
                      </div>
                      <div>
                         <p className="text-sm text-slate-800"><span className="font-bold">{activity.user}</span> {activity.action}</p>
                         <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
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

export default TeacherDashboard;