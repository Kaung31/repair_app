"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Bike, ChevronLeft, Wrench, Clock, AlertCircle, CheckCircle, Video, FileText, Zap } from 'lucide-react';

export default function ModelDetailPage() {
  const params = useParams();
  const modelId = params.model as string;

  // Model database
  const modelData: Record<string, any> = {
    'pure-air': {
      name: 'Pure Air',
      description: 'Entry-level commuter scooter',
      color: 'bg-blue-500',
      specs: {
        topSpeed: '25 km/h',
        range: '25 km',
        weight: '12.5 kg',
        motorPower: '250W',
        batteryCapacity: '216Wh',
        chargingTime: '4 hours'
      },
      repairGuides: [
        { id: 1, title: 'Replace Rear Tyre', difficulty: 'Easy', time: '20 min', views: 234 },
        { id: 2, title: 'Brake Pad Replacement', difficulty: 'Easy', time: '15 min', views: 189 },
        { id: 3, title: 'Battery Calibration', difficulty: 'Medium', time: '30 min', views: 456 },
        { id: 4, title: 'Handlebar Grip Replacement', difficulty: 'Easy', time: '10 min', views: 123 },
        { id: 5, title: 'E07 Motor Sensor Error', difficulty: 'Hard', time: '1 hour', views: 567 },
        { id: 6, title: 'Throttle Cable Adjustment', difficulty: 'Medium', time: '25 min', views: 345 },
        { id: 7, title: 'Display Screen Replacement', difficulty: 'Medium', time: '35 min', views: 289 },
        { id: 8, title: 'Front Light Not Working', difficulty: 'Easy', time: '15 min', views: 201 },
      ],
      errorCodes: ['E01', 'E07', 'E10', 'E15'],
      videoTutorials: 3
    },
    'pure-pro': {
      name: 'Pure Pro',
      description: 'Mid-range performance scooter',
      color: 'bg-purple-500',
      specs: {
        topSpeed: '25 km/h',
        range: '40 km',
        weight: '14.5 kg',
        motorPower: '350W',
        batteryCapacity: '432Wh',
        chargingTime: '5 hours'
      },
      repairGuides: [
        { id: 1, title: 'Suspension Adjustment', difficulty: 'Medium', time: '30 min', views: 412 },
        { id: 2, title: 'Display Error Code Reset', difficulty: 'Easy', time: '10 min', views: 523 },
        { id: 3, title: 'Motor Controller Replacement', difficulty: 'Hard', time: '1.5 hours', views: 678 },
        { id: 4, title: 'Rear Mudguard Repair', difficulty: 'Easy', time: '20 min', views: 234 },
        { id: 5, title: 'Battery Pack Replacement', difficulty: 'Hard', time: '45 min', views: 789 },
        { id: 6, title: 'Brake Cable Tension', difficulty: 'Medium', time: '20 min', views: 345 },
        { id: 7, title: 'Stem Bearing Lubrication', difficulty: 'Medium', time: '35 min', views: 267 },
      ],
      errorCodes: ['E02', 'E07', 'E08', 'E12', 'E20'],
      videoTutorials: 5
    },
    'advance': {
      name: 'Advance',
      description: 'Premium performance scooter',
      color: 'bg-emerald-500',
      specs: {
        topSpeed: '25 km/h',
        range: '50 km',
        weight: '17 kg',
        motorPower: '500W',
        batteryCapacity: '540Wh',
        chargingTime: '6 hours'
      },
      repairGuides: [
        { id: 1, title: 'Hydraulic Brake Bleeding', difficulty: 'Hard', time: '45 min', views: 892 },
        { id: 2, title: 'Stem Folding Mechanism Adjustment', difficulty: 'Medium', time: '30 min', views: 634 },
        { id: 3, title: 'Controller Firmware Update', difficulty: 'Medium', time: '40 min', views: 723 },
        { id: 4, title: 'Dual Suspension Service', difficulty: 'Hard', time: '1 hour', views: 567 },
        { id: 5, title: 'Motor Phase Wire Repair', difficulty: 'Hard', time: '1.5 hours', views: 445 },
        { id: 6, title: 'Display Unit Replacement', difficulty: 'Medium', time: '35 min', views: 389 },
        { id: 7, title: 'Rear Wheel Bearing Replacement', difficulty: 'Hard', time: '1 hour', views: 512 },
        { id: 8, title: 'Battery BMS Diagnostics', difficulty: 'Hard', time: '50 min', views: 678 },
      ],
      errorCodes: ['E03', 'E07', 'E08', 'E11', 'E14', 'E22'],
      videoTutorials: 8
    },
    'air-go': {
      name: 'Air Go',
      description: 'Ultra-compact folding scooter',
      color: 'bg-orange-500',
      specs: {
        topSpeed: '20 km/h',
        range: '20 km',
        weight: '10.5 kg',
        motorPower: '200W',
        batteryCapacity: '180Wh',
        chargingTime: '3 hours'
      },
      repairGuides: [
        { id: 1, title: 'Folding Latch Adjustment', difficulty: 'Easy', time: '15 min', views: 312 },
        { id: 2, title: 'Small Wheel Replacement', difficulty: 'Medium', time: '25 min', views: 423 },
        { id: 3, title: 'Battery Connector Repair', difficulty: 'Medium', time: '30 min', views: 534 },
        { id: 4, title: 'Compact Brake Service', difficulty: 'Easy', time: '20 min', views: 267 },
        { id: 5, title: 'Handlebar Quick Release Fix', difficulty: 'Easy', time: '10 min', views: 189 },
        { id: 6, title: 'Power Button Replacement', difficulty: 'Medium', time: '35 min', views: 345 },
      ],
      errorCodes: ['E01', 'E05', 'E10'],
      videoTutorials: 4
    }
  };

  const model = modelData[modelId];

  if (!model) {
    return (
      <div className="p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Model Not Found</h1>
          <p className="text-slate-600 mb-4">The model you're looking for doesn't exist.</p>
          <Link href="/models" className="text-blue-600 font-bold hover:underline">← Back to Models</Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-100 text-emerald-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/models" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 group">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          <span className="font-medium">Back to Models</span>
        </Link>

        {/* Model Header */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-8 mb-6">
          <div className="flex items-start gap-6 mb-6">
            <div className={`w-20 h-20 ${model.color} rounded-2xl flex items-center justify-center`}>
              <Bike size={40} className="text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{model.name}</h1>
              <p className="text-slate-600 text-lg mb-4">{model.description}</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <FileText size={14} /> {model.repairGuides.length} Repair Guides
                </span>
                <span className="bg-purple-100 text-purple-700 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Video size={14} /> {model.videoTutorials} Video Tutorials
                </span>
                <span className="bg-red-100 text-red-700 text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <AlertCircle size={14} /> {model.errorCodes.length} Error Codes
                </span>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Top Speed</p>
              <p className="text-lg font-black text-slate-900">{model.specs.topSpeed}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Range</p>
              <p className="text-lg font-black text-slate-900">{model.specs.range}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Weight</p>
              <p className="text-lg font-black text-slate-900">{model.specs.weight}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Motor</p>
              <p className="text-lg font-black text-slate-900">{model.specs.motorPower}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Battery</p>
              <p className="text-lg font-black text-slate-900">{model.specs.batteryCapacity}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs text-slate-500 font-bold uppercase mb-1">Charge Time</p>
              <p className="text-lg font-black text-slate-900">{model.specs.chargingTime}</p>
            </div>
          </div>
        </div>

        {/* Repair Guides Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Wrench className="text-blue-500" size={28} />
            Repair Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {model.repairGuides.map((guide: any) => (
              <div
                key={guide.id}
                className="bg-white border-2 border-slate-200 hover:border-blue-500 p-5 rounded-2xl transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1">
                    {guide.title}
                  </h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {guide.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle size={14} /> {guide.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Error Codes */}
        <div className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Zap className="text-red-500" size={20} />
            Common Error Codes for {model.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {model.errorCodes.map((code: string) => (
              <Link
                key={code}
                href={`/error-codes#${code}`}
                className="bg-white border-2 border-red-200 hover:border-red-500 text-red-700 font-bold px-4 py-2 rounded-xl text-sm transition-all"
              >
                {code}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
