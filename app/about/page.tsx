import Image from "next/image"; // Import komponen Image dari Next.js untuk menampilkan gambar
import Link from "next/link";   // Import komponen Link dari Next.js (meskipun belum dipakai di sini)

export default function About() {
  return (
    // Bagian utama halaman (section) dengan style flex agar isi ada di tengah
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      
      {/* Card / kotak utama untuk menampilkan profil */}
      <div className=" bg-white-600 p-6 rounded-lg shadow text-center w-80">
        
        {/* Foto Profil */}
        <Image
          src="/fotoweb.jpeg"             // Lokasi gambar (di folder public)
          alt="Foto Profil"               // Teks alternatif jika gambar gagal dimuat
          width={150}                     // Lebar gambar
          height={160}                    // Tinggi gambar
          className="rounded-full mx-auto mb-4" // Style: gambar bulat, ditengah, ada jarak bawah
        />

        {/* Data Diri */} {/*ntuk menampilkan data diri.*/}
        <h2 className="text-xl font-bold">Balqis Demes Piscesa</h2> {/* Nama */}
        <p className="text-gray-600">XI RPL B</p>                   {/* Kelas */}
        <p className="text-gray-600">SMKN 8 MALANG</p>              {/* Sekolah */}
        <p className="text-gray-600 mb-4">Jurusan RPL</p>           {/* Jurusan */}
        

        {/* Bagian Motivasi */}{/*ntuk menampilkan motivasi.*/}
        <h3 className="font-semibold text-blue-600">Motivasi</h3>   {/* Judul motivasi */}
        <p className="text-sm text-gray-700 mb-4">
          Saya belajar coding agar bisa memahami teknologi web
          dan membuat sesuatu yang bermanfaat.
        </p>
      </div>
    </section>
  );
}
