"use client"; // 👈 ضروري لتفعيل Framer Motion في Next.js

import React from "react";
// استيراد مكتبة التحريك والـ Variants لمنع أخطاء الـ TypeScript
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Scroll,
  Utensils,
  ExternalLink,
  Code2,
  Hourglass,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "تدبر (Tadabbor)",
    tech: ["JS", "CSS", "Quran API"],
    desc: "A modern web application designed for deep reflection, displaying randomized Quranic verses with direct access to their authentic interpretations (Tafseer).",
    icon: BookOpen,
    glowColor:
      "group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:border-purple-500/40",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    cardHover:
      "hover:border-purple-500/30 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]",
    liveLink: "https://random-ayat-d7.pages.dev/",
    githubLink: "https://github.com/dooom77-0/Quran-App",
    isFeatured: true,
    isApp: false,
  },
  {
    id: 2,
    title: "السيرة و النور (Sunnah & Light)",
    tech: ["React", "Tailwind CSS", "JSON"],
    desc: "An interactive platform dedicated to exploring prophetic traditions, allowing users to browse, search, and understand verified Hadiths and their meanings (expandable).",
    icon: Scroll,
    glowColor:
      "group-hover:text-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:border-purple-500/40",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    cardHover:
      "hover:border-purple-500/30 hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.2)]",
    liveLink: "https://sunnah-app-d7.pages.dev/",
    githubLink: "https://github.com/dooom77-0/Sunnah-App",
    isFeatured: false,
    isApp: false,
  },
  {
    id: 3,
    title: "تطبيق الوصفات (Magadeer)",
    tech: ["React Native Expo", "Tailwind CSS", "TheMealDB API"],
    desc: "An international recipe explorer displaying hundreds of global dishes with ingredients and step-by-step cooking guides.",
    icon: Utensils,
    glowColor:
      "group-hover:text-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] group-hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    cardHover:
      "hover:border-emerald-500/30 hover:shadow-[0_0_50px_-12px_rgba(52,211,153,0.2)]",
    liveLink: "/Magadeer.apk",
    githubLink: "https://github.com/dooom77-0/Recipe-App",
    isFeatured: false,
    isApp: true,
  },
  {
    id: 4,
    title: "تطبيق العادات (DevLearn)",
    tech: ["React Native Expo", "Tailwind CSS", "React Native MMKV"],
    desc: "A simple, smart app to track your daily goals and habits, featuring interactive stats to keep your streak going (scalable).",
    icon: Hourglass,
    glowColor:
      "group-hover:text-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] group-hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    cardHover:
      "hover:border-emerald-500/30 hover:shadow-[0_0_50px_-12px_rgba(52,211,153,0.2)]",
    liveLink: "/DevLearn.apk",
    githubLink: "https://github.com/dooom77-0/Shift-Planner",
    isFeatured: true,
    isApp: true,
  },
];

// مصفوفة تحريك الكروت عند السكرول معرفة بنوع Variants الصارم لمنع الأخطاء البرمجية
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.15, // تتابع سينمائي ناعم لظهور الكروت بالتوالي
    },
  }),
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen text-white py-24 px-4 sm:px-8 relative overflow-hidden"
      dir="rtl"
    >
      {/* خلفية السايبربانك الناعمة */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size[:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* أنيميشن ناعم للعنوان الرئيسي بمجرد التمرير */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-purple-500">
              Featured
            </span>{" "}
            Projects
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
            dir="ltr"
          >
            A curated collection of digital experiences crafted to blend modern
            development with meaningful concepts.{" "}
          </p>
        </motion.div>

        {/* شبكة الـ Grid المتناسقة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              /* تحويل الحاوية إلى motion.div لتفعيل السكرول والموشن */
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // يعمل مرة واحدة حتى لا يتكرر ويزعج التصفح
                custom={index} // تمرير الاندكس لحساب قيمة الـ delay التتابعي
                className={`group relative overflow-hidden rounded-4xl border border-white/6 bg-white/1 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-white/15 hover:bg-white/3 ${project.cardHover} ${
                  project.isFeatured ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* شارات التقنيات */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[12px] font-mono font-bold px-3 py-1 rounded-full bg-white/4 text-gray-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* حاوية الأيقونة البديلة للـ 3D - ناعمة ومضيئة بالألوان المحددة */}
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 ${project.iconBg} ${project.glowColor}`}
                    >
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-400 text-sm mt-3 leading-relaxed font-normal"
                    dir="ltr"
                  >
                    {project.desc}
                  </p>
                </div>

                {/* أزرار الإجراءات في الأسفل مع تمييز الـ Live Demo والـ Download APK تلقائياً */}
                <div className="flex items-center gap-4 mt-8 pt-5 border-t border-white/4">
                  <a
                    href={project.liveLink}
                    download={project.isApp}
                    target={project.isApp ? undefined : "_blank"}
                    rel={project.isApp ? undefined : "noopener noreferrer"}
                    className="flex-1 flex items-center justify-center gap-2 text-center text-xs font-bold py-3 px-4 rounded-xl bg-gray-200 text-neutral-950 hover:bg-gray-400 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>{project.isApp ? "Download APK" : "Live Demo"}</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 text-center text-xs font-bold py-3 px-4 rounded-xl bg-white/3 text-white border border-white/8 hover:bg-white/8 transition-all duration-300"
                  >
                    <Code2 size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
