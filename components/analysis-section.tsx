"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const pieData = [
  { name: 'Marketing', value: 25, color: '#3B82F6' },
  { name: 'Business Development', value: 25, color: '#8B5CF6' },
  { name: 'Product Development', value: 10, color: '#10B981' },
  { name: 'Reserve', value: 10, color: '#F59E0B' },
  { name: 'Reserve 2', value: 10, color: '#EF4444' },
  { name: 'Token Sale', value: 20, color: '#EC4899' }
]

const audienceData = [
  { country: 'India', value: 35, flag: '🇮🇳' },
  { country: 'Indonesia', value: 20, flag: '🇮🇩' },
  { country: 'Malaysia', value: 15, flag: '🇲🇾' },
  { country: 'Vietnam', value: 12, flag: '🇻🇳' },
  { country: 'UK', value: 10, flag: '🇬🇧' },
  { country: 'Brazil', value: 8, flag: '🇧🇷' }
]

const progressData = [
  { label: 'Marketing', value: 25, color: 'bg-blue-500' },
  { label: 'Business Development', value: 25, color: 'bg-purple-500' },
  { label: 'Product Development', value: 10, color: 'bg-green-500' },
  { label: 'Reserve', value: 10, color: 'bg-yellow-500' },
  { label: 'Reserve 2', value: 10, color: 'bg-red-500' },
  { label: 'Token Sale', value: 20, color: 'bg-pink-500' }
]

export function AnalysisSection() {
  const [activeTab, setActiveTab] = useState('Distribution')
  const [animatedValues, setAnimatedValues] = useState<number[]>(new Array(6).fill(0))
  const [selectedPieSlice, setSelectedPieSlice] = useState<number | null>(null)

  // Animation for progress bars
  useEffect(() => {
    if (activeTab === 'Distribution') {
      const timer = setTimeout(() => {
        progressData.forEach((item, index) => {
          setTimeout(() => {
            setAnimatedValues(prev => {
              const newValues = [...prev]
              newValues[index] = item.value
              return newValues
            })
          }, index * 200)
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  // Reset animation when switching tabs
  useEffect(() => {
    if (activeTab === 'Distribution') {
      setAnimatedValues(new Array(6).fill(0))
    }
  }, [activeTab])

  // Pie chart configuration
  const pieChartOptions = {
    chart: {
      type: 'donut' as const,
      background: 'transparent',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      events: {
        dataPointSelection: (event: any, chartContext: any, config: any) => {
          setSelectedPieSlice(config.dataPointIndex)
        }
      }
    },
    colors: pieData.map(item => item.color),
    labels: pieData.map(item => item.name),
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontWeight: 600,
              color: '#ffffff',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 700,
              color: '#ffffff',
              offsetY: 10,
              formatter: (val: string) => val + '%'
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '14px',
              fontWeight: 400,
              color: '#ffffff',
              formatter: () => '100%'
            }
          }
        },
        expandOnClick: true
      }
    },
    stroke: {
      width: 2,
      colors: ['rgba(255,255,255,0.1)']
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '12px'
      },
      y: {
        formatter: (val: number) => val + '%'
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
          height: 300
        }
      }
    }]
  }

  // Area chart configuration for audience data
  const areaChartOptions = {
    chart: {
      type: 'area' as const,
      background: 'transparent',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    colors: ['#8B5CF6'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth' as const,
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#8B5CF6',
            opacity: 0.7
          },
          {
            offset: 100,
            color: '#EC4899',
            opacity: 0.1
          }
        ]
      }
    },
    grid: {
      borderColor: 'rgba(255,255,255,0.1)',
      strokeDashArray: 3
    },
    xaxis: {
      categories: audienceData.map(item => item.country),
      labels: {
        style: {
          colors: '#ffffff',
          fontSize: '12px'
        }
      },
      axisBorder: {
        color: 'rgba(255,255,255,0.2)'
      },
      axisTicks: {
        color: 'rgba(255,255,255,0.2)'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffffff',
          fontSize: '12px'
        },
        formatter: (val: number) => val + '%'
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '12px'
      },
      y: {
        formatter: (val: number) => val + '%'
      }
    },
    markers: {
      size: 6,
      colors: ['#ffffff'],
      strokeColors: '#8B5CF6',
      strokeWidth: 2,
      hover: {
        size: 8
      }
    }
  }

  const areaChartSeries = [{
    name: 'Audience %',
    data: audienceData.map(item => item.value)
  }]

  return (
    <section id="analysis" className="py-24 bg-background text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Token Allocation & Funds Distribution
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Join the industry leaders to discuss where the markets are heading. We accept token payments.
          </p>
          
          {/* Tab buttons */}
          <div className="inline-flex rounded-full bg-white/10 backdrop-blur-sm p-1 border border-white/20">
            <Button
              variant={activeTab === 'Distribution' ? 'default' : 'ghost'}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeTab === 'Distribution' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('Distribution')}
            >
              Distribution
            </Button>
            <Button
              variant={activeTab === 'Funding Allocation' ? 'default' : 'ghost'}
              className={`rounded-full px-6 transition-all duration-300 ${
                activeTab === 'Funding Allocation' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setActiveTab('Funding Allocation')}
            >
              Funding Allocation
            </Button>
          </div>
        </div>

        {activeTab === 'Distribution' && (
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Progress bars */}
            <div className="space-y-6">
              {progressData.slice(0, 3).map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium text-sm">{item.label}:</span>
                    <span className="text-white font-bold text-lg">
                      {animatedValues[index]}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: `${(animatedValues[index] / item.value) * 100}%`,
                        maxWidth: '100%'
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center - Interactive Pie Chart */}
            <div className="flex justify-center">
              <div className="w-80 h-80 relative">
                <Chart
                  options={pieChartOptions}
                  series={pieData.map(item => item.value)}
                  type="donut"
                  width="100%"
                  height="100%"
                />
                {selectedPieSlice !== null && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-xs">
                    <div className="text-white font-medium">
                      {pieData[selectedPieSlice]?.name}
                    </div>
                    <div className="text-white/70">
                      {pieData[selectedPieSlice]?.value}%
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Progress bars */}
            <div className="space-y-6">
              {progressData.slice(3).map((item, index) => (
                <div key={index + 3} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-medium text-sm">{item.label}:</span>
                    <span className="text-white font-bold text-lg">
                      {animatedValues[index + 3]}%
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: `${(animatedValues[index + 3] / item.value) * 100}%`,
                        maxWidth: '100%'
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Funding Allocation' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Global Audience Distribution</h3>
              <div className="h-96">
                <Chart
                  options={areaChartOptions}
                  series={areaChartSeries}
                  type="area"
                  width="100%"
                  height="100%"
                />
              </div>
              
              {/* Country flags and percentages */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                {audienceData.map((item, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-2">{item.flag}</div>
                    <div className="text-sm font-medium text-white">{item.country}</div>
                    <div className="text-lg font-bold text-purple-400">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}