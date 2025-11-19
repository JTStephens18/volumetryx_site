// import { Home, Building2, Landmark, Box, Video, Building } from "lucide-react";
// import { NavigationCard } from "../components/HomePageCard";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
// import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate

// // Navigation items configuration - easily extendable
// // NOTE: I've added a 'path' property for navigation.
// const navigationItems = [
//   { icon: Home, label: "Residential Real Estate", path: "/re" },
//   { icon: Building2, label: "Commercial Real Estate", path: "/cre" },
//   { icon: Landmark, label: "Museums / Digital Preservation", path: "/museum" },
//   { icon: Box, label: "Product Visualization", path: "/products" },
//   { icon: Video, label: "Virtual Production", path: "/production" },
//   { icon: Building, label: "Event Venues", path: "/venues" },
// ];

// export default function App() {
//   // 👈 Initialize the hook
//   const navigate = useNavigate();

//   // Update handler to use React Router navigation
//   const handleNavigationClick = (path: string) => {
//     console.log(`Navigating to: ${path}`);
//     navigate(path); // 👈 Use navigate to change the route
//   };

//   return (
//     // NOTE: bg-gradient-to-br from-slate-50 to-blue-50 provides the gentle site background
//     <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      
//       {/* Subtle background pattern (Blob effects enhanced) */}
//       <div className="absolute inset-0 z-0">
//         {/* Ambient light effects - LARGER and HIGHER OPACITY */}
//         <div className="absolute top-[-5rem] right-[5rem] w-[40rem] h-[40rem] bg-blue-500/40 rounded-full blur-[150px]" /> 
//         <div className="absolute bottom-[-10rem] left-[10rem] w-[50rem] h-[50rem] bg-purple-600/30 rounded-full blur-[200px]" />
//       </div>

//       {/* Main Content */}
//       <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          
//           {/* Title Section */}
//           <div className="text-center space-y-4">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-900">
//               Innovative 3D Visualization
//             </h1>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//               & Consulting
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-6">
//               Transform your vision into immersive digital experiences with cutting-edge 3D visualization technology
//             </p>
//           </div>

//           {/* Navigation Grid */}
//           <div className="w-full max-w-5xl">
//             <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               {navigationItems.map((item, index) => (
//                 <NavigationCard
//                   key={index}
//                   icon={item.icon}
//                   label={item.label}
//                   // 👈 Pass the path to be used by the onClick handler
//                   onClick={() => handleNavigationClick(item.path)} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Optional: Scroll indicator or additional CTA */}
//           {/* <div className="mt-8 flex flex-col items-center gap-2 text-gray-500">
//             <p className="text-sm">Explore Our Services</p>
//             <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
//           </div> */}
//         </div>
//       </main>
//     </div>
//   );
// }

import { Home, Building2, Landmark, Box, Video, Building } from "lucide-react";
import { NavigationCard } from "../components/HomePageCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";

// Navigation items configuration - easily extendable
const navigationItems = [
  { icon: Home, label: "Residential Real Estate", path: "/re" },
  { icon: Building2, label: "Commercial Real Estate", path: "/cre" },
  { icon: Landmark, label: "Museums / Digital Preservation", path: "/museum" },
  { icon: Box, label: "Product Visualization", path: "/products" },
  { icon: Video, label: "Virtual Production", path: "/production" },
  { icon: Building, label: "Event Venues", path: "/venues" },
];

export default function App() {
  const navigate = useNavigate();

  const handleNavigationClick = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <>
      <style>{`
        .homepage-container {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(to bottom right, #f8fafc, #eff6ff);
        }

        .background-effects {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .blob-blue {
          position: absolute;
          top: -5rem;
          right: 5rem;
          width: 40rem;
          height: 40rem;
          background-color: rgba(59, 130, 246, 0.4);
          border-radius: 9999px;
          filter: blur(150px);
        }

        .blob-purple {
          position: absolute;
          bottom: -10rem;
          left: 10rem;
          width: 50rem;
          height: 50rem;
          background-color: rgba(147, 51, 234, 0.3);
          border-radius: 9999px;
          filter: blur(200px);
        }

        .main-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
        }

        .title-section {
          text-align: center;
        }

        .title-section > div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-title {
          font-size: 2.25rem;
          color: #0f172a;
          margin: 0;
        }

        .gradient-title {
          font-size: 2.25rem;
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0;
        }

        .subtitle {
          color: #4b5563;
          max-width: 42rem;
          margin: 1.5rem auto 0;
        }

        .navigation-section {
          width: 100%;
          max-width: 64rem;
        }

        .navigation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .main-content {
            padding: 3rem 1.5rem;
          }

          .main-title,
          .gradient-title {
            font-size: 3rem;
          }
        }

        @media (min-width: 768px) {
          .content-wrapper {
            gap: 4rem;
          }

          .navigation-grid {
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .main-content {
            padding: 3rem 2rem;
          }

          .main-title,
          .gradient-title {
            font-size: 3.75rem;
          }

          .navigation-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="homepage-container">
        {/* Subtle background pattern (Blob effects enhanced) */}
        <div className="background-effects">
          <div className="blob-blue" />
          <div className="blob-purple" />
        </div>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-wrapper">
            {/* Title Section */}
            <div className="title-section">
              <div>
                <h1 className="main-title">
                  Innovative 3D Visualization
                </h1>
                <h1 className="gradient-title">
                  & Consulting
                </h1>
                <p className="subtitle">
                  Transform your vision into immersive digital experiences with cutting-edge 3D visualization technology
                </p>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="navigation-section">
              <div className="navigation-grid">
                {navigationItems.map((item, index) => (
                  <NavigationCard
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    onClick={() => handleNavigationClick(item.path)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}