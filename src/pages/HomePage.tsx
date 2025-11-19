import { Home, Building2, Landmark, Box, Video, Building } from "lucide-react";
import { NavigationCard } from "../components/HomePageCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate

// Navigation items configuration - easily extendable
// NOTE: I've added a 'path' property for navigation.
const navigationItems = [
  { icon: Home, label: "Residential Real Estate", path: "/re" },
  { icon: Building2, label: "Commercial Real Estate", path: "/cre" },
  { icon: Landmark, label: "Museums / Digital Preservation", path: "/museum" },
  { icon: Box, label: "Product Visualization", path: "/products" },
  { icon: Video, label: "Virtual Production", path: "/production" },
  { icon: Building, label: "Event Venues", path: "/venues" },
];

export default function App() {
  // 👈 Initialize the hook
  const navigate = useNavigate();

  // Update handler to use React Router navigation
  const handleNavigationClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
    navigate(path); // 👈 Use navigate to change the route
  };

  return (
    // NOTE: bg-gradient-to-br from-slate-50 to-blue-50 provides the gentle site background
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Subtle background pattern (Blob effects enhanced) */}
      <div className="absolute inset-0 z-0">
        {/* Ambient light effects - LARGER and HIGHER OPACITY */}
        <div className="absolute top-[-5rem] right-[5rem] w-[40rem] h-[40rem] bg-blue-500/40 rounded-full blur-[150px]" /> 
        <div className="absolute bottom-[-10rem] left-[10rem] w-[50rem] h-[50rem] bg-purple-600/30 rounded-full blur-[200px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-900">
              Innovative 3D Visualization
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              & Consulting
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Transform your vision into immersive digital experiences with cutting-edge 3D visualization technology
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {navigationItems.map((item, index) => (
                <NavigationCard
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  // 👈 Pass the path to be used by the onClick handler
                  onClick={() => handleNavigationClick(item.path)} 
                />
              ))}
            </div>
          </div>

          {/* Optional: Scroll indicator or additional CTA */}
          {/* <div className="mt-8 flex flex-col items-center gap-2 text-gray-500">
            <p className="text-sm">Explore Our Services</p>
            <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
          </div> */}
        </div>
      </main>
    </div>
  );
}