import React from 'react';
import { View } from '../types';
import { Rocket, Trophy, Headphones } from 'lucide-react';

interface LandingProps {
  onNavigate: (view: View) => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary-500 p-1.5 rounded-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800">منصة الرياضيات</h1>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition">الرئيسية</a>
            <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition">المميزات</a>
            <a href="#" className="text-slate-600 hover:text-primary-500 font-medium transition">الأسعار</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate(View.LOGIN)}
              className="text-primary-600 font-bold hover:bg-primary-50 px-4 py-2 rounded-lg transition"
            >
              تسجيل دخول
            </button>
            <button 
               onClick={() => onNavigate(View.LOGIN)}
               className="bg-primary-500 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-600 shadow-lg shadow-primary-500/30 transition transform hover:-translate-y-0.5"
            >
              إنشاء حساب
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-right">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              إتقان الرياضيات <br/>
              <span className="text-primary-500 relative">
                بطريقة مبتكرة
                <svg className="absolute -bottom-2 right-0 w-full h-3 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              انضم إلى منصتنا التعليمية الرائدة واستكشف طرقًا جديدة وممتعة لتعلم الرياضيات، مصممة خصيصًا للمعلمين والطلاب لتحقيق أفضل النتائج.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => onNavigate(View.LOGIN)} className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 shadow-xl shadow-primary-500/20 transition transform hover:-translate-y-1">
                ابدأ التعلم الآن
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition">
                مشاهدة فيديو تعريفي
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Learning Math" 
              className="relative z-10 rounded-2xl shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">لماذا تختار منصتنا؟</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">نحن نقدم تجربة تعليمية فريدة تمكن الطلاب والمعلمين من تحقيق أقصى إمكاناتهم من خلال أدوات متطورة.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Rocket, title: "سرعة في الأداء", desc: "أدوات تفاعلية تساعد على تسريع عملية فهم وحل المسائل الرياضية المعقدة.", color: "bg-blue-100 text-blue-600" },
              { icon: Trophy, title: "منافسة تحفيزية", desc: "شارك في مسابقات وتحديات شيقة مصممة لتحفيز الطلاب على التعلم والمثابرة.", color: "bg-yellow-100 text-yellow-600" },
              { icon: Headphones, title: "دعم متكامل 24/7", desc: "فريق دعم فني متخصص متاح على مدار الساعة لمساعدة المعلمين والطلاب.", color: "bg-purple-100 text-purple-600" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition duration-300 text-center group">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-300`}>
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary-500 p-1.5 rounded-lg">
                 <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">شعار المنصة</span>
            </div>
            <p className="text-sm">© 2024 جميع الحقوق محفوظة لمنصة الرياضيات.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;