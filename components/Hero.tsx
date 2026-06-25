import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-16">
      {/* الوهج الخلفي الملون اللي طالع في صورتك */}
      <div className="absolute top-1/4 left-10 w-87.5 h-87.5 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-100 h-100 bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* تقسيم الشاشة إلى عمودين (Grid) لمنع التكديس بالمنتصف */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 text-left">
        {/* العمود اليسار: النصوص حق التعريف */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm text-sm font-mono text-[#10B981]">
            ENGINEERING SMART SOLUTIONS WITH BALANCED CODE
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            I am{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10B981] to-purple-500">
              Abdulrahman
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
            A dedicated developer crafting elegant, balanced digital
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4">
            {/* الزر الرئيسي: تدرج ناعم مع وهج خلفي خفيف عند التمرير */}
            <button className="relative group px-8 py-3.5 rounded-xl bg-linear-to-r from-emerald-500 via-purple-500 to-purple-600 text-white font-semibold text-md tracking-wide shadow-lg shadow-purple-500/15 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto overflow-hidden">
              {/* طبقة إضاءة داخلية ناعمة */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              View Projects
            </button>

            {/* الزر الثانوي: ستايل زجاجي (Glassmorphism) حقيقي ومتناسق */}
            <button className="px-8 py-3.5 rounded-xl bg-white/3 hover:bg-white/[0.07] text-gray-300 hover:text-white font-medium text-md tracking-wide border border-white/10 hover:border-white/25 backdrop-blur-md shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto">
              Contact Me
            </button>
          </div>
        </div>

        {/* العمود اليمين: مكان الشكل اللي كان مخفي! */}
        <div className="w-full flex items-center justify-center lg:justify-end">
          {/* هذا الكرت الزجاجي يمثل مكان الـ 3D حالياً، وبيعطيك مظهر فخم فوراً */}
          <div className="relative w-full max-w-105 aspect-square rounded-3xl border border-white/5 bg-white/3 backdrop-blur-md shadow-2xl flex items-center justify-center animate-[pulse_4s_infinite]">
            {/* مجسم زجاجي داخلي مائل ومضيء */}
            <div className="w-44 h-44 rounded-xl bg-[#0B0F17]/90 border border-white/5 flex transform rotate-12 animate-[bounce_3s_infinite] flex-col items-center justify-center gap-2">
              {/* علامة الكود باللون الأخضر المميز */}
              <span className="text-4xl text-[#10B981] font-mono font-bold">
                {"</>"}
              </span>

              {/* النص مقسم إلى ألوان: فيزياء أرجواني وكود أخضر */}
              <div className="text-[12px] font-mono tracking-widest uppercase flex flex-col items-center gap-0.5 animate-pulse">
                <span className="text-purple-400 font-bold">Physics</span>
                <span className="text-gray-600 text-[8px]">&</span>
                <span className="text-[#10B981]">Code</span>
              </div>
            </div>

            {/* بطاقة عائمة صغيرة في الأسفل */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0F17]/90 border border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">
                System: Active
              </span>
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
