import Image from "next/image"; // Import komponen Image dari Next.js → khusus untuk menampilkan gambar agar lebih optimal
import Link from "next/link";   //  Import Link dari Next.js → buat navigasi antar halaman (walau di sini belum dipakai)

// Komponen utama halaman About
export default function About() {
  return (
    //  Bagian utama halaman → pakai flex agar semua isi berada di tengah layar
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      
      {/*  Card / kotak utama → warna putih, rounded (pojok melengkung), ada shadow */}
      <div className="bg-white p-6 rounded-lg shadow text-center w-80">
        
        {/*  Foto Profil */}
        <Image
          src="/fotoweb.jpeg"             // Lokasi gambar → letaknya di folder "public"
          alt="Foto Profil"               // Teks alternatif jika gambar tidak muncul
          width={150}                     // Lebar gambar
          height={160}                    // Tinggi gambar
          className="rounded-full mx-auto mb-4" // Biar foto bulat, di tengah, ada jarak bawah
        />

        {/* Data Diri */}
        <h2 className="text-xl font-bold">Balqis Demes Piscesa</h2> {/* Nama */}
        <p className="text-gray-600">XI RPL B</p>                   {/* Kelas */}
        <p className="text-gray-600">SMKN 8 MALANG</p>              {/* Sekolah */}
        <p className="text-gray-600 mb-4">Jurusan RPL</p>           {/* Jurusan */}
        
        {/* Bagian Motivasi */}
        <h3 className="font-semibold text-blue-600">Motivasi</h3>   {/* Judul */}
        <p className="text-sm text-gray-700 mb-4">
          Saya belajar coding agar bisa memahami teknologi web
          dan membuat sesuatu yang bermanfaat.
        </p>

        {/*  Bagian Video YouTube */}
        <div className="mt-3 rounded-lg overflow-hidden shadow">
          {/*Embed YouTube pakai iframe → supaya video bisa diputar langsung di web */}
          <iframe
            width="100%" 
            height="200"
            src="https://www.youtube.com/embed/LW5oQl0CxdQ" // Link video YouTube (format embed)
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen // Biar bisa mode fullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
