import React, { useState } from 'react';

export default function Products_Interactive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [cartCount, setCartCount] = useState(0);
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Apex Pro Wireless Noise-Canceling Headphones',
      category: 'Audio & Headphones',
      price: 299.00,
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      badge: 'Bestseller',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'Nexus Horizon Ultra-Slim 4K Monitor (27")',
      category: 'Computing & Tech',
      price: 449.00,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
      badge: 'New Release',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Vortex Mechanical Wireless Keyboard',
      category: 'Computing & Tech',
      price: 159.00,
      rating: 4.7,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800',
      badge: null,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Pulse Active Smart Fitness Watch Series 5',
      category: 'Smart Wearables',
      price: 249.00,
      rating: 4.6,
      reviews: 310,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
      badge: 'Popular',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'AeroVue Professional 4K Camera Drone',
      category: 'Cameras & Drones',
      price: 799.00,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800',
      badge: 'Limited Stock',
      isFavorite: false,
    },
    {
      id: 6,
      name: 'SonicWave True Wireless Earbuds Pro',
      category: 'Audio & Headphones',
      price: 179.00,
      rating: 4.5,
      reviews: 184,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
      badge: null,
      isFavorite: false,
    },
  ]);

  const categories = [
    'All Products',
    'Audio & Headphones',
    'Smart Wearables',
    'Computing & Tech',
    'Cameras & Drones',
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setProducts(products.map(p => p.id === id ? { ...p, isFavorite: !p.isFavorite } : p));
  };

  const addToCart = (e) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm shadow-indigo-200">
              E
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Elektron</span>
          </div>

          {/* Search Bar with State */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search high-end electronics, gear, accessories..."
                className="w-full pl-10 pr-4 py-2 bg-slate-100/70 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 text-xs font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs hidden sm:flex">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Explore Electronics</h1>
          <p className="text-sm text-slate-500 mt-1">Discover premium gear, precision audio, and professional hardware.</p>
        </div>

        {/* Categories Section with Interactive Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all shadow-xs ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-indigo-100'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200/80 rounded-2xl py-16 text-center shadow-xs">
            <p className="text-slate-600 font-medium text-sm">No products found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}
              className="mt-3 px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-xl hover:bg-indigo-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group relative"
              >
                {/* Image & Favorite Button Container */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-lg border border-slate-200/50 shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Interactive Favorite Action Button */}
                  <button
                    onClick={(e) => toggleFavorite(product.id, e)}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-xl backdrop-blur-xs border border-slate-200/50 flex items-center justify-center shadow-xs transition-colors ${
                      product.isFavorite 
                        ? 'bg-rose-50 text-rose-500 border-rose-200' 
                        : 'bg-white/90 text-slate-400 hover:text-rose-500'
                    }`}
                    title="Toggle Favorite"
                  >
                    <svg className={`w-4 h-4 ${product.isFavorite ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                      <span>{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-slate-700 font-semibold">{product.rating}</span>
                        <span className="text-slate-400 font-normal">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Price</span>
                      <span className="text-base font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={addToCart}
                      className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 active:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}