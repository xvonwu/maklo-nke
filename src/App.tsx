import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickCartDrawer } from './components/QuickCartDrawer';
import { LeBronHeroScreen } from './components/screens/LeBronHeroScreen';
import { CollectionsScreen } from './components/screens/CollectionsScreen';
import { ShoppingBagScreen } from './components/screens/ShoppingBagScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { DiscountScreen } from './components/screens/DiscountScreen';
import { SearchModal } from './components/modals/SearchModal';
import { BookingModal } from './components/modals/BookingModal';
import { AccountModal } from './components/modals/AccountModal';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { INITIAL_CART_ITEMS, Product } from './data/products';
import {
  CartItem,
  addItem,
  updateQty,
  removeItem,
  calculateOrderSummary,
} from './utils/cartStore';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'lebron' | 'collections' | 'discount' | 'about' | 'bag'
  >('lebron');
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [toast, setToast] = useState<{ title: string; sub: string; visible: boolean }>({
    title: '',
    sub: '',
    visible: false,
  });

  const showToast = (title: string, sub: string) => {
    setToast({ title, sub, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2800);
  };

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => addItem(prev, item));
    showToast('Ditambahkan ke Keranjang', `${item.name} (US ${item.size}) added to your bag.`);
  };

  const handleBuyNow = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => addItem(prev, item));
    showToast('Redirecting to Bag', `${item.name} added. Proceeding to checkout.`);
    setTimeout(() => {
      setCurrentScreen('bag');
    }, 400);
  };

  const handleUpdateQty = (id: string | number, size: string | number, delta: number) => {
    setCartItems((prev) => updateQty(prev, id, size, delta));
  };

  const handleRemoveItem = (id: string | number, size: string | number) => {
    setCartItems((prev) => removeItem(prev, id, size));
    showToast('Item Dihapus', 'Siluet sepatu telah dihapus dari tas belanja.');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Tas Dikosongkan', 'Semua item dalam tas belanja telah dihapus.');
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    showToast('Pembayaran Berhasil', 'Pesanan Anda telah diproses untuk pengiriman prioritas.');
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const summary = calculateOrderSummary(cartItems, 'MAKLO10');

  return (
    <div className="min-h-screen flex flex-col w-full relative bg-[#f8f9fa] text-[#191c1d]">
      {/* Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 flex items-center gap-3 bg-white text-zinc-900 px-5 py-3.5 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none border border-zinc-100 ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-[-140%] opacity-0'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-md">
          <i className="fa-solid fa-check"></i>
        </div>
        <div>
          <p className="font-extrabold text-sm leading-tight text-zinc-900">{toast.title}</p>
          <p className="text-xs text-zinc-500 leading-tight mt-0.5">{toast.sub}</p>
        </div>
      </div>

      {/* Top Navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCartDrawer={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        isLebronHero={currentScreen === 'lebron'}
      />

      {/* Main Screen Views */}
      <div className={currentScreen === 'lebron' ? 'w-full' : 'w-full pt-20 flex-1 flex flex-col'}>
        {currentScreen === 'lebron' && (
          <LeBronHeroScreen
            onAddToCart={handleAddToCart}
            onOpenCart={() => setCartDrawerOpen(true)}
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'collections' && (
          <CollectionsScreen
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        )}

        {currentScreen === 'bag' && (
          <ShoppingBagScreen
            items={cartItems}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onAddToCart={handleAddToCart}
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCheckout={() => setCheckoutModalOpen(true)}
            onShowToast={showToast}
          />
        )}

        {currentScreen === 'about' && (
          <AboutScreen
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBookAppointment={() => setBookingModalOpen(true)}
          />
        )}

        {currentScreen === 'discount' && (
          <DiscountScreen
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onShowToast={showToast}
          />
        )}
      </div>

      {/* Shared Footer (except when on LeBron hero, which has its embedded bespoke hero footer) */}
      {currentScreen !== 'lebron' && (
        <Footer
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onShowToast={showToast}
        />
      )}

      {/* Quick Slide-Over Cart Drawer */}
      <QuickCartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onGoToBag={() => {
          setCurrentScreen('bag');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onCheckout={() => {
          setCartDrawerOpen(false);
          setCheckoutModalOpen(true);
        }}
      />

      {/* Modals */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(product: Product) => {
          if (product.isArchival) {
            setCurrentScreen('discount');
          } else {
            setCurrentScreen('collections');
          }
        }}
        onAddToCart={handleAddToCart}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onSuccess={(msg) => showToast('Appointment Confirmed', msg)}
      />

      <AccountModal
        isOpen={accountModalOpen}
        onClose={() => setAccountModalOpen(false)}
        onNavigateToBag={() => setCurrentScreen('bag')}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        items={cartItems}
        total={summary.total}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
