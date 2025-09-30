import Image from "next/image"; 
import Link from "next/link";   

// Komponen utama halaman Home
export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center px-4">
      
      {/* Card utama */}
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center max-w-md">
        
        {/* Foto Profil */}
        <Image
          src="/fotoweb.jpeg"
          alt="Foto Profil"
          width={190}
          height={160}
          className="rounded-full mb-6 shadow-lg"
        />

        {/* Nama & Tagline */}
        <h1 className="text-3xl font-bold mb-2">Balqis Demes Piscesa</h1>
        <p className="text-lg text-gray-600 mb-6">
          Web Developer | UI/UX Enthusiast
        </p>

        {/* Tombol Navigasi */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-400 transition"
          >
            About
          </Link>
        </div>
      </div>
    </section>
  );
}
