import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export function FeatureCard({ icon, title, description, iconBg, iconColor }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
      <div 
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${iconBg}`}
      >
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
