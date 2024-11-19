import Link from 'next/link'
const ErrPage = () => (
  
  <main class="h-screen w-full flex flex-col justify-center items-center bg-[--bg-color]">
    <h1 class="text-9xl font-extrabold text-[--first-gray] tracking-widest">404</h1>
    <div class="bg-[--theme-color] px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button class="mt-5">
        <a
          class="relative inline-block text-sm font-medium text-[--theme-color] group active:text-[--theme-color] focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[--theme-color] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>
  
          <span class="relative block px-8 py-3 bg-[--bg-color] border border-current">
            <Link href="/">Go Home</Link>
          </span>
        </a>
      </button>
  </main>
  );
  
  export default ErrPage;
  