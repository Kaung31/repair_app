"use client";

import React, { useState } from 'react';
import { PlayCircle, Clock, Eye, ThumbsUp } from 'lucide-react';

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Beginner", "Intermediate", "Advanced", "Most Popular"];

  const videos = [
    {
      id: 1,
      title: "Pure Air Battery Replacement - Complete Guide",
      thumbnail: "🔋",
      duration: "12:45",
      views: "2.3K",
      likes: 187,
      category: "Intermediate",
      model: "Pure Air",
      difficulty: "Medium",
      description: "Learn how to safely remove and replace the battery pack on Pure Air models"
    },
    {
      id: 2,
      title: "Hydraulic Brake Bleeding - Step by Step",
      thumbnail: "🛑",
      duration: "18:30",
      views: "5.1K",
      likes: 423,
      category: "Advanced",
      model: "Advance",
      difficulty: "Hard",
      description: "Professional technique for bleeding hydraulic brakes on Advance models"
    },
    {
      id: 3,
      title: "Quick Tyre Puncture Fix",
      thumbnail: "⚙️",
      duration: "6:15",
      views: "8.7K",
      likes: 612,
      category: "Beginner",
      model: "All Models",
      difficulty: "Easy",
      description: "Fast and effective puncture repair for all Pure Electric scooters"
    },
    {
      id: 4,
      title: "Advance Gen 2 Stem Folding Adjustment",
      thumbnail: "🔧",
      duration: "8:20",
      views: "1.9K",
      likes: 145,
      category: "Intermediate",
      model: "Advance",
      difficulty: "Medium",
      description: "Master the new stem folding mechanism and adjustment process"
    },
    {
      id: 5,
      title: "E07 Error Code Troubleshooting",
      thumbnail: "⚡",
      duration: "15:40",
      views: "4.2K",
      likes: 334,
      category: "Advanced",
      model: "All Models",
      difficulty: "Hard",
      description: "Complete diagnostic and repair guide for motor phase wire issues"
    },
    {
      id: 6,
      title: "Brake Pad Replacement - All Models",
      thumbnail: "🛠️",
      duration: "7:30",
      views: "6.5K",
      likes: 489,
      category: "Beginner",
      model: "All Models",
      difficulty: "Easy",
      description: "Simple brake pad replacement tutorial for all scooter models"
    },
    {
      id: 7,
      title: "Display Unit Installation Guide",
      thumbnail: "📱",
      duration: "10:15",
      views: "2.8K",
      likes: 213,
      category: "Intermediate",
      model: "Pure Pro",
      difficulty: "Medium",
      description: "Replace and configure a new display unit with proper cable routing"
    },
    {
      id: 8,
      title: "Motor Controller Diagnostics",
      thumbnail: "🔌",
      duration: "22:10",
      views: "3.4K",
      likes: 267,
      category: "Advanced",
      model: "All Models",
      difficulty: "Hard",
      description: "Advanced troubleshooting techniques for controller issues"
    },
    {
      id: 9,
      title: "Weekly Maintenance Routine",
      thumbnail: "✅",
      duration: "9:45",
      views: "12.1K",
      likes: 891,
      category: "Beginner",
      model: "All Models",
      difficulty: "Easy",
      description: "Essential weekly checks to keep your scooter in top condition"
    },
    {
      id: 10,
      title: "Suspension Tuning & Setup",
      thumbnail: "🏍️",
      duration: "14:20",
      views: "3.7K",
      likes: 298,
      category: "Intermediate",
      model: "Advance",
      difficulty: "Medium",
      description: "Optimize suspension settings for different rider weights and terrains"
    },
    {
      id: 11,
      title: "Battery BMS Deep Dive",
      thumbnail: "🔬",
      duration: "25:35",
      views: "1.5K",
      likes: 123,
      category: "Advanced",
      model: "All Models",
      difficulty: "Hard",
      description: "Understanding and diagnosing Battery Management System issues"
    },
    {
      id: 12,
      title: "Throttle Calibration Tutorial",
      thumbnail: "🎮",
      duration: "5:50",
      views: "7.2K",
      likes: 567,
      category: "Beginner",
      model: "All Models",
      difficulty: "Easy",
      description: "Quick throttle recalibration for smooth and responsive acceleration"
    },
  ];

  const filteredVideos = videos.filter(video => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Most Popular") return parseInt(video.views) > 5000;
    return video.category === selectedCategory;
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
            <PlayCircle className="text-purple-500" size={36} />
            Video Tutorials
          </h1>
          <p className="text-slate-600">Watch and learn from experienced mechanics with detailed video guides</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-purple-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-2 border-slate-200 p-4 rounded-2xl">
            <p className="text-slate-500 text-sm font-bold mb-1">Total Videos</p>
            <p className="text-2xl font-black text-slate-900">{videos.length}</p>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-2xl">
            <p className="text-purple-600 text-sm font-bold mb-1">Total Views</p>
            <p className="text-2xl font-black text-purple-700">
              {(videos.reduce((sum, v) => sum + parseFloat(v.views), 0)).toFixed(1)}K
            </p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-2xl">
            <p className="text-blue-600 text-sm font-bold mb-1">Most Viewed</p>
            <p className="text-lg font-black text-blue-700">Weekly Checks</p>
          </div>
          <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-2xl">
            <p className="text-emerald-600 text-sm font-bold mb-1">Avg Duration</p>
            <p className="text-2xl font-black text-emerald-700">12min</p>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white border-2 border-slate-200 hover:border-purple-500 rounded-3xl overflow-hidden transition-all cursor-pointer group"
            >
              {/* Thumbnail */}
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 aspect-video flex items-center justify-center">
                <span className="text-6xl">{video.thumbnail}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <PlayCircle size={32} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${getDifficultyColor(video.difficulty)}`}>
                  {video.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{video.description}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 text-slate-500">
                    <span className="flex items-center gap-1">
                      <Eye size={14} /> {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp size={14} /> {video.likes}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-purple-600">{video.model}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No videos found in this category.</p>
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 p-6 rounded-3xl">
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 p-3 rounded-xl">
              <PlayCircle className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Have a repair technique to share?</h3>
              <p className="text-sm text-slate-600 mb-3">
                Record your repairs and contribute to the knowledge base. Help other mechanics learn from your experience!
              </p>
              <button className="bg-purple-500 text-white font-bold px-4 py-2 rounded-xl hover:bg-purple-600 transition-colors text-sm">
                Submit Video Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
