// src/app/skills/page.jsx
import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; 
import { SiDotnet, SiNextdotjs } from "react-icons/si";

//Halaman utama Skills
export default function SkillsPage() {
  //Daftar skill → ada nama + icon
  const skills = [
    { name: "C#", icon: <SiDotnet size={40} color="#512BD4" /> },   // C# dengan icon ungu
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> }, // CSS biru
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> }, // JS kuning
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },   // React biru muda
    { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> }, // Next.js hitam
  ];

  return (
    <div className="container mx-auto p-8 text-center">
      {/* 🔹 Judul Halaman */}
      <h1 className="text-3xl font-bold mb-8">My Skills</h1>

      {/*Grid untuk menampilkan skill dalam bentuk card */}
      <div className="grid grid-cols-2  gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            // 🔹 Card untuk tiap skill
            // bg-white → warna putih
            // shadow-md → ada bayangan
            // rounded-2xl → pojokan bulat
            // p-6 → padding (jarak dalam)
            // hover:shadow-xl → bayangan lebih besar kalau dihover
            // hover:scale-105 → card agak membesar kalau dihover
            // transition-transform duration-300 → animasinya halus (0.3 detik)
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-3 w-40 hover:shadow-xl hover:scale-105 transition-transform duration-500"
          >
            {/* 🔹 Icon skill */}
            {skill.icon}

            {/* 🔹 Nama skill */}
            <span className="text-lg font-semibold text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
