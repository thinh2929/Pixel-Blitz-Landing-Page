import './App.css'
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DownloadPage from './pages/DownLoadPage';

function App() {
  return (
    <div className="relative min-h-screen bg-[#020617]">
      
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-500/10 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/download' element={<DownloadPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
