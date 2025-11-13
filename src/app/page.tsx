'use client'

import { useState } from 'react'
import {
  Sprout,
  Truck,
  BarChart3,
  Calculator,
  Camera,
  Users,
  Cloud,
  Shield
} from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const features = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Fertilizer Intelligence',
      description: 'AI-powered fertilizer recommendations based on soil analysis and crop requirements',
      color: 'bg-green-500',
      href: '/fertilizer-hub'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Production Optimization',
      description: 'Maximize yields with data-driven insights and best practices',
      color: 'bg-blue-500',
      href: '/production-optimization'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Export Guidance',
      description: 'Complete export compliance and market intelligence',
      color: 'bg-orange-500',
      href: '/export-guidance'
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'AI Crop Advisor',
      description: 'Personalized recommendations and yield predictions',
      color: 'bg-purple-500',
      href: '/ai-advisor'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Disease Detection',
      description: 'Upload plant images for instant disease diagnosis',
      color: 'bg-red-500',
      href: '/disease-detection'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Weather Intelligence',
      description: 'Hyper-local weather forecasts and alerts',
      color: 'bg-cyan-500',
      href: '/weather'
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Elite-Agro</h1>
                <p className="text-sm text-gray-500">Agricultural Intelligence Platform</p>
              </div>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-green-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Market</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Community</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Resources</a>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Smart Farming,
              <span className="block">Maximum Yield</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              AI-powered agricultural intelligence for fertilizer optimization, production enhancement,
              and global export success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Agricultural Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From soil to export, we provide end-to-end intelligence for modern farming
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <a href={feature.href} className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                  Explore feature
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Real-time Stats */}
      <section className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">15,000+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">45%</div>
              <div className="text-gray-600">Average Yield Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">82%</div>
              <div className="text-gray-600">Export Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}