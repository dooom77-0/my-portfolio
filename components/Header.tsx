"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // 👈 استيراد مكتبة التحريك

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("#home");

  return (
    /* 1. أنيميشن دخول الهيدر: ينزل من الأعلى ويظهر من الشفافية عند تحميل الصفحة */
    <motion.header 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-50"
    >
      <nav className="flex items-center justify-center gap-1 px-4 py-2 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] max-w-[90vw] sm:max-w-none">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActive(item.href)}
            className="group relative px-4 py-2 sm:px-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap"
          >
            {/* 2. أنيميشن الخلفية التفاعلية الذكية (تأثير الكبسولة المنزلقة) */}
            {active === item.href ? (
              <motion.span
                layoutId="active-pill" // 👈 هذا المعرّف يخبر فرامل موشن بجعل الخلفية تنزلق ميكانيكياً بين العناصر
                className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-400/20 to-purple-500/20 shadow-[0_0_16px_rgba(52,211,153,0.15)] border border-emerald-500/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }} // حركة مرنة (Spring) تشبه السوسته الاحترافية
              />
            ) : (
              /* طبقة الـ Hover العادية الخفيفة عند تمرير الماوس */
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-white/5 transition-opacity duration-300" />
            )}

            {/* نصوص القائمة */}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                active === item.href
                  ? "text-white"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}