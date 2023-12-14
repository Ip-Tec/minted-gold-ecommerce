// page/_app.js
import '@/styles/globals.css';
import { CartContextProvider } from '@/components/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <div className="bg-gray-100">
        <Component {...pageProps} />
      </div>
    </CartContextProvider>
  );
}
