"use client"; // 👈 ضروري لتفعيل Framer Motion

import React from "react";
import { motion, Variants } from "framer-motion";
import { Smartphone, MonitorPlay, BrainCircuit, BotMessageSquare } from "lucide-react";

// تعريف فئات المهارات بناءً على تصميم الصورة (Categories Data Structure)
const skillsData = [
  {
    category: "MOBILE DEV",
    icon: Smartphone, // 👈 أيقونة معبرة من Lucide
    color: "from-emerald-400 to-emerald-600",
    glow: "shadow-[0_0_50px_-8px_rgba(52,211,153,0.35)]", // توهج أخضر
    skills: ["React Native", "Expo", "Kotlin", "Native APIs", "Mobile UI/UX"],
    desc: "Building cross-platform apps with elegant, responsive design.",
  },
  {
    category: "WEB DEV",
    icon: MonitorPlay,
    color: "from-purple-400 to-purple-600",
    glow: "shadow-[0_0_50px_-8px_rgba(168,85,247,0.35)]", // توهج بنفسجي
    skills: ["Next.js / React", "Tailwind CSS", "JavaScript (ES6+)", "Headless CMS", "Backend Physics"],
    desc: "Developing interactive, user-focused web interfaces.",
  },
  {
    category: "LOGIC & BACKEND",
    icon: BrainCircuit, // 👈 أنسب أيقونة تمثل المنطق وقواعد البيانات
    color: "from-teal-400 to-teal-600",
    glow: "shadow-[0_0_50px_-8px_rgba(45,212,191,0.35)]", // توهج فيروزي
    skills: ["TypeScript", "REST APIs", "Node.js", "Problem Solving", "Database Architecture"],
    desc: "Architecting scalable and secure backend systems with smart code.",
  },
];

// مصفوفة تحريك الكروت عند النزول بالسكرول (Variants)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: index * 0.2, // تتابع سينمائي ناعم عند السكرول
    },
  }),
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen text-white py-24 px-4 sm:px-8 relative overflow-hidden"
      dir="ltr" // التصميم يفضل أن يكون LTR لعرض الكروت بشكل متناسق
    >
      {/* خلفية الشبكة الهندسية الفخمة */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size[:4rem_4rem] z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان القسم */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-gray-200">Skills</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Crafting modern, balanced digital experiences across multiple platforms.
          </p>
        </div>

        {/* شبكة الكروت الثلاثية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // يعمل مرة واحدة عند النزول
                custom={index}
                className={`relative group bg-neutral-900/80 backdrop-blur-3xl border border-white/5 rounded-3xl p-8 transition-all duration-500 hover:border-white/10 hover:bg-neutral-900 ${category.glow}`}
              >
                {/* الجزء العلوي: الأيقونة والعنوان */}
                <div className="flex items-center gap-5 mb-8">
                  <div className={`p-4 rounded-2xl bg-white/3 border border-white/5`}>
                    <IconComponent className={`w-10 h-10 bg-clip-text bg-linear-to-b ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white uppercase">
                    {category.category}
                  </h3>
                </div>

                {/* شارات المهارات (Pills) */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-neutral-800 text-gray-200 border border-neutral-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* الوصف السفلي وشعار الـ physics */}
                <div className="border-t border-neutral-800 pt-6 mt-auto">
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-neutral-600 font-mono">
                     <BotMessageSquare size={13} className="text-neutral-700"/>
                     <span>Physics & Code</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* تذييل القسم السينمائي */}
        <div className="text-center mt-20">
          <p className="text-xs font-mono text-neutral-700 uppercase tracking-widest">
            ENGINEERING SMART SOLUTIONS WITH BALANCED CODE
          </p>
        </div>
      </div>
    </section>
  );
}