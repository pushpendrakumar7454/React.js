import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User, Sparkles } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Shop", "Categories", "Offers", "Contact"];

  const currentUser=useSelector((state)=>state.auth.currentUser)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartItems=useSelector((state)=>state.cart.cartItems)

  const logout=()=>{
    dispatch(logoutUser())
    alert("User logout")
    navigate('/')
  }


const cartQuantity = cartItems.reduce(
    (total,item)=> total + item.quantity,
    0
);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Sparkles className="text-white w-6 h-6 animate-pulse" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white tracking-wide">
                Sky<span className="text-cyan-400">Cart</span>
              </h2>

              <p className="text-xs text-gray-400">Premium Store</p>
            </div>
          </div>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <a
                key={item}
                href="/"
                className="relative text-gray-300 hover:text-white font-medium transition duration-300 group"
              >
                {item}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}

            <div className="relative flex items-center gap-2">
              <div className="w-9 h-9 bg-cyan-400 relative bottom-0.5 text-white rounded-full flex items-center justify-center">
                <h3 className="uppercase text-xl">{currentUser.name.slice(0,1)}</h3>
              </div>
              <div className="flex flex-col gap-0">
                <h2 className="text-white leading-3">{currentUser.name}</h2>
                <h2 className="text-white">Premium user</h2>
              </div>
            </div>

            {/* Cart */}

            <button onClick={()=>navigate('/cart')} className="relative cursor-pointer w-11 h-11 rounded-xl bg-white/5 hover:bg-cyan-500 transition duration-300 flex items-center justify-center text-white">
              <ShoppingCart size={20} />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              { cartQuantity }
              </span>
            </button>

            {/* Login */}

            <button onClick={logout} className="px-5 py-2 cursor-pointer active:scale-95 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30 flex items-center gap-2">
              <User size={18} />
              logout
            </button>

            {/* Mobile Button */}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[700px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10 p-5">
         

            <div className="flex flex-col gap-2">
              {links.map((item, index) => (
                <a
                  key={item}
                  href="/"
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item}</span>

                  <span className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Buttons */}

            <div className="mt-6 flex gap-3">
              <button className="relative flex-1 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-cyan-500 transition duration-300 flex items-center justify-center">
                <ShoppingCart size={20} />

                <span className="absolute top-2 right-3 w-5 h-5 rounded-full bg-red-500 text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>

              <button onClick={logout} className="flex-[2] h-12 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-cyan-500/20">
                <User size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
