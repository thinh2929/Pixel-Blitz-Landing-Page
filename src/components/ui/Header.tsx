import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f172a] backdrop-blur-md bg-[#0f172a]/80 border-b border-green-500/30 sticky top-0 z-50 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Bên trái: Logo & Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo Game */}
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 p-0.5 transform group-hover:rotate-12 transition-all duration-300">
                <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Thay src bằng link logo game của bạn */}
                  <img
                    src="/game-logo.png"
                    alt="Logo"
                    className="w-11 h-11 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white italic tracking-tighter uppercase leading-none">
                  PIXEL
                  <span className="text-green-500 underline decoration-green-500/50">
                    BLITZ
                  </span>
                </span>
                <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase">
                  Tower Defense
                </span>
              </div>
            </div>
          </Link>
          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* <h1 className="cursor-pointer px-4 py-2 text-gray-400 hover:text-green-400 font-bold uppercase text-xs tracking-wider hover:bg-green-500/5 rounded-md transition-all duration-200">
              Thông tin
            </h1> */}
            <Link to={"/download"}>
              <h1 className="cursor-pointer px-4 py-2 text-gray-400 hover:text-green-400 font-bold uppercase text-xs tracking-wider hover:bg-green-500/5 rounded-md transition-all duration-200">
                Download
              </h1>
            </Link>
          </nav>
        </div>

        {/* Bên phải: Nút Đăng nhập */}
        <div className="flex items-center space-x-4">
          <button className="hidden sm:block text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            Đăng ký
          </button>
          <button className="px-6 py-2 bg-green-500 hover:bg-green-400 text-[#0f172a] font-black uppercase text-xs tracking-widest rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transform hover:-translate-y-0.5 transition-all">
            Đăng nhập
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1e293b] border-t border-green-500/20 p-4">
          <h1 className="block py-3 text-gray-300 font-bold uppercase text-sm border-b border-white/5 last:border-none">
            Thông Tin
          </h1>
        </div>
      )}
    </header>
  );
};

export default Header;
