"use client";

import React, { useState } from 'react';
import { AlertTriangle, Search, Zap, Wrench, ShieldAlert } from 'lucide-react';

export default function ErrorCodesPage() {
  const [search, setSearch] = useState("");

  // Official Data from PURE Error Code.pdf
  const errorCodes = [
    {
      code: 'E1',
      name: 'Brake Error',
      severity: 'High',
      description: 'Signal disrupted between the Brake Lever and the VCU.',
      causes: [
        'Electrical Brake Cable not properly connected to VCU.',
        'Faulty or damaged cable between Brake Lever and VCU.',
        'Faulty Brake Sensor.',
        'Fault in the VCU hardware.'
      ],
      solutions: [
        'Check connector at the VCU for proper seating.',
        'Inspect the length of the cable for physical damage.',
        'Test or replace the Brake Sensor.',
        'Note: Rear Light fails to brighten if regenerative brake fault exists.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '20-30 min'
    },
    {
      code: 'E2',
      name: 'Throttle Error',
      severity: 'High',
      description: 'Error detected on the Throttle during riding.',
      causes: [
        'Throttle Cable not properly connected to the VCU.',
        'Faulty or damaged Throttle Signal wire.',
        'Faulty Throttle Sensor.',
        'Internal fault in the VCU.'
      ],
      solutions: [
        'Verify connection to VCU.',
        'Ensure the throttle moves freely and returns to 0 point naturally.',
        'Power cycle: release throttle, switch off, and restart.',
        'Note: E2 is for riding errors, F2 is for startup detection.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '15-20 min'
    },
    {
      code: 'E3',
      name: 'Communication Error',
      severity: 'Critical',
      description: 'Data communication between MCU and VCU failed to transmit.',
      causes: [
        'Connector issue at either end of the long communications cable.',
        'Water-ingress into the cable, VCU, or MCU.',
        'Damaged four-wire Data Cable running through the steerer.'
      ],
      solutions: [
        'Check plugs at both VCU (top end) and MCU (bottom end).',
        'If error disappears after power-on, replace damaged connecting wire.',
        'Inspect VCU and MCU hardware if error persists.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '45-60 min'
    },
    {
      code: 'E4',
      name: 'Overcurrent Error',
      severity: 'Critical',
      description: 'Over-current condition in the Motor Drive system.',
      causes: [
        'Short circuit in the Motor Drive cable.',
        'MCU Failure (likely if error is continuous).'
      ],
      solutions: [
        'Inspect Motor Drive cable for intermittent shorts.',
        'Replace MCU if error is reported continuously.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '1 hour +'
    },
    {
      code: 'E5',
      name: 'Undervoltage Error',
      severity: 'Medium',
      description: 'Battery voltage per cell is below the threshold (near 0%).',
      causes: [
        'Faulty, old, or uncharged battery.'
      ],
      solutions: [
        'Try charging the battery until full and reinstall.',
        'Test with a known good battery to confirm MCU status.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '10 min + Charging'
    },
    {
      code: 'E7',
      name: 'Motor Hall Error',
      severity: 'High',
      description: 'Hall Sensor on the Motor cannot be detected or abnormal.',
      causes: [
        'Failure of one of the Sensors in the Motor unit.',
        'Fault or damage to the cable between Motor and MCU.',
        'Failure of the MCU.'
      ],
      solutions: [
        'Check motor cable for kinks or damage.',
        'Inspect MCU motor phase connections.',
        'Test with known good motor to isolate issue.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '1-2 hours'
    },
    {
      code: 'E13',
      name: 'Battery Comms Error',
      severity: 'High',
      description: 'Problem with communication between MCU and Battery.',
      causes: [
        'Loose connection between MCU and Battery.',
        'Fault in the MCU or Battery BMS.'
      ],
      solutions: [
        'Tighten loose connections.',
        'Replace MCU to test for clearance.',
        'Replace battery if MCU replacement fails.'
      ],
      models: ['Gen 3', 'Gen 4'],
      estimatedTime: '30-45 min'
    },

  ];

  const filteredCodes = errorCodes.filter(error =>
    error.code.toLowerCase().includes(search.toLowerCase()) ||
    error.name.toLowerCase().includes(search.toLowerCase()) ||
    error.description.toLowerCase().includes(search.toLowerCase())
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Low': return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Critical': return 'bg-red-100 text-red-700 border-red-300';
      default: return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
            <AlertTriangle className="text-red-500" size={36} />
            Pure Error Code Database
          </h1>
          <p className="text-slate-600 font-medium">
            Official Gen 3 and Gen 4 VCU Error Code Reference
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Source: Pure Electric Technical Documentation
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search error codes (E1, E3, Communication, etc.)..." 
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl">
            <p className="text-slate-500 text-sm font-bold mb-1">Total Codes</p>
            <p className="text-2xl font-black text-slate-900">{errorCodes.length}</p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl">
            <p className="text-red-600 text-sm font-bold mb-1">Critical</p>
            <p className="text-2xl font-black text-red-700">
              {errorCodes.filter(e => e.severity === 'Critical').length}
            </p>
          </div>
          <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl">
            <p className="text-orange-600 text-sm font-bold mb-1">High Severity</p>
            <p className="text-2xl font-black text-orange-700">
              {errorCodes.filter(e => e.severity === 'High').length}
            </p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl">
            <p className="text-amber-600 text-sm font-bold mb-1">Medium</p>
            <p className="text-2xl font-black text-amber-700">
              {errorCodes.filter(e => e.severity === 'Medium').length}
            </p>
          </div>
        </div>

        {/* Error Codes List */}
        <div className="space-y-6">
          {filteredCodes.map((error) => (
            <div key={error.code} id={error.code} className="bg-white border-2 border-slate-200 rounded-3xl p-8 scroll-mt-8 hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 text-white font-black text-2xl w-16 h-16 rounded-2xl flex items-center justify-center">
                    {error.code}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{error.name}</h3>
                    <p className="text-slate-600 text-sm">{error.description}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border-2 ${getSeverityColor(error.severity)}`}>
                  {error.severity}
                </span>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-slate-200">
                <span className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  ⏱️ {error.estimatedTime}
                </span>
                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-medium">
                  🛴 {error.models.join(', ')}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Possible Causes */}
                <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-100">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Zap size={18} className="text-orange-500" />
                    Possible Causes
                  </h4>
                  <ul className="space-y-2">
                    {error.causes.map((cause, i) => (
                      <li key={i} className="text-sm text-slate-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-orange-500 before:font-bold">
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Wrench size={18} className="text-blue-500" />
                    Required Fixes
                  </h4>
                  <ol className="space-y-2">
                    {error.solutions.map((solution, i) => (
                      <li key={i} className="text-sm text-slate-700 pl-6 relative">
                        <span className="absolute left-0 font-bold text-blue-600">{i + 1}.</span>
                        {solution}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCodes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No error codes found matching your search.</p>
          </div>
        )}

        {/* Battery Safety Warning - From Official Documentation */}
        <div className="mt-12 bg-red-600 p-8 rounded-3xl text-white border-4 border-red-700 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ShieldAlert size={64} className="shrink-0 animate-pulse" />
            <div>
              <h2 className="text-2xl font-black uppercase tracking-wider mb-2">
                ⚠️ Battery Safety Protocol
              </h2>
              <p className="text-sm opacity-90 leading-relaxed font-medium">
                Excessive heat, bulging, lumps, leaks, crackling noises, or unusual smells are indicators of a faulty battery. 
                <strong className="block mt-2">If Vapours, Smoke or Flames are present:</strong>
                Do not handle. Evacuate the area immediately and contact emergency services.
              </p>
              <p className="text-xs opacity-75 mt-2 italic">
                Source: Pure Electric Safety Documentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
