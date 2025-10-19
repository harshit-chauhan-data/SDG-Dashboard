"use client"
import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, ComposedChart, Scatter } from 'recharts';
import { TrendingUp, TrendingDown, Users, Leaf, Building2, Droplet, Zap, GraduationCap, Heart, Home, AlertCircle, CheckCircle, Target, Award } from 'lucide-react';

const SDGDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for 10 Key SDG KPIs
  const sdgOverviewData = [
    { goal: 'SDG 1', name: 'No Poverty', progress: 68, target: 85, color: '#E5243B' },
    { goal: 'SDG 2', name: 'Zero Hunger', progress: 62, target: 80, color: '#DDA63A' },
    { goal: 'SDG 3', name: 'Good Health', progress: 71, target: 90, color: '#4C9F38' },
    { goal: 'SDG 4', name: 'Quality Education', progress: 75, target: 88, color: '#C5192D' },
    { goal: 'SDG 5', name: 'Gender Equality', progress: 58, target: 85, color: '#FF3A21' },
    { goal: 'SDG 6', name: 'Clean Water', progress: 64, target: 90, color: '#26BDE2' },
    { goal: 'SDG 7', name: 'Clean Energy', progress: 72, target: 92, color: '#FCC30B' },
    { goal: 'SDG 8', name: 'Economic Growth', progress: 66, target: 82, color: '#A21942' },
    { goal: 'SDG 11', name: 'Sustainable Cities', progress: 59, target: 78, color: '#FD6925' },
    { goal: 'SDG 13', name: 'Climate Action', progress: 55, target: 80, color: '#3F7E44' }
  ];

  const kpiData = [
    { name: 'Poverty Rate', value: 15.8, change: -2.3, icon: Users, unit: '%', target: 8.5 },
    { name: 'Malnutrition', value: 32.4, change: -4.1, icon: Heart, unit: '%', target: 18.0 },
    { name: 'Infant Mortality', value: 45, change: -5, icon: Heart, unit: 'per 1000', target: 30 },
    { name: 'Literacy Rate', value: 75.2, change: 3.8, icon: GraduationCap, unit: '%', target: 88.0 },
    { name: 'Clean Water Access', value: 82.5, change: 5.2, icon: Droplet, unit: '%', target: 95.0 },
    { name: 'Renewable Energy', value: 28.3, change: 6.7, icon: Zap, unit: '%', target: 45.0 },
    { name: 'Forest Cover', value: 25.1, change: 1.2, icon: Leaf, unit: '%', target: 33.0 },
    { name: 'Urban Planning', value: 45.8, change: 3.5, icon: Building2, unit: '%', target: 70.0 },
    { name: 'Housing Access', value: 68.4, change: 4.2, icon: Home, unit: '%', target: 85.0 },
    { name: 'Employment Rate', value: 62.7, change: 2.1, icon: Users, unit: '%', target: 75.0 }
  ];

  const trendData = [
    { year: '2020', poverty: 20.5, education: 68.2, health: 62.4, water: 72.1, energy: 18.5 },
    { year: '2021', poverty: 18.9, education: 70.5, health: 65.8, water: 75.3, energy: 21.2 },
    { year: '2022', poverty: 17.2, education: 72.8, health: 68.2, water: 78.6, energy: 24.1 },
    { year: '2023', poverty: 16.1, education: 74.1, health: 70.5, water: 80.4, energy: 26.4 },
    { year: '2024', poverty: 15.8, education: 75.2, health: 71.0, water: 82.5, energy: 28.3 }
  ];

  const districtPerformance = [
    { district: 'Bhopal', score: 78, population: 24.5, budget: 450 },
    { district: 'Indore', score: 82, population: 32.7, budget: 580 },
    { district: 'Jabalpur', score: 68, population: 26.3, budget: 380 },
    { district: 'Gwalior', score: 71, population: 21.8, budget: 420 },
    { district: 'Ujjain', score: 65, population: 19.4, budget: 340 },
    { district: 'Sagar', score: 62, population: 23.6, budget: 310 },
    { district: 'Rewa', score: 58, population: 24.1, budget: 290 },
    { district: 'Satna', score: 60, population: 22.8, budget: 305 }
  ];

  const budgetAllocation = [
    { name: 'Health & Wellbeing', value: 28, amount: 1400 },
    { name: 'Education', value: 24, amount: 1200 },
    { name: 'Infrastructure', value: 20, amount: 1000 },
    { name: 'Environment', value: 12, amount: 600 },
    { name: 'Social Welfare', value: 16, amount: 800 }
  ];

  const monthlyProgress = [
    { month: 'Apr', sdgIndex: 62 },
    { month: 'May', sdgIndex: 64 },
    { month: 'Jun', sdgIndex: 65 },
    { month: 'Jul', sdgIndex: 67 },
    { month: 'Aug', sdgIndex: 68 },
    { month: 'Sep', sdgIndex: 69 },
    { month: 'Oct', sdgIndex: 70 }
  ];

  const goalComparison = [
    { name: 'MP', sdg1: 68, sdg3: 71, sdg4: 75, sdg6: 64, sdg7: 72 },
    { name: 'National Avg', sdg1: 65, sdg3: 68, sdg4: 72, sdg6: 62, sdg7: 70 },
    { name: 'Target', sdg1: 85, sdg3: 90, sdg4: 88, sdg6: 90, sdg7: 92 }
  ];

  const COLORS = ['#4C9F38', '#C5192D', '#FD6925', '#3F7E44', '#26BDE2'];

  // Page 1: Overview & Key Metrics
  const Page1 = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-5 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Madhya Pradesh SDG Dashboard</h1>
        <p className="text-lg">Sustainable Development Goals Monitoring System</p>
        <p className="text-sm mt-2 opacity-90">Government of Madhya Pradesh | Data as of October 2025</p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {kpiData.slice(0, 5).map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-3 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-2">
                <Icon className="w-5 h-5 text-blue-600" />
                {kpi.change > 0 ?
                  <TrendingUp className="w-4 h-4 text-green-600" /> :
                  <TrendingDown className="w-4 h-4 text-red-600" />
                }
              </div>
              <div className="text-xl font-bold text-gray-800">{kpi.value}{kpi.unit}</div>
              <div className="text-xs text-gray-600 mt-1">{kpi.name}</div>
              <div className={`text-xs mt-1 ${kpi.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change > 0 ? '+' : ''}{kpi.change}% YoY
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">SDG Progress Overview</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={sdgOverviewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="goal" style={{ fontSize: '11px' }} />
              <YAxis />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Bar dataKey="progress" fill="#4C9F38" name="Current" />
              <Bar dataKey="target" fill="#E5E7EB" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">5-Year Progress Trends</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" style={{ fontSize: '11px' }} />
              <YAxis />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Line type="monotone" dataKey="poverty" stroke="#E5243B" strokeWidth={2} name="Poverty %" />
              <Line type="monotone" dataKey="education" stroke="#C5192D" strokeWidth={2} name="Education %" />
              <Line type="monotone" dataKey="health" stroke="#4C9F38" strokeWidth={2} name="Health %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Monthly SDG Index</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" style={{ fontSize: '11px' }} />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sdgIndex" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="SDG Index" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Multi-SDG Performance</h3>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={[
              { subject: 'Poverty', A: 68, fullMark: 100 },
              { subject: 'Health', A: 71, fullMark: 100 },
              { subject: 'Education', A: 75, fullMark: 100 },
              { subject: 'Water', A: 82, fullMark: 100 },
              { subject: 'Energy', A: 72, fullMark: 100 }
            ]}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" style={{ fontSize: '11px' }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Score" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">MP vs National Comparison</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={goalComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: '11px' }} />
              <YAxis />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Bar dataKey="sdg1" fill="#E5243B" name="SDG 1" />
              <Bar dataKey="sdg3" fill="#4C9F38" name="SDG 3" />
              <Bar dataKey="sdg4" fill="#C5192D" name="SDG 4" />
            </BarChart>
          </ResponsiveContainer>
        </div>

<div className="bg-white p-4 rounded-lg shadow-md">
  <h3 className="text-md font-semibold mb-3 text-gray-800">India CO₂ Emissions Trends</h3>
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={[
      { year: '2020', change: -7, color: '#EF4444' },
      { year: '2021', change: 8, color: '#10B981' },
      { year: '2022', change: 8, color: '#F97316' },
      { year: '2023', change: 8, color: '#10B981' },
      { year: '2024', change: 2, color: '#F59E0B' },
      { year: '2025 H1', change: 1, color: '#10B981' }
    ]}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" style={{ fontSize: '11px' }} />
      <YAxis label={{ value: 'YoY Change (%)', angle: -90, position: 'insideLeft', style: { fontSize: '11px' } }} />
      <Tooltip />
      <Bar dataKey="change" name="YoY Change">
        {[
          { year: '2020', change: -7, color: '#EF4444' },
          { year: '2021', change: 8, color: '#10B981' },
          { year: '2022', change: 8, color: '#F97316' },
          { year: '2023', change: 8, color: '#10B981' },
          { year: '2024', change: 2, color: '#F59E0B' },
          { year: '2025 H1', change: 1, color: '#10B981' }
        ].map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>
      </div>
    </div>
  );

  // Page 2: District Analysis & Resource Allocation
  const Page2 = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 rounded-lg">
        <h2 className="text-2xl font-bold">District Performance & Resource Allocation</h2>
        <p className="text-sm mt-2">Comparative analysis and budget distribution</p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {kpiData.slice(5, 10).map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white p-3 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start justify-between mb-2">
                <Icon className="w-5 h-5 text-purple-600" />
                {kpi.change > 0 ?
                  <TrendingUp className="w-4 h-4 text-green-600" /> :
                  <TrendingDown className="w-4 h-4 text-red-600" />
                }
              </div>
              <div className="text-xl font-bold text-gray-800">{kpi.value}{kpi.unit}</div>
              <div className="text-xs text-gray-600 mt-1">{kpi.name}</div>
              <div className={`text-xs mt-1 ${kpi.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change > 0 ? '+' : ''}{kpi.change}% YoY
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">District SDG Performance</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={districtPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="district" width={70} style={{ fontSize: '11px' }} />
              <Tooltip />
              <Bar dataKey="score" fill="#8B5CF6" name="SDG Score">
                {districtPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.score >= 75 ? '#10B981' : entry.score >= 65 ? '#F59E0B' : '#EF4444'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Budget Allocation by Sector</h3>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={budgetAllocation}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name.split(' ')[0]}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                fontSize= "11.5px"
                dataKey="value"
              >
                {budgetAllocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Budget vs Population</h3>
          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart data={districtPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="district" angle={-45} textAnchor="end" height={80} style={{ fontSize: '10px' }} />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Bar yAxisId="left" dataKey="budget" fill="#3B82F6" name="Budget (Cr)" />
              <Line yAxisId="right" type="monotone" dataKey="population" stroke="#EF4444" strokeWidth={2} name="Population (L)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Sector-wise Investment (in Crores)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={budgetAllocation} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={130} style={{ fontSize: '11px' }} />
              <Tooltip />
              <Bar dataKey="amount" fill="#10B981" name="Amount (Cr)">
                {budgetAllocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">District Performance Matrix</h3>
          <ResponsiveContainer width="100%" height={240}>
            <ComposedChart data={districtPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="score" type="number" label={{ value: 'SDG Score', position: 'bottom', style: { fontSize: '11px' } }} />
              <YAxis dataKey="population" type="number" label={{ value: 'Population (L)', angle: -90, position: 'insideLeft', style: { fontSize: '11px' } }} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Districts" dataKey="population" fill="#8B5CF6">
                {districtPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Scatter>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-md font-semibold mb-3 text-gray-800">Comprehensive District Scorecard</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left text-black">District</th>
                <th className="p-2 text-center text-black">SDG Score</th>
                <th className="p-2 text-center text-black">Population (L)</th>
                <th className="p-2 text-center text-black">Budget (Cr)</th>
                <th className="p-2 text-center text-black">Per Capita</th>
                <th className="p-2 text-center text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {districtPerformance.map((district, idx) => {
                const perCapita = (district.budget / district.population).toFixed(2);
                return (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-2 font-medium text-black">{district.district}</td>
                    <td className="p-2 text-center font-semibold text-black">{district.score}</td>
                    <td className="p-2 text-center text-black">{district.population}</td>
                    <td className="p-2 text-center text-black">{district.budget}</td>
                    <td className="p-2 text-center text-black">₹{perCapita}</td>
                    <td className="p-2 text-center text-black">
                      <span className={`px-2 py-1 rounded text-xs ${district.score >= 75 ? 'bg-green-100 text-green-800' : district.score >= 65 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {district.score >= 75 ? 'Excellent' : district.score >= 65 ? 'Good' : 'Needs Improvement'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Page 3: Detailed Analytics & Recommendations
  const Page3 = () => {
    const radarData = [
      { subject: 'Poverty', A: 68, B: 85, fullMark: 100 },
      { subject: 'Health', A: 71, B: 90, fullMark: 100 },
      { subject: 'Education', A: 75, B: 88, fullMark: 100 },
      { subject: 'Water', A: 82, B: 90, fullMark: 100 },
      { subject: 'Energy', A: 72, B: 92, fullMark: 100 },
      { subject: 'Climate', A: 55, B: 80, fullMark: 100 }
    ];

    const yearlyComparison = [
      { year: '2020', achieved: 58, target: 70 },
      { year: '2021', achieved: 62, target: 73 },
      { year: '2022', achieved: 65, target: 76 },
      { year: '2023', achieved: 68, target: 79 },
      { year: '2024', achieved: 70, target: 82 },
      { year: '2025 (Projected)', achieved: 72, target: 85 }
    ];

    const goalWiseProgress = [
      { goal: 'SDG 1', q1: 65, q2: 66, q3: 67, q4: 68 },
      { goal: 'SDG 3', q1: 68, q2: 69, q3: 70, q4: 71 },
      { goal: 'SDG 4', q1: 72, q2: 73, q3: 74, q4: 75 },
      { goal: 'SDG 6', q1: 60, q2: 61, q3: 63, q4: 64 },
      { goal: 'SDG 7', q1: 68, q2: 70, q3: 71, q4: 72 }
    ];

    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-5 rounded-lg">
          <h2 className="text-2xl font-bold">Strategic Analytics & Performance Insights</h2>
          <p className="text-sm mt-2">Comprehensive analysis and actionable recommendations</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Current vs Target Performance</h3>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" style={{ fontSize: '11px' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Current" dataKey="A" stroke="#F97316" fill="#F97316" fillOpacity={0.6} />
                <Radar name="Target" dataKey="B" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Year-over-Year Progress</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={yearlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" angle={-45} textAnchor="end" height={60} style={{ fontSize: '10px' }} />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="achieved" stroke="#10B981" strokeWidth={3} name="Achieved" />
                <Line type="monotone" dataKey="target" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Quarterly SDG Trends</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={goalWiseProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="goal" style={{ fontSize: '11px' }} />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Line type="monotone" dataKey="q1" stroke="#E5243B" name="Q1" />
                <Line type="monotone" dataKey="q2" stroke="#DDA63A" name="Q2" />
                <Line type="monotone" dataKey="q3" stroke="#4C9F38" name="Q3" />
                <Line type="monotone" dataKey="q4" stroke="#26BDE2" name="Q4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Target Achievement Rate</h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={sdgOverviewData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="goal" style={{ fontSize: '11px' }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#8B5CF6" name="Achievement %">
                  {sdgOverviewData.map((entry, index) => {
                    const achievement = (entry.progress / entry.target) * 100;
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={achievement >= 80 ? '#10B981' : achievement >= 60 ? '#F59E0B' : '#EF4444'}
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Multi-Year SDG Trajectory</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" style={{ fontSize: '11px' }} />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '10px' }} />
                <Area type="monotone" dataKey="poverty" stackId="1" stroke="#E5243B" fill="#E5243B" fillOpacity={0.6} name="Poverty" />
                <Area type="monotone" dataKey="education" stackId="2" stroke="#C5192D" fill="#C5192D" fillOpacity={0.6} name="Education" />
                <Area type="monotone" dataKey="health" stackId="3" stroke="#4C9F38" fill="#4C9F38" fillOpacity={0.6} name="Health" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Priority Action Areas</h3>
            <div className="space-y-2">
              <div className="border-l-4 border-red-500 pl-3 py-2 bg-red-50">
                <div className="font-semibold text-red-700 text-sm">High Priority</div>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Climate Action (55%)</li>
                  <li>• Gender Equality (58%)</li>
                  <li>• Sustainable Cities (59%)</li>
                </ul>
              </div>
              <div className="border-l-4 border-yellow-500 pl-3 py-2 bg-yellow-50">
                <div className="font-semibold text-yellow-700 text-sm">Medium Priority</div>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Zero Hunger (62%)</li>
                  <li>• Clean Water (64%)</li>
                  <li>• Economic Growth (66%)</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-3 py-2 bg-green-50">
                <div className="font-semibold text-green-700 text-sm">On Track</div>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Quality Education (75%)</li>
                  <li>• Clean Energy (72%)</li>
                  <li>• Good Health (71%)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Key Achievements 2024</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-green-800">Water Access +10%</div>
                  <div className="text-gray-600">82.5% coverage achieved</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-green-800">Literacy Rate +7%</div>
                  <div className="text-gray-600">Now at 75.2%</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-green-800">Renewable Energy +10%</div>
                  <div className="text-gray-600">28.3% of total energy</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-green-50 rounded">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-green-800">Poverty Reduction</div>
                  <div className="text-gray-600">4.7% decrease since 2020</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-3 text-gray-800">Strategic Recommendations</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-blue-800">Climate Budget</div>
                  <div className="text-gray-600">Increase allocation by 35%</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-blue-800">Nutrition Drive</div>
                  <div className="text-gray-600">Launch state-wide campaign</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-blue-800">District Focus</div>
                  <div className="text-gray-600">Priority support for 3 districts</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-2 bg-blue-50 rounded">
                <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-blue-800">Data Enhancement</div>
                  <div className="text-gray-600">Real-time monitoring system</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">SDG Implementation Roadmap 2025-2030</h3>
          <div className="grid grid-cols-6 gap-2 text-xs">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2025</div>
              <div className="text-xs opacity-90">Foundation Phase</div>
              <div className="mt-2 text-xs">Target: 72%</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2026</div>
              <div className="text-xs opacity-90">Acceleration</div>
              <div className="mt-2 text-xs">Target: 76%</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2027</div>
              <div className="text-xs opacity-90">Consolidation</div>
              <div className="mt-2 text-xs">Target: 80%</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2028</div>
              <div className="text-xs opacity-90">Optimization</div>
              <div className="mt-2 text-xs">Target: 84%</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2029</div>
              <div className="text-xs opacity-90">Excellence</div>
              <div className="mt-2 text-xs">Target: 88%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 rounded">
              <div className="font-bold mb-1">2030</div>
              <div className="text-xs opacity-90">Achievement</div>
              <div className="mt-2 text-xs">Target: 92%</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold mb-3 text-gray-800">Dashboard Maintenance & Update Schedule</h3>
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
              <div className="font-semibold text-blue-800 mb-1">Daily Updates</div>
              <div className="text-gray-700">• Health metrics<br />• Water quality<br />• Energy consumption</div>
            </div>
            <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
              <div className="font-semibold text-green-800 mb-1">Weekly Updates</div>
              <div className="text-gray-700">• Education enrollment<br />• Employment data<br />• District reports</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
              <div className="font-semibold text-yellow-800 mb-1">Monthly Updates</div>
              <div className="text-gray-700">• Poverty indicators<br />• Budget tracking<br />• SDG progress</div>
            </div>
            <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
              <div className="font-semibold text-purple-800 mb-1">Quarterly Updates</div>
              <div className="text-gray-700">• Comprehensive review<br />• Policy assessment<br />• Strategic planning</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-lg text-center">
          <p className="text-sm">Developed under MPRNA | Supported by GIZ Indo-German Partnership for Green & Sustainable Development</p>
          <p className="text-xs mt-1 opacity-75">Dashboard Version 1.0 | Last Updated: October 2025 | Next Review: January 2026</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {currentPage === 1 && <Page1 />}
        {currentPage === 2 && <Page2 />}
        {currentPage === 3 && <Page3 />}

        <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} font-semibold transition hover:bg-blue-500 hover:text-white`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            disabled={currentPage === 3}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SDGDashboard;