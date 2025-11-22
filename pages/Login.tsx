import React, { useState } from 'react';
import { Role, View } from '../types';

interface LoginProps {
  onLogin: (role: Role) => void;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login based on some logic or just default to Student for demo
    // In a real app, this would check credentials
    onLogin(Role.STUDENT);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 font-sans" dir="rtl">
      <button onClick={onBack} className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 flex items-center gap-2">
        <span>عودة للرئيسية</span>
      </button>

      <div className="mb-8 text-center">
         <div className="bg-primary-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/30">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
         </div>
         <h1 className="text-2xl font-bold text-slate-900">شعار المنصة</h1>
         <p className="text-slate-500 mt-2">مرحباً بعودتك! قم بتسجيل الدخول للمتابعة.</p>
      </div>

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="flex border-b border-slate-100">
          <button 
            className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'login' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('login')}
          >
            تسجيل الدخول
          </button>
          <button 
            className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === 'signup' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActiveTab('signup')}
          >
            إنشاء حساب
          </button>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {activeTab === 'signup' && (
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">اسم المستخدم</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="أدخل اسمك الكامل" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
              <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="name@example.com" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-slate-700">كلمة المرور</label>
                {activeTab === 'login' && <a href="#" className="text-xs text-primary-600 hover:underline">نسيت كلمة المرور؟</a>}
              </div>
              <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full bg-primary-500 text-white py-3 rounded-lg font-bold hover:bg-primary-600 shadow-lg shadow-primary-500/20 transition transform active:scale-95">
              {activeTab === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">أو للمعاينة السريعة</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button 
                type="button" 
                onClick={() => onLogin(Role.TEACHER)}
                className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                دخول كمعلم
              </button>
              <button 
                type="button" 
                onClick={() => onLogin(Role.STUDENT)}
                className="w-full inline-flex justify-center py-2 px-4 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                دخول كطالب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;