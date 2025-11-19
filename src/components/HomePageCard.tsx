import { type LucideIcon } from "lucide-react";
import "../styles/navigationCard.css";

interface NavigationCardProps {
  icon: LucideIcon;
  label: string;
  // onClick is now required to trigger the navigation
  onClick: () => void;
}

export function NavigationCard({ icon: Icon, label, onClick }: NavigationCardProps) {
  return (
    <button
      onClick={onClick}
      className="navigation-card" // Replaced Tailwind classes
    >
      {/* Icon */}
      <div className="navigation-card-icon-wrapper"> {/* Replaced Tailwind classes */}
        <Icon className="icon-main" />
      </div>

      {/* Label */}
      <span className="navigation-card-label"> {/* Replaced Tailwind classes */}
        {label}
      </span>

      {/* Subtle glow effect */}
      <div className="navigation-card-glow" aria-hidden="true" />
    </button>
  );
}