import Counter from "../ui/counter";
import { BookOpen, Users, FileText } from 'lucide-react';

const StatCard = ({ 
  value, 
  speed = 10, 
  label, 
  highlight, 
  icon: Icon 
}: { 
  value: number; 
  speed?: number; 
  label: string; 
  highlight: string; 
  icon: React.ElementType 
}) => (
  <div className="group relative w-full sm:w-auto flex-1 flex items-center gap-4 p-4 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-500/30">
    <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="flex flex-col">
      <div className="flex items-baseline gap-2">
        <Counter 
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent" 
          value={value} 
          speed={speed} 
        />
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">+</span>
      </div>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 whitespace-nowrap">
        <span className="font-semibold text-blue-600 dark:text-blue-400">{highlight}</span> {label}
      </p>
    </div>
  </div>
);

export default function CounterStat() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 py-6">
      <StatCard 
        value={129} 
        speed={15} 
        highlight="Concepts" 
        label="to Practice"
        icon={BookOpen}
      />
      <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700 mx-2"></div>
      <StatCard 
        value={201} 
        speed={20} 
        highlight="People" 
        label="using now"
        icon={Users}
      />
      <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700 mx-2"></div>
      <StatCard 
        value={207} 
        speed={18} 
        highlight="Quizzes" 
        label="to play"
        icon={FileText}
      />
    </div>
  );
}
