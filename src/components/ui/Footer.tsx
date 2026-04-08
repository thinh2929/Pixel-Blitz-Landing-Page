import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0b1222] border-t border-white/5 pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Hiệu ứng ánh sáng xanh ở góc footer */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Cột 1: Thương hiệu */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <svg className="w-6 h-6 text-[#0f172a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <span className="text-xl font-black italic tracking-tighter uppercase text-white">
                APK<span className="text-green-500">GAMING</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cổng thông tin tải game và ứng dụng APK/Mod hàng đầu. Chúng tôi cung cấp các phiên bản an toàn, tốc độ cao và hoàn toàn miễn phí cho game thủ toàn cầu.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
                <a href="https://github.com/BlueMoon-23/Pixel-Blitz" target='_blank' className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-green-500 transition-colors group">
                  <img src="/github-l.png" alt="Github" />
                </a>
            </div>
          </div>

          {/* Cột 2: Điều hướng nhanh */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 border-b border-green-500/50 pb-2 inline-block">Khám phá</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Trang chủ</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Tải game</Link></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ & Chính sách */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 border-b border-green-500/50 pb-2 inline-block">Thông tin</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Liên hệ bản quyền</a></li>
            </ul>
          </div>

          {/* Cột 4: Newsletter/Đăng ký nhận tin */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6 border-b border-green-500/50 pb-2 inline-block">Bản tin APK</h4>
            <p className="text-gray-400 text-xs mb-4">Nhận thông báo khi có bản Mod Pixel Blitz mới nhất.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-green-500 transition-all"
              />
              <button className="absolute right-2 top-2 bg-green-500 hover:bg-green-400 text-[#0f172a] px-3 py-1.5 rounded-lg font-black text-[10px] uppercase transition-all">
                Gửi
              </button>
            </form>
          </div>
        </div>

        {/* Bản quyền và Disclaimer */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Pixel Blitz. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-[10px] text-gray-600 italic">Developed for Pixel Blitz Lovers</span>
            <div className="flex items-center text-gray-500 space-x-1">
              <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px]">Gaming is Life</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;