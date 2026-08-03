import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/Cart";
import { Link } from "react-router-dom";



/**
 * MenuCartItem Component
 * Renders individual menu items with luxury fallback images and hotel details.
 */
const MenuCartItem = ({ data }) => {
  const { id, itemname, itemurl, price, itemtype, register } = data;
  const [imageError, setImageError] = useState(false);

  // Fallback high-res image if the provided URL is empty, broken, or null
  const defaultFallbackImg =
    "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80";

  const isNonVeg = itemtype?.toLowerCase().includes("non");


  const Cart=useSelector((store)=>store.cart.items);

  const dispatch=useDispatch();

  const callanotherfunction=(data)=>{
    alert("Item Added to the Cart");
    dispatch(addItem(data))
  

  }

  return (
    <div className="group relative bg-white rounded-2xl border border-[#0F2A22]/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Top Image Section */}
      <div className="relative h-52 w-full overflow-hidden bg-[#0F2A22]/5">
        <img
          src={!imageError && itemurl ? itemurl : defaultFallbackImg}
          alt={itemname || "Menu Item"}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A22]/60 via-transparent to-transparent" />

        {/* Item Type Badge (Veg / Non-Veg) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <span
            className={`w-2 h-2 rounded-full ${
              isNonVeg ? "bg-red-600" : "bg-emerald-600"
            }`}
          />
          <span className="text-[10px] font-bold tracking-wider uppercase text-[#0F2A22]">
            {itemtype || "Chef Special"}
          </span>
        </div>

        {/* Hotel Name Tag */}
        {register?.hotalname && (
          <div className="absolute bottom-3 left-3 bg-[#0F2A22]/80 backdrop-blur-md text-[#FAF7F1] px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1">
            <span>🏨</span>
            <span className="truncate max-w-[160px]">{register.hotalname}</span>
          </div>
        )}
      </div>

      {/* Card Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#0F2A22] leading-tight">
              {itemname || "Signature Dish"}
            </h3>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold text-[#B08D57] whitespace-nowrap">
              ₹{price}
            </span>
          </div>

          <p className="text-xs text-[#0F2A22]/60 leading-relaxed line-clamp-2 mb-4 font-light">
            Prepared fresh by {register?.hotalname || "our partner kitchen"}{" "}
            {register?.address ? `in ${register.address}` : ""}.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#0F2A22]/5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F2A22]/40">
            ID: #{id}
          </span>
          
            <button
              className="bg-[#0F2A22] hover:bg-[#163a30] text-[#F3EFE6] text-xs font-semibold px-4 py-2.5 rounded-lg active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
              onClick={() => callanotherfunction(data)}
            >
              <span>Add to Order</span>
              <span className="text-sm">+</span>
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default MenuCartItem;
