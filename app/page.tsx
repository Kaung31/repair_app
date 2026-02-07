"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Bike, AlertTriangle, BookOpen, PlayCircle, CheckCircle2, TrendingUp, Wrench } from 'lucide-react';

export default function HomePage() {
  const [search, setSearch] = useState("");

  const models = [
    { id: 'pure-air', name: 'Pure Air', color: 'bg-blue-50 text-blue-600', guides: 12 },
    { id: 'pure-pro', name: 'Pure Pro', color: 'bg-purple-50 text-purple-600', guides: 15 },
    { id: 'advance', name: 'Advance', color: 'bg-emerald-50 text-emerald-600', guides: 18 },
    { id: 'air-go', name: 'Air Go', color: 'bg-orange-50 text-orange-600', guides: 10 },
  ];

  const recentRepairs = [
    { title: 'Rear Tyre Puncture', model: 'Pure Air Pro', difficulty: 'Easy', time: '20m', code: null },
    { title: 'Brake Disc Rubbing', model: 'Advance', difficulty: 'Medium', time: '15m', code: null },
    { title: 'E7 Motor Hall Error', model: 'Pure Air', difficulty: 'Hard', time: '1h', code: 'E7' },
    { title: 'E3 Communication Error', model: 'Air Go', difficulty: 'Hard', time: '45m', code: 'E3' }
  ];

  return (
    <div className="p-4 md:p-8">
      {/* TOP SECTION - SEARCH & STATS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-3 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-extrabold text-slate-900 px-1">How can we help?</h1>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search error codes, parts, or symptoms..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-blue-600 p-6 rounded-[2rem] shadow-lg shadow-blue-200 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer">
          <div className="flex justify-between items-start">
            <CheckCircle2 size={28} className="opacity-80" />
            <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full uppercase tracking-wider">Stock</span>
          </div>
          <div>
            <p className="text-3xl font-black">94%</p>
            <p className="text-sm opacity-80 font-medium">Parts Available</p>
          </div>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Wrench size={18} className="text-emerald-500" />
            <p className="text-xs font-bold text-slate-400 uppercase">Total Repairs</p>
          </div>
          <p className="text-2xl font-black text-slate-900">247</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">+12% this week</p>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Bike size={18} className="text-blue-500" />
            <p className="text-xs font-bold text-slate-400 uppercase">Models</p>
          </div>
          <p className="text-2xl font-black text-slate-900">4</p>
          <p className="text-xs text-slate-600 font-semibold mt-1">Active models</p>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={18} className="text-purple-500" />
            <p className="text-xs font-bold text-slate-400 uppercase">Guides</p>
          </div>
          <p className="text-2xl font-black text-slate-900">55</p>
          <p className="text-xs text-slate-600 font-semibold mt-1">Repair procedures</p>
        </div>
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-orange-500" />
            <p className="text-xs font-bold text-slate-400 uppercase">Avg Time</p>
          </div>
          <p className="text-2xl font-black text-slate-900">32min</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">-5min faster</p>
        </div>
      </div>

      {/* MODELS GRID */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Scooter Models</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model) => (
            <Link 
              key={model.id} 
              href={`/models/${model.id}`}
              className="bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 ${model.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Bike size={24} />
              </div>
              <p className="font-bold text-slate-800">{model.name}</p>
              <p className="text-xs text-slate-500 mt-1">{model.guides} Repair Guides</p>
            </Link>
          ))}
        </div>
      </div>

      {/* LOWER CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RECENT REPAIRS */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <AlertTriangle size={22} className="text-orange-500" /> Recent Repair Logs
            </h2>
            <Link href="/guides" className="text-blue-600 text-sm font-bold hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recentRepairs.map((item, i) => (
              <div key={i} className="flex flex-col gap-1 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</span>
                  {item.code && (
                    <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-1 rounded-md">{item.code}</span>
                  )}
                </div>
                <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                  <span>{item.model}</span>
                  <span>{item.difficulty} • {item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO TRAINING */}
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <span className="text-[10px] font-bold bg-blue-500 px-2 py-1 rounded-md uppercase tracking-widest mb-4 inline-block">New Video</span>
            <h3 className="text-2xl font-bold leading-tight mb-2">Advance Gen 2<br/>Stem Adjustment</h3>
            <p className="text-slate-400 text-sm mb-6">Master the new folding mechanism in under 5 minutes.</p>
          </div>
          <Link href="/videos" className="relative z-10 w-full py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-white transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <PlayCircle size={20} /> Watch Now
          </Link>
          <BookOpen className="absolute -right-8 -bottom-8 text-white/5 w-48 h-48 -rotate-12" />
        </div>

      </div>
    </div>
  );
}
