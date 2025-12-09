import React, { useState } from 'react';
import { Eye, BarChart2, FileText, Activity, Globe, Shield, Info, X } from 'lucide-react';
import VisualIntelligence from './components/VisualIntelligence';
import DataAnalytics from './components/DataAnalytics';
import CivicReporting from './components/CivicReporting';
import { Hazard, Tab, Language } from './types';
import { translations } from './utils/translations';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('vision');
  const [language, setLanguage] = useState<Language>('English');
  const [showAbout, setShowAbout] = useState(false);
  
  // Shared State
  const [detectedHazard, setDetectedHazard] = useState<Hazard | null>(null);
  const [highRiskLocation, setHighRiskLocation] = useState<string>("");
  const [statsSummary, setStatsSummary] = useState<string>("");

  const t = translations[language]; // Get current language strings

  const projectDescription = "RoadMate is a comprehensive Smart Road-Safety System designed to enhance urban infrastructure through the power of Multimodal AI. The system functions as a unified platform that seamlessly integrates visual detection, data-driven analytics, and automated civic reporting to address road safety challenges effectively.\n\nThe process begins with intelligent visual analysis, where the system utilizes computer vision to examine real-time images and videos. It instantly detects road hazards such as potholes, waterlogging, cracks, and broken signage, while simultaneously assessing their severity to prioritize maintenance efforts. This capability allows users to capture evidence of infrastructure issues on the spot.\n\nBuilding on this visual data, the system incorporates a robust analytics engine that processes historical accident records. By analyzing key metrics—including accident frequency, high-risk locations, common causes, and time-of-day patterns—it identifies dangerous hotspots and provides actionable insights. This data-driven approach helps visualize safety trends, offering a clear understanding of where interventions are most needed.\n\nFinally, to bridge the gap between detection and action, the system automates the civic reporting process. It synthesizes the detected hazard evidence and location-specific accident data to draft formal, professionally structured complaint letters. These reports are intelligently addressed to the relevant municipal authorities, ensuring that every observation is transformed into an actionable request for repair, thereby fostering safer roads and more responsive civic management.";

  return (
    <div className="min-h-screen font-sans text-slate-600 pb-12 selection:bg-brand-100 selection:text-brand-900">
      {/* Navbar */}
      <nav className="glass-card sticky top-0 z-50 border-b border-white/50 shadow-sm backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28">
            {/* Logo */}
            <div className="flex items-center gap-5 group cursor-pointer" onClick={() => setActiveTab('vision')}>
              <div className="bg-gradient-to-tr from-brand-900 to-brand-600 p-4 rounded-2xl shadow-xl shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-black tracking-wide bg-gradient-to-r from-brand-950 via-brand-800 to-brand-600 bg-clip-text text-transparent drop-shadow-sm select-none">
                  ROADMATE
                </h1>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-[0.35em] uppercase mt-1 pl-1 group-hover:text-brand-600 transition-colors">
                  Intelligent Safety Grid
                </p>
              </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:flex bg-white/60 p-1.5 rounded-2xl border border-white/60 shadow-inner backdrop-blur-sm">
              {[
                { id: 'vision', label: t.tabs.vision, icon: Eye },
                { id: 'analytics', label: t.tabs.analytics, icon: BarChart2 },
                { id: 'reporting', label: t.tabs.reporting, icon: FileText },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`flex items-center px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                      isActive 
                        ? 'bg-white text-brand-900 shadow-md transform scale-100 ring-1 ring-black/5' 
                        : 'text-slate-400 hover:text-slate-600 hover:bg-white/40'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-2.5 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowAbout(true)}
                className="p-3 rounded-xl bg-white/50 border border-white hover:bg-brand-50 hover:text-brand-600 transition-all text-slate-400"
                title="About Project"
              >
                <Info className="w-5 h-5" />
              </button>

              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 border border-white hover:border-brand-200 text-sm font-bold text-slate-600 transition-all shadow-sm hover:shadow-md">
                  <Globe className="w-5 h-5 text-brand-500" />
                  {language}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hidden group-hover:block animate-fade-in z-50 ring-1 ring-black/5">
                   {Object.keys(translations).map(lang => (
                     <button 
                        key={lang}
                        onClick={() => setLanguage(lang as Language)}
                        className="w-full text-left px-5 py-3 text-sm font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors border-b border-slate-50 last:border-0 text-slate-600"
                     >
                       {lang}
                     </button>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 z-50 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around p-3">
          {[
            { id: 'vision', icon: Eye, label: t.tabs.vision },
            { id: 'analytics', icon: BarChart2, label: t.tabs.analytics },
            { id: 'reporting', icon: FileText, label: t.tabs.reporting },
          ].map((tab) => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id as Tab)} 
               className={`flex flex-col items-center p-2 rounded-xl transition-all ${activeTab === tab.id ? 'text-brand-600' : 'text-slate-400'}`}
             >
               <div className={`p-1.5 rounded-lg mb-1 ${activeTab === tab.id ? 'bg-brand-50' : 'bg-transparent'}`}>
                  <tab.icon className="w-6 h-6" />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wide">{tab.label}</span>
             </button>
          ))}
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative border border-white/50">
            <div className="bg-gradient-to-r from-brand-900 to-brand-800 p-8 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">About RoadMate</h2>
                <p className="text-brand-200 text-sm font-medium uppercase tracking-widest">Project Overview</p>
              </div>
              <button 
                onClick={() => setShowAbout(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap font-medium text-justify">
                {projectDescription}
              </p>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-slate-400 text-sm">
                <span className="font-bold">B.Tech Major Project</span>
                <span>© 2024 RoadMate Systems</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="animate-fade-in-up">
          {activeTab === 'vision' && (
            <VisualIntelligence 
              language={language}
              onHazardDetected={(hazard) => {
                setDetectedHazard(hazard);
                // Optional: Show toast
              }}
              onProceed={() => setActiveTab('reporting')}
            />
          )}
          
          {activeTab === 'analytics' && (
            <DataAnalytics 
              onHighRiskLocationFound={(loc, summary) => {
                setHighRiskLocation(loc);
                setStatsSummary(summary);
              }} 
            />
          )}
          
          {activeTab === 'reporting' && (
            <CivicReporting 
              language={language}
              detectedHazard={detectedHazard} 
              highRiskLocation={highRiskLocation}
              statsSummary={statsSummary}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;