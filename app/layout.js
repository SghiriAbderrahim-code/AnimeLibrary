import Navbar from '@/components/Navbar';
import '../styles/globals.css';



export const metadata = {
  title: "AnimeLibrary",
  description: "A wide library of anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className='bg-[--bg-color]'>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
