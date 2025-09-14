'use client'

import { useState, useEffect } from 'react'

export default function DashboardPage() {
  const [plan, setPlan] = useState<string | null>(null)

  useEffect(() => {
    const savedPlan = localStorage.getItem('plan')
    if (savedPlan) {
      setPlan(savedPlan)
    } else {
      setPlan('Free')
      localStorage.setItem('plan', 'Free')
    }
  }, [])

  const upgradeToPro = () => {
    setPlan('Pro')
    localStorage.setItem('plan', 'Pro')
  }
  
  const downgradeToFree = () => {
    setPlan('Free')
    localStorage.setItem('plan', 'Free')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Your Subscription</h2>
        <p className="text-lg text-gray-700 mb-6">
          Current Plan: <span className="font-bold text-blue-600">{plan}</span>
        </p>
        {plan === 'Free' ? (
          <button 
            onClick={upgradeToPro}
            className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors a-key"
          >
            Upgrade to Pro
          </button>
        ) : (
          <button
            onClick={downgradeToFree}
            className="w-full px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors"
           >
            Downgrade to Free
          </button>
        )}
      </div>
    </div>
  )
}
