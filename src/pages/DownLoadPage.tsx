import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
  const [isPreparing, setIsPreparing] = useState(true);
  const [progress, setProgress] = useState(0);

  // Giả lập quá trình tạo link tải an toàn
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPreparing(false);
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const gameInfo = {
    name: "Pixel Blitz",
    version: "v1.0.26 (Latest)",
    size: "145 MB",
    requirement: "Android 8.0+",
    developer: "Blue Moon",
    updated: "08/04/2026"
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full bg-[#111827] border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-green-400 to-green-600 p-1 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <div className="overflow-hidden w-full h-full bg-[#0f172a] rounded-[1.4rem] flex items-center justify-center text-4xl font-black italic text-green-500">
              <img src="/game-logo.png" alt="logo" className='rounded'/>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-2">
              {gameInfo.name} <span className="text-green-500">APK</span>
            </h1>
            <p className="text-gray-400 font-medium">Bản game tốc độ cao, an toàn và đã qua kiểm duyệt.</p>
          </div>
        </div>

        {/* Download Action Section */}
        <div className="bg-[#1e293b]/50 rounded-3xl p-8 border border-green-500/20 mb-8">
          {isPreparing ? (
            <div className="space-y-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400 italic">Đang tạo đường dẫn tải an toàn...</p>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,197,94,1)]" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 italic">Vui lòng chờ trong giây lát...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <a 
                href="https://github.com/thinh2929/Pixel-Blitz-Landing-Page/releases/download/v1.0.0/PixelBlitz_260408_1.apk" 
                download
                className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-[#0f172a] px-12 py-5 rounded-2xl font-black uppercase text-lg tracking-widest shadow-[0_10px_40px_rgba(34,197,94,0.4)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Tải Xuống Ngay ({gameInfo.size})
              </a>
              <p className="mt-4 text-xs text-gray-500">Dung lượng: {gameInfo.size} | MD5: d41d8cd98f00b204e9800998ecf8427e</p>
            </div>
          )}
        </div>

        {/* Technical Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Phiên bản', value: gameInfo.version },
            { label: 'Yêu cầu', value: gameInfo.requirement },
            { label: 'Cập nhật', value: gameInfo.updated },
            { label: 'Phát triển', value: gameInfo.developer },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center">
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-1 tracking-widest">{stat.label}</p>
              <p className="text-sm font-bold text-white uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <Link to="/" className="mt-8 text-gray-500 hover:text-green-500 font-bold uppercase text-xs tracking-widest transition-colors flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại trang chủ
      </Link>
    </div>
  );
};

export default DownloadPage;