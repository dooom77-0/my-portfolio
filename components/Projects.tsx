import React from 'react';
// استيراد أيقونات معبرة عن مشاريعك الأربعة
import { BookOpen, Calendar, Scroll, Utensils, ExternalLink, Code2 } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "عارض الآيات (Ayah Viewer)",
    tech: ["JS", "CSS", "Quran API"],
    desc: "#",
    // حددنا الأيقونة، واللون الخاص بالوهج (أخضر زمردي للقرآن والآيات)
    icon: BookOpen,
    glowColor: "group-hover:text-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    liveLink: "#",
    githubLink: "#",
    isFeatured: true 
  },
  {
    id: 3,
    title: "موقع السُّنّة (Sunnah App)",
    tech: ["React", "Tailwind CSS", "JSON"],
    desc: "#",
    icon: Scroll,
    glowColor: "group-hover:text-amber-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]",
    iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    liveLink: "#",
    githubLink: "#",
    isFeatured: false
  },
  {
    id: 4,
    title: "تطبيق الوصفات (Magadeer)",
    tech: ["React Native Expo", "Tailwind CSS", "TheMealDB API"],
    desc: "#",
    icon: Utensils,
    glowColor: "group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    liveLink: "#",
    githubLink: "#",
    isFeatured: false 
  },
  {
    id: 2,
    title: "تطبيق العادات (DevLearn)",
    tech: ["React Native Expo", "tailwind CSS", "React Native MMKV"],
    desc: "#",
    icon: Calendar,
    glowColor: "group-hover:text-blue-400 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    liveLink: "#",
    githubLink: "#",
    isFeatured: true
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen text-white py-24 px-4 sm:px-8 relative overflow-hidden" dir="rtl">
      
      {/* خلفية السايبربانك الناعمة */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size[:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-purple-500">Featured</span>  Projects 
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Here are some of the projects I have worked on.
          </p>
        </div>

        {/* شبكة الـ Grid المتناسقة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-4xl border border-white/6 bg-white/1 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/15 hover:bg-white/3 ${
                  project.isFeatured ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* شارات التقنيات */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="text-[12px] font-mono font-bold px-3 py-1 rounded-full bg-white/4 text-gray-300 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* حاوية الأيقونة البديلة للـ 3D - ناعمة ومضيئة */}
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 ${project.iconBg} ${project.glowColor}`}>
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* أزرار الإجراءات في الأسفل */}
                <div className="flex items-center gap-4 mt-8 pt-5 border-t border-white/4">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 text-center text-xs font-bold py-3 px-4 rounded-xl bg-white text-neutral-950 hover:bg-gray-200 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 flex items-center justify-center gap-2 text-center text-xs font-bold py-3 px-4 rounded-xl bg-white/3 text-white border border-white/8 hover:bg-white/8 transition-all duration-300"
                  >
                    <Code2 size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}