// src/app/skill/page.tsx
"use client"; // Menandakan komponen ini berjalan di client (bisa pakai state, useEffect, dll)

import { useEffect, useState } from "react"; 
import Link from "next/link"; // Sebenarnya di sini tidak terpakai

// Komponen utama halaman Skill
export default function SkillPage() {
  // Data skill → berisi nama skill dan level (0–100, dalam persen)
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 4 },
    { name: "Java", level: 10 },
  ];

  // State untuk menampung progress bar (awalnya semua 0%)
  const [progress, setProgress] = useState(skills.map(() => 0));

  // useEffect → dijalankan sekali setelah komponen ditampilkan
  useEffect(() => {
    // Setelah 200ms, progress bar diisi sesuai level dari skills
    const timer = setTimeout(() => {
      setProgress(skills.map((s) => s.level));
    }, 200);

    // Bersihkan timer jika komponen di-unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    // Bagian utama halaman (posisi konten di tengah layar)
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-lg w-full">
        {/* Judul Halaman */}
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          My Skills
        </h1>

        {/* Daftar skill */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              {/* Nama Skill */}
              <p className="text-gray-700 font-semibold text-lg mb-2">
                {skill.name}
              </p>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress[index]}%` }} // Lebar progress mengikuti nilai state
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
