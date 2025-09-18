// src/app/projects/page.tsx
"use client"; // Menandakan bahwa ini adalah komponen client (bisa interaktif di Next.js)

import Link from "next/link"; // Import Link (sebenarnya tidak dipakai di sini, karena pakai <a>)

// Komponen utama halaman proyek
export default function ProjectsPage() {
  // Data project dimasukkan ke dalam array (bisa ditambah lagi jika punya lebih banyak project)
  const projects = [
    {
      title: "Web Portofolio",                  // Judul project
      description: "portofolio yang memampilkan biodata.", // Deskripsi singkat project
      link: "https://revisi-five.vercel.app/", // Link project (dibuka di tab baru)
    },
  ];

  return (
    // Bagian utama halaman
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      {/* Judul halaman */}
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Proyek Saya
      </h1>

      {/* Container untuk daftar project */}
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Looping project menggunakan map */}
        {projects.map((project, index) => (
          <div
            key={index} // key wajib saat looping elemen
            className="bg-gray-300 p-4 rounded-lg border border-gray-200"
          >
            {/* Judul project */}
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {project.title}
            </h2>

            {/* Deskripsi project */}
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>

            {/* Tombol untuk membuka project */}
            <a
              href={project.link}                    // URL project
              target="_blank"                        // Buka di tab baru
              rel="noopener noreferrer"              // Supaya aman saat buka link baru
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
              // Style tombol → warna biru, teks putih, sudut bulat, efek hover
            >
              Lihat Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
