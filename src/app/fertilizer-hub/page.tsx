'use client'

import { useState } from 'react'
import { Search, Filter, Calculator, BookOpen, TestTube } from 'lucide-react'

export default function FertilizerHub() {
  const [selectedCrop, setSelectedCrop] = useState('')
  const [soilType, setSoilType] = useState('')
  const [region, setRegion] = useState('')

  const crops = [
    'Wheat', 'Rice', 'Corn', 'Soybean', 'Cotton', 'Sugarcane',
    'Tomato', 'Potato', 'Coffee', 'Cocoa', 'Banana', 'Grapes'
  ]
  const soilTypes = ['Sandy', 'Loamy', 'Clay', 'Silty', 'Peaty', 'Chalky']
  const regions = ['North America', 'Europe', 'Asia', 'Africa', 'South America', 'Australia']

  const fertilizerData = [
    {
      name: 'NPK 20-20-20',
      type: 'Compound',
      composition: 'Nitrogen: 20%, Phosphorus: 20%, Potassium: 20%',
      suitableFor: ['Wheat', 'Corn', 'Rice'],
      application: 'Apply 100-150 kg/ha during vegetative stage',
      benefits: 'Balanced nutrition for overall plant growth'
    },
    {
      name: 'Urea',
      type: 'Nitrogen',
      composition: 'Nitrogen: 46%',
      suitableFor: ['All cereals', 'Vegetables'],
      application: 'Apply 50-100 kg/ha in split doses',
      benefits: 'Rapid nitrogen supply for vegetative growth'
    },
    {
      name: 'DAP',
      type: 'Phosphorus',
      composition: 'Nitrogen: 18%, Phosphorus: 46%',
      suitableFor: ['All crops'],
      application: 'Apply as basal dose at sowing',
      benefits: 'Excellent phosphorus source for root development'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Fertilizer Intelligence Hub</h1>
          <p className="text-gray-600 mt-2">
            AI-powered fertilizer recommendations for optimal crop production
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Crop Type
              </label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Crop</option>
                {crops.map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Soil Type
              </label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Soil Type</option>
                {soilTypes.map(soil => (
                  <option key={soil} value={soil}>{soil}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Region</option>
                {regions.map(reg => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200 flex items-center justify-center">
                <Search className="w-4 h-4 mr-2" />
                Get Recommendations
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <Calculator className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Fertilizer Calculator</h3>
            <p className="text-gray-600 text-sm">Calculate exact fertilizer requirements for your field</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Application Guide</h3>
            <p className="text-gray-600 text-sm">Learn proper fertilizer application techniques</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <TestTube className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Soil Analysis</h3>
            <p className="text-gray-600 text-sm">Upload soil test results for precise recommendations</p>
          </div>
        </div>

        {/* Fertilizer Recommendations */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recommended Fertilizers</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {fertilizerData.map((fertilizer, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition duration-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{fertilizer.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{fertilizer.type} Fertilizer</p>
                    <div className="mt-3">
                      <p className="text-sm text-gray-700"><strong>Composition:</strong> {fertilizer.composition}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Suitable for:</strong> {fertilizer.suitableFor.join(', ')}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Application:</strong> {fertilizer.application}</p>
                      <p className="text-sm text-green-600 mt-1"><strong>Benefits:</strong> {fertilizer.benefits}</p>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}