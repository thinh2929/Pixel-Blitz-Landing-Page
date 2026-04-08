import { Link } from 'react-router-dom';

// Dữ liệu mẫu (Sau này bạn sẽ gọi từ API)
const MOCK_GAMES = [
  { id: 'free-fire', name: 'Free Fire', category: 'Hành động', rating: 4.5, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=FF' },
  { id: 'pubg-mobile', name: 'PUBG Mobile', category: 'Bắn súng', rating: 4.8, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=PUBG' },
  { id: 'roblox', name: 'Roblox', category: 'Phiêu lưu', rating: 4.2, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=RB' },
  { id: 'minecraft', name: 'Minecraft', category: 'Sáng tạo', rating: 4.9, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=MC' },
  { id: 'genshin-impact', name: 'Genshin Impact', category: 'RPG', rating: 4.7, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=GI' },
  { id: 'clash-of-clans', name: 'Clash of Clans', category: 'Chiến thuật', rating: 4.6, icon: 'https://placehold.co/150x150/0f172a/22c55e?text=COC' },
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner Section */}
      <section className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-green-600 to-green-900 h-[60vh] flex items-center px-12 shadow-[0_20px_50px_rgba(34,197,94,0.3)]">
        <div className="max-w-lg z-10">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Mới cập nhật</span>
          <h1 className="text-5xl font-black uppercase italic mb-4 leading-tight">PIXEL BLITZ <br/></h1>
          <p className="text-green-100 mb-6 font-medium">Game thủ thành 2026.</p>
          <Link to={"/download"}><button className="bg-white text-green-700 px-8 py-3 rounded-full font-black uppercase text-sm hover:scale-105 transition-transform cursor-pointer">Chơi ngay</button></Link>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://placehold.co/600x400/064e3b/white?text=Game+Art')] bg-cover bg-center opacity-50 skew-x-[-10deg] translate-x-10"></div>
      </section>
    </div>
  );
};

export default HomePage;