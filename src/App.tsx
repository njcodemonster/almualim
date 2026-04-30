import React from 'react';
import { 
  Building2, 
  Plane, 
  Bus, 
  MonitorPlay, 
  Map, 
  FileText, 
  MapPin, 
  Phone, 
  Calendar,
  Youtube,
  Facebook,
  Instagram,
  MoonStar
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 font-sans text-neutral-800 pb-12 sm:pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl relative border-t-8 border-blue-950 ring-1 ring-neutral-200">
        
        {/* Pattern Background Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* -- Header Section -- */}
        <div className="relative pt-8 pb-10 px-6 sm:px-12 flex flex-col items-center">
          
          {/* Top Left Badge */}
          <div className="absolute top-0 left-0 flex">
            <div className="bg-blue-950 text-white font-bold text-sm sm:text-base px-4 py-3 rounded-br-2xl flex flex-col items-center leading-tight">
              <span>Travel</span>
              <span>Date</span>
            </div>
            <div className="bg-yellow-400 text-neutral-900 font-black text-2xl sm:text-4xl px-6 py-2 rounded-br-2xl flex items-center shadow-md">
              30 November
            </div>
          </div>

          <div className="mt-16 sm:mt-12 text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <MoonStar className="w-10 h-10 text-blue-950" strokeWidth={1.5} />
              <h1 className="text-6xl sm:text-8xl font-black text-blue-950 tracking-tight uppercase">
                Umrah
              </h1>
              <MoonStar className="w-10 h-10 text-blue-950 hidden sm:block" strokeWidth={1.5} />
            </div>
            <div className="bg-blue-950 text-white inline-block px-6 py-1 rounded-full text-lg sm:text-2xl font-bold tracking-widest shadow-inner relative -top-3">
              with MUALLIM
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            <div className="bg-yellow-400 text-blue-950 font-black text-3xl sm:text-4xl px-4 py-1 rounded-lg">
              20 DAYS
            </div>
            <div className="text-red-600 font-black text-3xl sm:text-4xl uppercase">
              Economy Package
            </div>
          </div>
        </div>

        {/* -- Main Pricing & Hotels Section -- */}
        <div className="px-6 sm:px-12 pb-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Sharing Bed Price */}
            <div className="col-span-1 lg:col-span-4 bg-yellow-400 rounded-2xl flex flex-col justify-center items-center p-8 shadow-lg transform transition hover:scale-[1.02]">
              <span className="text-blue-950 font-bold text-2xl uppercase tracking-wider mb-2">Sharing Bed</span>
              <div className="flex items-start">
                <span className="text-neutral-900 font-bold text-2xl mt-4 mr-1">Rs.</span>
                <span className="text-neutral-900 font-black text-6xl tracking-tighter">245,000</span>
              </div>
            </div>

            {/* Right Column: Hotels & Pricing Tiers */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-4">
              
              {/* Hotels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-neutral-100 rounded-2xl p-5 shadow-sm text-center relative overflow-hidden group">
                  <div className="absolute top-0 w-full h-1 bg-red-600 left-0"></div>
                  <Building2 className="w-8 h-8 text-neutral-300 mx-auto mb-2 group-hover:text-red-600 transition-colors" />
                  <p className="text-neutral-500 font-bold text-sm tracking-widest uppercase mb-1">Makkah Hotel</p>
                  <h3 className="text-red-600 font-black text-2xl leading-tight">Manasik Al Bait</h3>
                  <p className="text-neutral-600 text-sm mt-1 font-medium">(Shuttle Service)</p>
                </div>
                <div className="bg-white border-2 border-neutral-100 rounded-2xl p-5 shadow-sm text-center relative overflow-hidden group">
                  <div className="absolute top-0 w-full h-1 bg-red-600 left-0"></div>
                  <Building2 className="w-8 h-8 text-neutral-300 mx-auto mb-2 group-hover:text-red-600 transition-colors" />
                  <p className="text-neutral-500 font-bold text-sm tracking-widest uppercase mb-1">Madinah Hotel</p>
                  <h3 className="text-red-600 font-black text-2xl leading-tight">Shaza Al Munawara</h3>
                  <p className="text-neutral-600 text-sm mt-1 font-medium">(800 Meter)</p>
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="bg-blue-950 rounded-2xl overflow-hidden flex flex-col sm:flex-row text-center shadow-lg divide-y sm:divide-y-0 sm:divide-x divide-blue-800">
                <div className="flex-1 py-4 px-2">
                  <p className="text-blue-200 font-semibold text-lg mb-1">Quad</p>
                  <p className="text-white font-bold text-2xl"><span className="text-sm">Rs.</span> 255,000</p>
                </div>
                <div className="flex-1 py-4 px-2">
                  <p className="text-blue-200 font-semibold text-lg mb-1">Triple</p>
                  <p className="text-white font-bold text-2xl"><span className="text-sm">Rs.</span> 270,000</p>
                </div>
                <div className="flex-1 py-4 px-2 bg-blue-900 bg-opacity-50">
                  <p className="text-blue-200 font-semibold text-lg mb-1">Double</p>
                  <p className="text-white font-bold text-2xl"><span className="text-sm">Rs.</span> 303,000</p>
                </div>
              </div>

            </div>
          </div>

          {/* Warning/Child Info Banner */}
          <div className="mt-6 bg-yellow-400 rounded-xl py-3 px-6 flex flex-col sm:flex-row items-center justify-between shadow-sm font-bold">
            <span className="text-blue-950 text-center sm:text-left text-sm sm:text-base">
              Child Package Costs will be Same as Adults
            </span>
            <div className="bg-neutral-900 text-white px-4 py-1 rounded-md mt-2 sm:mt-0 uppercase tracking-widest text-sm">
              Infant <span className="text-yellow-400">80,000</span>
            </div>
          </div>
        </div>

        {/* -- Flights Section -- */}
        <div className="px-6 sm:px-12 pb-8 relative z-10">
          <div className="bg-white border text-blue-950 border-emerald-100 rounded-2xl shadow-sm p-1 sm:p-2 sm:px-4">
            <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              
              {/* Airlines Logo */}
              <div className="p-4 md:w-1/4 flex flex-col items-center justify-center">
                <div className="flex items-center text-emerald-800 gap-2">
                  <Plane className="w-8 h-8 fill-emerald-800 shadow-emerald-500/20" strokeWidth={1} />
                  <div>
                    <div className="font-bold text-right leading-none relative top-1">السعودية</div>
                    <div className="font-black text-xl tracking-tighter uppercase">Saudia</div>
                  </div>
                </div>
              </div>

              {/* Flights Table */}
              <div className="p-4 md:w-3/4 w-full">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center sm:text-left text-sm sm:text-base font-bold">
                  {/* Row 1 */}
                  <div className="text-neutral-500 uppercase tracking-wider">SV-705</div>
                  <div className="text-blue-950">KHI-JED</div>
                  <div className="text-emerald-700">30 November</div>
                  <div className="flex justify-between items-center bg-neutral-100 px-2 rounded font-mono text-neutral-600"><span className="text-emerald-800">0305</span> <span>0540</span></div>
                  
                  {/* Row 2 */}
                  <div className="text-neutral-500 uppercase tracking-wider">SV-704</div>
                  <div className="text-blue-950">JED-KHI</div>
                  <div className="text-emerald-700">20 December</div>
                  <div className="flex justify-between items-center bg-neutral-100 px-2 rounded font-mono text-neutral-600"><span className="text-emerald-800">1935</span> <span>0120</span></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* -- Inclusions Section -- */}
        <div className="bg-neutral-50 py-10 px-6 sm:px-12 border-y border-neutral-200 relative z-10">
          <div className="flex justify-center mb-8">
            <span className="bg-blue-950 text-white font-bold px-8 py-2 rounded-full uppercase tracking-widest shadow-md">
              Inclusion
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <FileText className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Umrah<br/>Visa</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <Building2 className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Hotel<br/>Booking</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <Plane className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Flight<br/>Tickets</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <Bus className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Intercity<br/>Transfers</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <MonitorPlay className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Umrah Training<br/><span className="text-[10px] text-neutral-500 capitalize font-medium">(MultiMedia)</span></p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm border border-neutral-100 mb-3 group-hover:scale-110 group-hover:border-blue-300 transition">
                <Map className="w-7 h-7 text-yellow-500" />
              </div>
              <p className="font-bold text-xs uppercase text-blue-950 leading-tight">Zyarat<br/><span className="text-[10px] text-neutral-500 capitalize font-medium">Makkah, Madinah</span></p>
            </div>
          </div>
        </div>

        {/* -- Footer / Contact Section -- */}
        <div className="bg-white pt-8 pb-4 relative z-10">
          
          {/* Social Links Mini-Header */}
          <div className="flex justify-end px-6 sm:px-12 mb-4">
            <div className="flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200 shadow-sm cursor-pointer hover:bg-neutral-200 transition">
               <Facebook className="w-4 h-4 text-blue-600" />
               <Youtube className="w-4 h-4 text-red-600" />
               <Instagram className="w-4 h-4 text-pink-600" />
               <span className="font-semibold text-sm text-neutral-800 ml-1">almuallimtravels</span>
            </div>
          </div>

          {/* Brand Name */}
          <div className="text-center mb-8 px-4">
             <h2 className="text-5xl sm:text-6xl font-black text-neutral-800 tracking-tight uppercase flex justify-center items-center gap-3">
               <span className="text-green-700 bg-emerald-50 rounded-full p-2 hidden sm:block">
                 <MoonStar className="w-10 h-10" />
               </span>
               <span className="text-blue-950">Almuallim</span> Travels
             </h2>
          </div>

          {/* Address & Number Block */}
          <div className="mx-4 sm:mx-12 mb-8 bg-blue-950 text-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              
              {/* Address */}
              <div className="w-full md:w-auto flex-1 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-blue-800">
                <MapPin className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-blue-100 font-medium text-sm sm:text-base leading-snug">
                  RJ Mall, Office # 48-B, 4th Floor,<br/>
                  Main Rashid Minhas Road Karachi
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="w-full md:w-auto p-6 flex flex-col justify-center items-center text-center">
                <Phone className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="flex flex-wrap justify-center gap-3 text-lg sm:text-2xl font-black tracking-wide">
                  <span className="hover:text-yellow-400 cursor-pointer transition">0321-3110100</span>
                  <span className="text-blue-500 hidden sm:inline">,</span>
                  <span className="hover:text-yellow-400 cursor-pointer transition">0342-8011000</span>
                  <span className="text-blue-500 hidden xl:inline">,</span>
                  <span className="hover:text-yellow-400 cursor-pointer transition">0311-2774836</span>
                </div>
              </div>

            </div>
          </div>

          {/* Deadline Banner */}
          <div className="bg-red-600 text-white text-center py-4 px-4 shadow-inner shadow-red-800/30">
            <p className="text-xl sm:text-2xl font-bold tracking-wide">
              The booking deadline is <span className="font-black underline decoration-yellow-400 underline-offset-4 mx-1">12th November</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

