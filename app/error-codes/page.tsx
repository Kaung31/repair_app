"use client";

import React, { useState } from 'react';
import { AlertTriangle, Search, Zap, Wrench, CheckCircle } from 'lucide-react';

export default function ErrorCodesPage() {
  const [search, setSearch] = useState("");

  const errorCodes = [
    {
      code: 'E01',
      name: 'Throttle Malfunction',
      severity: 'Medium',
      description: 'Throttle not responding or stuck',
      causes: ['Damaged throttle cable', 'Faulty throttle sensor', 'Water damage to throttle assembly'],
      solutions: [
        'Check throttle cable for kinks or damage',
        'Test throttle voltage with multimeter (should be 0.8V-4.2V)',
        'Replace throttle assembly if faulty',
        'Ensure all connections are dry and secure'
      ],
      models: ['Pure Air', 'Air Go'],
      estimatedTime: '30-45 min'
    },
    {
      code: 'E02',
      name: 'Motor Hall Sensor Error',
      severity: 'High',
      description: 'Motor hall sensors not detecting properly',
      causes: ['Damaged hall sensor wires', 'Water ingress in motor', 'Loose motor connections'],
      solutions: [
        'Inspect motor cable for damage or water',
        'Check hall sensor connector (5-pin)',
        'Test hall sensors with multimeter',
        'Replace motor if hall sensors failed'
      ],
      models: ['Pure Pro', 'Advance'],
      estimatedTime: '1-2 hours'
    },
    {
      code: 'E03',
      name: 'Motor Overcurrent',
      severity: 'High',
      description: 'Motor drawing too much current',
      causes: ['Short circuit in motor', 'Controller malfunction', 'Mechanical resistance (jammed wheel)'],
      solutions: [
        'Check for wheel binding or mechanical resistance',
        'Inspect motor phase wires for shorts',
        'Test controller output with multimeter',
        'Replace motor or controller if damaged'
      ],
      models: ['Advance'],
      estimatedTime: '1-3 hours'
    },
    {
      code: 'E05',
      name: 'Brake Lever Error',
      severity: 'Low',
      description: 'Brake lever signal not detected',
      causes: ['Loose brake lever connector', 'Damaged brake sensor', 'Water in brake assembly'],
      solutions: [
        'Check brake lever cable connection',
        'Test brake sensor with multimeter',
        'Clean and dry brake sensor contacts',
        'Replace brake lever if sensor failed'
      ],
      models: ['Air Go'],
      estimatedTime: '15-30 min'
    },
    {
      code: 'E07',
      name: 'Motor Phase Wire Issue',
      severity: 'High',
      description: 'Problem with motor phase connections',
      causes: ['Disconnected phase wire', 'Damaged motor connector', 'Corroded connections'],
      solutions: [
        'Inspect all three motor phase wire connections',
        'Check for corrosion or loose pins',
        'Ensure phase wires are properly seated',
        'Replace motor cable if damaged'
      ],
      models: ['Pure Air', 'Pure Pro', 'Advance'],
      estimatedTime: '45 min - 1 hour'
    },
    {
      code: 'E08',
      name: 'Controller Communication Error',
      severity: 'High',
      description: 'Display cannot communicate with controller',
      causes: ['Loose communication cable', 'Damaged controller', 'Software corruption'],
      solutions: [
        'Check all cable connections between display and controller',
        'Power cycle the scooter (off for 30 seconds)',
        'Update controller firmware if available',
        'Replace controller if communication fails'
      ],
      models: ['Pure Pro', 'Advance'],
      estimatedTime: '30 min - 1 hour'
    },
    {
      code: 'E10',
      name: 'Battery Communication Error',
      severity: 'Medium',
      description: 'Battery not communicating with controller',
      causes: ['Loose battery connection', 'BMS malfunction', 'Damaged battery cable'],
      solutions: [
        'Remove and reseat battery pack',
        'Clean battery connector contacts',
        'Check battery voltage (should be 36-42V)',
        'Replace battery if BMS failed'
      ],
      models: ['Pure Air', 'Air Go'],
      estimatedTime: '20-40 min'
    },
    {
      code: 'E11',
      name: 'Battery Overvoltage',
      severity: 'High',
      description: 'Battery voltage exceeds safe limits',
      causes: ['Faulty charger', 'BMS malfunction', 'Cell imbalance'],
      solutions: [
        'Stop using scooter immediately',
        'Check charger output voltage (should be 42V)',
        'Test battery voltage with multimeter',
        'Replace battery if overvoltage persists'
      ],
      models: ['Advance'],
      estimatedTime: '30 min - diagnosis only'
    },
    {
      code: 'E12',
      name: 'Battery Undervoltage',
      severity: 'Low',
      description: 'Battery voltage too low',
      causes: ['Battery deeply discharged', 'Old/worn battery', 'Cold weather'],
      solutions: [
        'Charge battery fully (may take longer than usual)',
        'Warm battery to room temperature before charging',
        'Check for battery degradation',
        'Replace battery if capacity below 70%'
      ],
      models: ['Pure Pro'],
      estimatedTime: '5 min + charging time'
    },
    {
      code: 'E14',
      name: 'Temperature Sensor Error',
      severity: 'Medium',
      description: 'Controller or motor temperature sensor malfunction',
      causes: ['Damaged temperature sensor', 'Loose sensor connection', 'Sensor short circuit'],
      solutions: [
        'Check temperature sensor connection',
        'Test sensor resistance (10k ohm at 25°C)',
        'Replace controller if internal sensor failed',
        'Ensure proper ventilation around controller'
      ],
      models: ['Advance'],
      estimatedTime: '30-60 min'
    },
    {
      code: 'E15',
      name: 'Motor Locked',
      severity: 'High',
      description: 'Motor cannot rotate',
      causes: ['Wheel seized or blocked', 'Bearing failure', 'Internal motor damage'],
      solutions: [
        'Check for physical obstruction in wheel',
        'Test wheel rotation manually',
        'Inspect bearings for wear or damage',
        'Replace motor if internally seized'
      ],
      models: ['Pure Air'],
      estimatedTime: '1-2 hours'
    },
    {
      code: 'E20',
      name: 'Display Communication Lost',
      severity: 'Medium',
      description: 'Display unit not responding',
      causes: ['Loose display cable', 'Damaged display connector', 'Display unit failure'],
      solutions: [
        'Check display cable connection',
        'Inspect connector pins for damage',
        'Power cycle the scooter',
        'Replace display if connection is good but no response'
      ],
      models: ['Pure Pro'],
      estimatedTime: '20-40 min'
    },
    {
      code: 'E22',
      name: 'Speed Sensor Error',
      severity: 'Low',
      description: 'Speed sensor not reading correctly',
      causes: ['Dirty speed sensor', 'Magnet misalignment', 'Damaged sensor'],
      solutions: [
        'Clean speed sensor and magnet',
        'Check magnet alignment (should be 2-5mm from sensor)',
        'Test sensor with multimeter',
        'Replace speed sensor if faulty'
      ],
      models: ['Advance'],
      estimatedTime: '15-30 min'
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
      case 'High': return 'bg-red-100 text-red-700 border-red-300';
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
            Error Code Reference
          </h1>
          <p className="text-slate-600">Complete diagnostic guide for Pure Electric scooter error codes</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search error codes..." 
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl">
            <p className="text-slate-500 text-sm font-bold mb-1">Total Codes</p>
            <p className="text-2xl font-black text-slate-900">{errorCodes.length}</p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl">
            <p className="text-red-600 text-sm font-bold mb-1">High Severity</p>
            <p className="text-2xl font-black text-red-700">
              {errorCodes.filter(e => e.severity === 'High').length}
            </p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl">
            <p className="text-amber-600 text-sm font-bold mb-1">Medium Severity</p>
            <p className="text-2xl font-black text-amber-700">
              {errorCodes.filter(e => e.severity === 'Medium').length}
            </p>
          </div>
        </div>

        {/* Error Codes List */}
        <div className="space-y-4">
          {filteredCodes.map((error) => (
            <div key={error.code} id={error.code} className="bg-white border-2 border-slate-200 rounded-3xl p-6 scroll-mt-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500 text-white font-black text-xl w-16 h-16 rounded-2xl flex items-center justify-center">
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
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-orange-500" />
                    Possible Causes
                  </h4>
                  <ul className="space-y-1">
                    {error.causes.map((cause, i) => (
                      <li key={i} className="text-sm text-slate-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-orange-500">
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-500" />
                    Solutions
                  </h4>
                  <ol className="space-y-2">
                    {error.solutions.map((solution, i) => (
                      <li key={i} className="text-sm text-slate-600 pl-6 relative">
                        <span className="absolute left-0 font-bold text-emerald-600">{i + 1}.</span>
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
      </div>
    </div>
  );
}
