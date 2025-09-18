import Image from "next/image"; // Komponen khusus Next.js untuk menampilkan gambar (lebih optimal)
import Link from "next/link";   // Komponen Next.js untuk navigasi antar halaman

// Komponen utama halaman Home
export default function Home() {
  return (
    // Section utama → konten ditaruh di tengah layar (flex, justify-center, items-center)
    <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center px-4">
      
      {/* Foto Profil */}
      <Image
        src="/fotoweb.jpeg" // Gambar diambil dari folder public/
        alt="Foto Profil"   // Teks alternatif jika gambar gagal dimuat
        width={180}         // Lebar gambar
        height={160}        // Tinggi gambar
        className="rounded-full mb-6 shadow-lg" // Style: bulat, ada jarak bawah, ada bayangan
      />

      {/* Nama & Tagline */}
      <h1 className="text-3xl font-bold mb-2">Balqis Demes Piscesa</h1> {/* Nama utama */}
      <p className="text-lg text-gray-600 mb-6">
        Web Developer | UI/UX Enthusiast
      </p> {/* Deskripsi singkat / tagline */}

      {/* Tombol Navigasi */}
      <div className="flex gap-4 flex-wrap justify-center">
        {/* Link ke halaman About */}
        <Link
          href="/about" // Arah navigasi
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-400 transition"
          // Style tombol: biru, teks putih, sudut bulat, ada bayangan, ada efek hover
        >
          About
        </Link>
      </div>
    </section>
  );
}
