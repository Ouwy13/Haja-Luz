import { useState } from 'react';
import { CartProvider } from './contexts/CartContext';
import CartDrawer from './components/CartDrawer';
import FlyingAnimations from './components/FlyingAnimations';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';

import BestSellers from './sections/BestSellers';
import TopProducts from './sections/TopProducts';
import CategoryShowcase from './sections/CategoryShowcase';
import AboutStore from './sections/AboutStore';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import SideProgress from './components/SideProgress';
import SplashScreen from './components/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <CartProvider>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      <div className={`min-h-screen bg-[#f3f4f6] text-slate-800 font-sans selection:bg-[#1C2978] selection:text-white pb-16 md:pb-0 ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <Header />
        <HeroBanner />
        
        <main className="w-full max-w-[1240px] mx-auto min-h-screen relative pt-2 md:pt-6 px-0 md:px-4">

          <BestSellers />
          <TopProducts />
          <CategoryShowcase />
        </main>

        <AboutStore />
        
        <Footer />
        
        <div className="md:hidden">
          <BottomNavigation />
        </div>
        <CartDrawer />
        <FlyingAnimations />
        <WhatsAppFloatingButton />
        <SideProgress />
      </div>
    </CartProvider>
  )
}

export default App;

