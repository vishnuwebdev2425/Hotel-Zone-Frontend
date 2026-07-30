import { useState } from "react";

import Cookie from "js-cookie";

/**
 * Uses the same fonts as the rest of the app — make sure this is in your
 * index.html:
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
 */

const typeStyles = {
  veg: { label: "Veg", dot: "bg-green-600" },
  "Non-veg": { label: "Non-veg", dot: "bg-red-600" },
  Dessert: { label: "Dessert", dot: "bg-[#D4AF7A]" },
  "Cool-drinks": { label: "Cool drinks", dot: "bg-blue-500" },
};

const AddMenu = () => {
  const [data, setData] = useState({
    itemname: "",
    itemtype: "",
    imgurl: "",
    price: "",
  });

  const changeItemType = (e) => {
    setData({
      ...data,
      itemtype: e.target.value,
    });
  };

  const changename = (e) => {
    setData({
      ...data,
      itemname: e.target.value,
    });
  };
  const changeimgurl = (e) => {
    setData({
      ...data,
      imgurl: e.target.value,
    });
  };

  const changeprice = (e) => {
    setData({
      ...data,
      price: e.target.value,
    });
  };
  const cookie=Cookie.get("jwttoken");

  const callfinalfunction = async(e) => {
    e.preventDefault();
    const newObj = {
      itemname: data.itemname,
      itemtype: data.itemtype,
      itemurl: data.imgurl,
      price: data.price,
    };
   

    setData({
      itemname: "",
      itemtype: "",
      imgurl: "",
      price: "",
    });

    const url = "http://localhost:8080/api/restaurants/addmenuitem";

    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${cookie}`
        },
        body:JSON.stringify(newObj)
    }

    const result=await fetch(url,options);
    if(result.ok==true){
        alert("Menu Added SuccessFully");
    }else{
        alert("Something Went Wrong");
    }

   
  };

  const preview = typeStyles[data.itemtype];

  return (
    <div className="bg-[#FAF7F1] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] uppercase text-[#B08D57]">
          Menu
        </span>
        <h1 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl text-[#0F2A22] mt-3 mb-10">
          Add a menu item
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* Form */}
          <div className="bg-white border border-[#0F2A22]/10 rounded-md p-8">
            <form onSubmit={callfinalfunction} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="menu"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Menu item name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Paneer Butter Masala"
                  id="menu"
                  name="menu"
                  required
                  onChange={changename}
                  value={data.itemname}
                  className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="itemtype"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Item type
                </label>
                <select
                  id="itemtype"
                  name="itemtype"
                  onChange={changeItemType}
                  required
                  value={data.itemtype}
                  className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="veg">Veg</option>
                  <option value="Non-veg">Non-veg</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Cool-drinks">Cool drinks</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="img"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  id="img"
                  name="img"
                  required
                  onChange={changeimgurl}
                  value={data.imgurl}
                  className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block font-['Inter'] text-xs font-semibold tracking-wide uppercase text-[#0F2A22]/50 mb-2"
                >
                  Price (₹)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 249"
                  id="price"
                  name="price"
                  required
                  onChange={changeprice}
                  value={data.price}
                  className="w-full bg-[#FAF7F1] border border-[#0F2A22]/15 rounded-sm px-4 py-3 text-sm text-[#0F2A22] placeholder:text-[#0F2A22]/35 focus:outline-none focus:border-[#B08D57] focus:ring-1 focus:ring-[#B08D57] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full lg:w-auto lg:self-start bg-[#0F2A22] text-[#F3EFE6] text-sm font-semibold tracking-wide px-8 py-3 rounded-sm hover:bg-[#0F2A22]/90 transition-colors"
              >
                Add item
              </button>
            </form>
          </div>

          {/* Live preview */}
          <div className="lg:sticky lg:top-10">
            <p className="font-['Inter'] text-xs font-semibold tracking-[0.15em] uppercase text-[#0F2A22]/40 mb-3">
              Live preview
            </p>
            <div className="bg-white border border-[#0F2A22]/10 rounded-md overflow-hidden">
              <div className="aspect-[4/3] bg-[#0F2A22]/5 flex items-center justify-center overflow-hidden">
                {data.imgurl ? (
                  <img
                    src={data.imgurl}
                    alt={data.itemname || "Menu item preview"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="font-['Inter'] text-xs text-[#0F2A22]/35">
                    Image preview appears here
                  </span>
                )}
              </div>

              <div className="p-6">
                {preview && (
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${preview.dot}`}
                    />
                    <span className="font-['Inter'] text-xs uppercase tracking-wide text-[#0F2A22]/50">
                      {preview.label}
                    </span>
                  </div>
                )}

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#0F2A22] mb-2">
                  {data.itemname || "Item name"}
                </h3>

                <p className="font-['Inter'] text-lg font-semibold text-[#B08D57]">
                  {data.price ? `₹${data.price}` : "₹—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
