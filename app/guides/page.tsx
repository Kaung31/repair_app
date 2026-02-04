"use client";

import React, { useState } from 'react';
import { BookOpen, Search, Clock, TrendingUp, Wrench } from 'lucide-react';

export default function GuidesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Battery", "Motor", "Brakes", "Electronics", "Mechanical", "Wheels"];

  const guides = [
    {
      id: 1,
      title: "Complete Battery Replacement Guide",
      category: "Battery",
      difficulty: "Hard",
      time: "45 min",
      views: 1234,
      description: "Step-by-step guide to safely remove and install a new battery pack",
      steps: 8,
      tools: ["T25 Torx", "Multimeter", "Cable ties"]
    },
    {
      id: 2,
      title: "Hydraulic Brake Bleeding",
      category: "Brakes",
      difficulty: "Hard",
      time: "45 min",
      views: 892,
      description: "Professional brake bleeding technique for optimal stopping power",
      steps: 12,
      tools: ["Bleed kit", "DOT 4 fluid", "Allen keys"]
    },
    {
      id: 3,
      title: "Rear Tyre Puncture Repair",
      category: "Wheels",
      difficulty: "Easy",
      time: "20 min",
      views: 2341,
      description: "Quick and effective puncture repair for pneumatic tyres",
      steps: 6,
      tools: ["Tyre levers", "Patch kit", "Pump"]
    },
    {
      id: 4,
      title: "Motor Phase Wire Diagnostics",
      category: "Motor",
      difficulty: "Hard",
      time: "1 hour",
      views: 567,
      description: "Troubleshoot and repair motor phase wire connections",
      steps: 10,
      tools: ["Multimeter", "Screwdrivers", "Cable tester"]
    },
    {
      id: 5,
      title: "Display Unit Replacement",
      category: "Electronics",
      difficulty: "Medium",
      time: "30 min",
      views: 789,
      description: "Remove and install a new display unit with proper cable management",
      steps: 7,
      tools: ["Allen keys", "Cable ties"]
    },
    {
      id: 6,
      title: "Brake Pad Replacement",
      category: "Brakes",
      difficulty: "Easy",
      time: "15 min",
      views: 1567,
      description: "Replace worn brake pads to restore braking performance",
      steps: 5,
      tools: ["Allen keys", "Clean cloth"]
    },
    {
      id: 7,
      title: "Stem Folding Mechanism Service",
      category: "Mechanical",
      difficulty: "Medium",
      time: "35 min",
      views: 634,
      description: "Adjust and lubricate the folding mechanism for smooth operation",
      steps: 8,
      tools: ["Allen keys", "Grease", "Torque wrench"]
    },
    {
      id: 8,
      title: "Controller Firmware Update",
      category: "Electronics",
      difficulty: "Medium",
      time: "40 min",
      views: 445,
      description: "Update controller software for improved performance and bug fixes",
      steps: 6,
      tools: ["Computer", "USB cable", "Update software"]
    },
    {
      id: 9,
      title: "Suspension Adjustment & Maintenance",
      category: "Mechanical",
      difficulty: "Medium",
      time: "30 min",
      views: 923,
      description: "Optimize suspension settings for rider weight and comfort",
      steps: 9,
      tools: ["Allen keys", "Shock pump", "Grease"]
    },
    {
      id: 10,
      title: "Throttle Calibration",
      category: "Electronics",
      difficulty: "Easy",
      time: "10 min",
      views: 1890,
      description: "Recalibrate throttle for responsive and accurate speed control",
      steps: 4,
      tools: ["None required"]
    },
    {
      id: 11,
      title: "Front Wheel Bearing Replacement",
      category: "Wheels",
      difficulty: "Hard",
      time: "1 hour",
      views: 512,
      description: "Replace worn wheel bearings for smooth and safe riding",
      steps: 11,
      tools: ["Bearing press", "Allen keys", "Grease"]
    },
    {
      id: 12,
      title: "Battery BMS Diagnostics",
      category: "Battery",
      difficulty: "Hard",
      time: "50 min",
      views: 678,
      description: "Diagnose and troubleshoot Battery Management System issues",
      steps: 9,
      tools: ["Multimeter", "Diagnostic software", "Safety gloves"]
    },
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(search.toLowerCase()) ||
                         guide.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center gap-3">
            <BookOpen className="text-blue-500" size={36} />
            Repair Guides
          </h1>
          <p className="text-slate-600">Comprehensive step-by-step repair procedures for all models</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search repair guides..." 
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl">
            <p className="text-slate-500 text-sm font-bold mb-1">Total Guides</p>
            <p className="text-2xl font-black text-slate-900">{guides.length}</p>
          </div>
          <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl">
            <p className="text-emerald-600 text-sm font-bold mb-1">Easy</p>
            <p className="text-2xl font-black text-emerald-700">
              {guides.filter(g => g.difficulty === 'Easy').length}
            </p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 p-4 rounded-2xl">
            <p className="text-amber-600 text-sm font-bold mb-1">Medium</p>
            <p className="text-2xl font-black text-amber-700">
              {guides.filter(g => g.difficulty === 'Medium').length}
            </p>
          </div>
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl">
            <p className="text-red-600 text-sm font-bold mb-1">Hard</p>
            <p className="text-2xl font-black text-red-700">
              {guides.filter(g => g.difficulty === 'Hard').length}
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white border-2 border-slate-200 hover:border-blue-500 p-6 rounded-3xl transition-all cursor-pointer group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1 text-lg">
                  {guide.title}
                </h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ml-2 ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 mb-4">{guide.description}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  📋 {guide.steps} steps
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  ⏱️ {guide.time}
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
                  👁️ {guide.views} views
                </span>
              </div>

              {/* Category & Tools */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-600">{guide.category}</span>
                  <span className="text-slate-500">🔧 {guide.tools.length} tools needed</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No guides found matching your criteria.</p>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 p-6 rounded-3xl">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Wrench className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Need help with a specific repair?</h3>
              <p className="text-sm text-slate-600 mb-3">
                If you can't find a guide for your issue, check our error codes database or contact the technical team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
