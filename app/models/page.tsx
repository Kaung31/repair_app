"use client";

import React from 'react';
import Link from 'next/link';
import { Bike, Wrench, Clock, ChevronRight } from 'lucide-react';

export default function ModelsPage() {
  const models = [
    {
      id: 'pure-air',
      name: 'Pure Air',
      description: 'Entry-level commuter scooter. Lightweight and perfect for urban rides.',
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200 hover:border-blue-500',
      specs: {
        topSpeed: '25 km/h',
        range: '25 km',
        weight: '12.5 kg'
      },
      repairGuides: 12,
      commonIssues: ['Tyre punctures', 'Brake adjustment', 'Battery calibration']
    },
    {
      id: 'pure-pro',
      name: 'Pure Pro',
      description: 'Mid-range performance with enhanced suspension and longer battery life.',
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200 hover:border-purple-500',
      specs: {
        topSpeed: '25 km/h',
        range: '40 km',
        weight: '14.5 kg'
      },
      repairGuides: 15,
      commonIssues: ['Suspension squeaking', 'Display errors', 'Motor sensor issues']
    },
    {
      id: 'advance',
      name: 'Advance',
      description: 'Premium model with dual suspension, hydraulic brakes, and advanced electronics.',
      color: 'bg-emerald-50 text-emerald-600',
      borderColor: 'border-emerald-200 hover:border-emerald-500',
      specs: {
        topSpeed: '25 km/h',
        range: '50 km',
        weight: '17 kg'
      },
      repairGuides: 18,
      commonIssues: ['Hydraulic brake bleeding', 'Stem folding mechanism', 'Controller updates']
    },
    {
      id: 'air-go',
      name: 'Air Go',
      description: 'Ultra-compact folding scooter designed for portability and last-mile transport.',
      color: 'bg-orange-50 text-orange-600',
      borderColor: 'border-orange-200 hover:border-orange-500',
      specs: {
        topSpeed: '20 km/h',
        range: '20 km',
        weight: '10.5 kg'
      },
      repairGuides: 10,
      commonIssues: ['Folding latch wear', 'Small wheel damage', 'Battery connections']
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Scooter Models</h1>
          <p className="text-slate-600">Select a model to view repair guides, common issues, and specifications.</p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {models.map((model) => (
            <Link
              key={model.id}
              href={`/models/${model.id}`}
              className={`bg-white p-6 rounded-3xl border-2 ${model.borderColor} transition-all group hover:shadow-xl`}
            >
              {/* Model Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${model.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Bike size={28} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{model.name}</h2>
                    <p className="text-sm text-slate-500">{model.repairGuides} repair guides</p>
                  </div>
                </div>
                <ChevronRight className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" size={24} />
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4">{model.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Top Speed</p>
                  <p className="text-sm font-bold text-slate-900">{model.specs.topSpeed}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Range</p>
                  <p className="text-sm font-bold text-slate-900">{model.specs.range}</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Weight</p>
                  <p className="text-sm font-bold text-slate-900">{model.specs.weight}</p>
                </div>
              </div>

              {/* Common Issues */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Common Issues</p>
                <div className="flex flex-wrap gap-2">
                  {model.commonIssues.map((issue, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                      {issue}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 p-6 rounded-3xl">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Wrench className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Can't find what you're looking for?</h3>
              <p className="text-sm text-slate-600 mb-3">Browse all repair guides or search for specific error codes.</p>
              <div className="flex gap-3">
                <Link href="/guides" className="text-sm font-bold text-blue-600 hover:underline">View All Guides →</Link>
                <Link href="/error-codes" className="text-sm font-bold text-blue-600 hover:underline">Error Codes →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
