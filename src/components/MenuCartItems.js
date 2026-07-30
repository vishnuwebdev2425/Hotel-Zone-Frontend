import { useDispatch } from "react-redux";
// NOTE: adjust this import + action names to match your actual cart slice.
// I'm assuming a standard Redux Toolkit slice exporting `removeFromCart(id)`.
import { deleteItem } from "../utils/Cart";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const typeStyles = {
  veg: { label: "Veg", dot: "bg-emerald-500" },
  "Non-veg": { label: "Non-veg", dot: "bg-red-500" },
  Dessert: { label: "Dessert", dot: "bg-[#B08D57]" },
  "Cool-drinks": { label: "Cool drinks", dot: "bg-blue-500" },
};

const MenuCartItems = ({ data }) => {
  const dispatch = useDispatch();
  const { id, itemname, itemurl, price, itemtype, register } = data;
  const type = typeStyles[itemtype];

  const handleRemove = () => {
    
    dispatch(deleteItem(id));
  };

  return (
    <div className="flex items-center gap-4 bg-white border border-[#0F2A22]/10 rounded-md p-4">
      {/* Thumbnail */}
      <div className="h-20 w-20 shrink-0 rounded-sm overflow-hidden bg-[#0F2A22]/5 flex items-center justify-center">
        {itemurl ? (
          <img
            src={itemurl}
            alt={itemname}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <span className="font-['Inter'] text-[10px] text-[#0F2A22]/35 text-center px-1">
            No image
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {type && <span className={`h-2 w-2 rounded-full ${type.dot}`} />}
          <span className="font-['Inter'] text-[11px] uppercase tracking-wide text-[#0F2A22]/45">
            {type ? type.label : itemtype}
          </span>
        </div>
        <h3 className="font-['Cormorant_Garamond',serif] text-lg text-[#0F2A22] truncate">
          {itemname}
        </h3>
        {register?.hotalname && (
          <p className="font-['Inter'] text-xs text-[#0F2A22]/40 truncate">
            {register.hotalname}
          </p>
        )}
      </div>

      {/* Price + remove */}
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="font-['Inter'] text-base font-semibold text-[#0F2A22]">
          ₹{price}
        </span>
        <button
          onClick={handleRemove}
          className="font-['Inter'] text-xs font-medium text-red-600/80 hover:text-red-700 hover:underline transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default MenuCartItems;
