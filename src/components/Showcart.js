import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// NOTE: adjust this import + action name to match your actual cart slice.
// I'm assuming a standard Redux Toolkit slice exporting `clearCart()`.
import { clearItem } from "../utils/Cart";

import MenuCartItems from "./MenuCartItems";
import { Link } from "react-router-dom";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const Showcart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.cart.items);
  const [showPopup, setShowPopup] = useState(false);

  const itemCount = cartData.length;
  const subtotal = cartData.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0,
  );

  const handleClearCart = () => {
    if (itemCount === 0) return;
    const confirmed = window.confirm("Clear all items from your cart?");
    if (confirmed) dispatch(clearItem());
  };

  const callfunction = () => {
    setShowPopup(true);
  };

  const closePopupAndClearCart = () => {
    setShowPopup(false);
    dispatch(clearItem());
  };

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F1] flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <img
            src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg"
            alt="Your cart is empty"
            className="w-48 mx-auto mb-6 opacity-90"
          />
          <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
            Your cart
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl text-[#0F2A22] mt-3 mb-3">
            Nothing here yet
          </h1>
          <p className="text-[#0F2A22]/55 text-sm mb-8">
            Browse the menu and add a dish to get started.
          </p>
          <Link to="/admin/checkmenu">
            <button
              type="button"
              className="inline-block bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-7 py-3 rounded-sm hover:bg-[#0F2A22]/90 transition-colors"
            >
              Browse menu
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F1]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Your cart
            </span>
            <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#0F2A22] mt-2">
              {itemCount} {itemCount === 1 ? "item" : "items"} ready to order
            </h1>
          </div>
          <button
            onClick={handleClearCart}
            className="font-['Inter'] text-xs font-medium text-red-600/80 hover:text-red-700 border border-red-600/25 hover:border-red-600/50 rounded-sm px-4 py-2.5 transition-colors"
          >
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
          {/* Cart items */}
          <div className="flex flex-col gap-3">
            {cartData.map((each, index) => (
              <MenuCartItems data={each} key={each.id ?? index} />
            ))}
          </div>

          {/* Order summary */}
          <div className="bg-white border border-[#0F2A22]/10 rounded-md p-7 lg:sticky lg:top-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-xl text-[#0F2A22] mb-6">
              Order summary
            </h2>

            <div className="flex flex-col gap-3 mb-6 font-['Inter'] text-sm">
              <div className="flex justify-between text-[#0F2A22]/60">
                <span>Items ({itemCount})</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#0F2A22]/60">
                <span>Taxes &amp; charges</span>
                <span className="text-[#0F2A22]/40">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-[#0F2A22]/10 mb-7">
              <span className="font-['Inter'] text-sm font-semibold text-[#0F2A22]">
                Subtotal
              </span>
              <span className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22]">
                ₹{subtotal}
              </span>
            </div>

            <button
              onClick={callfunction}
              className="w-full bg-[#D4AF7A] text-[#0F2A22] text-sm font-semibold tracking-wide px-6 py-3.5 rounded-sm hover:bg-[#c49f68] transition-colors"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>

      {/* Beautiful confirmation popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0F2A22]/60 backdrop-blur-sm"
            onClick={closePopupAndClearCart}
          />

          {/* Card */}
          <div className="relative w-full max-w-sm bg-[#FAF7F1] rounded-lg shadow-2xl p-8 text-center animate-[fadeIn_0.2s_ease-out]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl mx-auto mb-5">
              ✓
            </span>
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
              Order sent
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mt-3 mb-3">
              Your waiter's on the way
            </h2>
            <p className="text-[#0F2A22]/60 text-sm mb-7">
              We've sent your order — {itemCount}{" "}
              {itemCount === 1 ? "item" : "items"}, ₹{subtotal} — straight to
              your table's waiter. They'll be with you shortly to confirm and
              take care of everything.
            </p>
            <button
              onClick={closePopupAndClearCart}
              className="w-full bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold rounded-sm px-5 py-3 hover:bg-[#0F2A22]/90 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcart;
