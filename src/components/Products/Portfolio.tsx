import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { X, Play } from 'lucide-react';
// import innovationDepotImage from '../assets/ID_main_event_space.png';
import BeltAccessoryImage from '../../assets/BeltAccessory.png';
import MotorcycleImage from '../../assets/Motorcycle.png';
import SandwichImage from '../../assets/ChickenSandwich.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Leather Belt",
      // location: "Chicago, IL",
      // size: "1,500 sq ft",
      image: BeltAccessoryImage,
      description: "Credit to ryancain_xr.",
      splat: "https://superspl.at/s?id=7877ef2e"
    }, 
    {
      id: 2,
      title: "Motorcycle",
      // location: "California, USA",
      // size: "2,000 sq ft",
      image: MotorcycleImage,
      description: "Credit to asolab.",
      splat: "https://superspl.at/s?id=891a7694"
    }, 
    {
      id: 3,
      title: "Chicken Sandwich",
      // location: "Florida, USA",
      // size: "2,500 sq ft",
      image: SandwichImage,
      description: "Credit to tipatat.",
      splat: "https://superspl.at/s?id=d773c690"
    }, 
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            Explore Our Digital Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step inside our portfolio of stunning 3D product experiences that have transformed how consumers connect with inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{project.location}</p>
                    {/* <p className="text-sm text-gray-500">{project.size}</p> */}
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <iframe id="viewer" className="w-full h-full rounded-lg" allow="fullscreen; xr-spatial-tracking" src={project.splat}></iframe>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;