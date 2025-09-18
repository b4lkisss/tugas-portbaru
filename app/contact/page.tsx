import Link from "next/link"; // Import Link dari Next.js (di sini sebenarnya tidak dipakai, bisa dihapus)

// Komponen halaman ContactPage
export default function ContactPage() {
  // Variabel untuk menyimpan username Instagram (tanpa @)
  const instagramUser = "angelinacharismine";

  return (
    // Bagian utama halaman (section) → konten ditaruh di tengah layar
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      
      {/* Card / kotak utama */}
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        
        {/* Judul Halaman */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          hallo ini akun instagram saya!!
        </h1>

        {/* Deskripsi singkat */}
        <p className="text-gray-600 mb-6">
          Klik tombol di bawah ini ya untuk mengunjungi akun Instagram saya❤️.
        </p>

        {/* Tombol Instagram */}
        <a
          href={`https://instagram.com/${instagramUser}`} // Link ke akun IG
          target="_blank"                                // Buka di tab baru
          rel="noopener noreferrer"                      // Supaya aman saat buka link baru
          className="inline-block px-6 py-3 bg-blue-400 text-white rounded-lg shadow"
          // Style tombol → warna biru, teks putih, padding, sudut bulat, ada bayangan
        >
          Kunjungi Instagram
        </a>
      </div>
    </section>
  );
}
