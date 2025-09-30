import "./globals.css"; // Import file CSS global
import Link from "next/link"; // Import Link dari Next.js untuk navigasi antar halaman

// Metadata untuk SEO (judul tab & deskripsi website)
export const metadata = {
  title: "Portfolio Balqis",
  description: "Personal Portfolio Website",
};

// Komponen RootLayout → kerangka utama website
export default function RootLayout({
  children, // children = isi halaman yang sedang dibuka
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className="
          flex flex-col min-h-screen text-gray-800
          bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100
        "
        // Style body: teks abu-abu, layar penuh, background gradasi
      >
        {/* Navbar */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-600">
          <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6 text-white">
            <ul className="flex gap-6 text-lg">
              {/* Link navigasi ke halaman lain */}
              <li>
                <Link href="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/skill"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Isi halaman → berubah sesuai menu yang dipilih */}
        <main className="flex-1 max-w-5xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 text-center shadow-inner">
          © Balqis Demes Piscesa {new Date().getFullYear()}
          {/* {new Date().getFullYear()} → otomatis menampilkan tahun sekarang */}
        </footer>
      </body>
    </html>
  );
}
