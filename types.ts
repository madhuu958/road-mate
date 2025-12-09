
export interface Hazard {
  type: string;
  severity: 'Low' | 'Medium' | 'High';
  description: string;
  recommendation: string;
}

export interface VisionResult {
  hazards: Hazard[];
  overallSeverity: 'Low' | 'Medium' | 'High';
  locationContext?: string;
  inputType: 'image' | 'video' | 'audio';
  transcript?: string; // New field for Audio-to-Text
}

export interface AccidentRecord {
  id: number;
  location: string;
  date: string;
  time: string;
  severity: 'Minor' | 'Major' | 'Fatal';
  cause: string;
  weather: string;
}

export interface AnalyticsSummary {
  totalAccidents: number;
  highRiskLocations: { name: string; count: number }[];
  commonCauses: { name: string; count: number }[];
  timeDistribution: { name: string; count: number }[];
}

export interface Authority {
  id: string;
  name: string;
  role: string;
  department: string;
  contact: string;
  matchScore?: number; // 0-100 relevance score
  matchReason?: string; // Why this person is correct/incorrect
}

export type Tab = 'vision' | 'analytics' | 'reporting';
export type Language = 'English' | 'Hindi' | 'Tamil' | 'Telugu' | 'Kannada' | 'Malayalam' | 'Spanish' | 'French';

export type InputMode = 'image' | 'video' | 'audio';