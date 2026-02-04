"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrench, LayoutDashboard, Bike, AlertTriangle, BookOpen, Settings, PlayCircle } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/models', icon: Bike, label: 'Models' },
    { href: '/error-codes', icon: AlertTriangle, label: 'Error Codes' },
    { href: '/guides', icon: BookOpen, label: 'Repair Guides' },
    { href: '/videos', icon: PlayCircle, label: 'Video Tutorials' },
  ];

  return (
    <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col gap-8">
      <Link href="/" className="flex items-center gap-3 px-2 hover:opacity-80 transition-opacity">
        <div className="bg-blue-500 p-2 rounded-lg">
          <Wrench size={20} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight">REPAIR HUB</span>
      </Link>
      
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-slate-800 text-blue-400 font-medium'
                  : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-slate-800 flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">JD</div>
        <div className="flex-1">
          <p className="text-xs font-bold">John Doe</p>
          <p className="text-[10px] text-slate-500">Lead Mechanic</p>
        </div>
        <Settings size={16} className="text-slate-500 cursor-pointer hover:text-slate-300 transition-colors" />
      </div>
    </aside>
  );
}
