"use client"; // 👈 لتفعيل حركات Framer Motion

import React from "react";
import { motion, Variants } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi"; // أيقونة إيميل ناعمة
import { IoLocationOutline } from "react-icons/io5"; // أيقونة موقع ماب
import { FiArrowUpRight } from "react-icons/fi"; // سهم احترافي مائل
import { 
  SiGoogleplay, 
  SiGithub,
} from "react-icons/si"; // 👈 أيقونات المتاجر والبراندات المخصصة
import { FaLinkedin } from "react-icons/fa6"; // 👈 استيراد الإصدار المضمون والحديث

// مصفوفة قنوات التواصل والمتاجر
const contactChannels = [
  {
    icon: SiGoogleplay,
    label: "Google Play Store",
    value: "Abdulrahman on Play Store (soon)",
    href: "https://play.google.com/store", // ضع رابط حساب المطور حقك مستقبلاً
    color: "text-emerald-400",
    bgGlow: "group-hover:bg-emerald-500/10",
    borderGlow: "group-hover:border-emerald-500/30",
  },
  {
    icon: FaLinkedin, // 👈 التعديل هنا
    label: "LinkedIn Profile",
    value: "Abdulrahman on LinkedIn",
    href: "https://www.linkedin.com/in/abdulrahman-dev-22454241a/", // ضع رابط حسابك هنا
    color: "text-blue-400",
    bgGlow: "group-hover:bg-blue-500/10",
    borderGlow: "group-hover:border-blue-500/30",
  },,
  {
    icon: SiGithub,
    label: "GitHub Repositories",
    value: "https://github.com/Abdulrahman-25Dev", // حسابك البرمجي الجديد
    href: "https://github.com/Abdulrahman-25Dev",
    color: "text-neutral-200",
    bgGlow: "group-hover:bg-white/5",
    borderGlow: "group-hover:border-white/20",
  },
  {
    icon: HiOutlineMail,
    label: "Direct Business Email",
    value: "abdulrahman.dev25@gmail.com", // الإيميل الاحترافي الجديد
    href: "mailto:abdulrahman.dev25@gmail.com",
    color: "text-purple-400",
    bgGlow: "group-hover:bg-purple-500/10",
    borderGlow: "group-hover:border-purple-500/30",
  },
];

// متحركات الدخول السلسة للكروت
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ContactSection() {
  return (
    <section 
      id="Contact" 
      className="py-32 px-4 sm:px-8 relative overflow-hidden" 
      dir="ltr"
    >
      {/* تأثير شبكة الخلفية (Tech Grid Minimal) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size[:5rem_5rem] z-0" />
      
      {/* توهج ضوئي خلفي ناعم لثيم السايبربانك */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* هيدر القسم */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-mono text-neutral-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Ready for deployments
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase mb-6">
            Explore My <span className="text-neutral-500">Apps & Code</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Check out my production apps directly on the official stores, review the open-source code on GitHub, or drop a direct line to my inbox.
          </p>
        </motion.div>

        {/* كروت قنوات الاتصال والمتاجر */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto"
        >
          {contactChannels.map((channel) => {
            if(!channel) return null;
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group flex items-center justify-between p-5 bg-neutral-950/40 backdrop-blur-md border border-neutral-900 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${channel.borderGlow}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* حاوية الأيقونة مع توهج البراند المخصص */}
                  <div className={`p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 transition-colors duration-300 ${channel.color} ${channel.bgGlow}`}>
                    <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-0.5">
                      {channel.label}
                    </span>
                    <span className="text-neutral-200 font-medium text-sm tracking-wide block truncate">
                      {channel.value}
                    </span>
                  </div>
                </div>
                
                {/* سهم الانطلاق المائل للأعلى */}
                <div className="text-neutral-700 group-hover:text-white transition-colors duration-300 pl-2 shrink-0">
                  <FiArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* الموقع الجغرافي */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs font-mono text-neutral-600"
        >
          <IoLocationOutline size={14} />
          <span>Saudi Arabia &middot; Remote Workspace</span>
        </motion.div>

      </div>

      {/* الفوتر */}
      <div className="max-w-4xl mx-auto text-center mt-32 border-t border-neutral-900/60 pt-8 relative z-10">
        <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">
          &copy; 2026 Abdulrahman Dev &middot; Built with Next.js & React Icons
        </p>
      </div>
    </section>
  );
}