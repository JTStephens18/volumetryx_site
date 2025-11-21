import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { X, Play } from 'lucide-react';
// import innovationDepotImage from '../assets/ID_main_event_space.png';
import MotorcycleImage from '../../assets/Motorcycle.png';
import PotteryMuseumImage from '../../assets/PotteryMuseum.png';
import TrexImage from '../../assets/Trex.png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    // {
    //   id: 1,
    //   title: "Modern Villa Estate",
    //   location: "Beverly Hills, CA",
    //   size: "8,500 sq ft",
    //   image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1OTQxNzMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "A stunning contemporary villa with panoramic city views, featuring an open-plan design and luxury finishes throughout."
    // },
    // {
    //   id: 2,
    //   title: "Downtown Penthouse",
    //   location: "Manhattan, NY",
    //   size: "3,200 sq ft",
    //   image: "https://images.unsplash.com/photo-1662454419622-a41092ecd245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1OTM5ODM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "Luxury penthouse apartment with floor-to-ceiling windows and spectacular skyline views in the heart of Manhattan."
    // },
    // {
    //   id: 3,
    //   title: "Gourmet Kitchen Suite",
    //   location: "Malibu, CA",
    //   size: "5,800 sq ft",
    //   image: "https://images.unsplash.com/photo-1722649957265-372809976610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBraXRjaGVufGVufDF8fHx8MTc1OTQxNzMxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "Chef's paradise featuring top-of-the-line appliances and custom cabinetry in a stunning oceanfront home."
    // },
    // {
    //   id: 4,
    //   title: "Virtual Reality Showcase",
    //   location: "San Francisco, CA",
    //   size: "4,200 sq ft",
    //   image: "https://images.unsplash.com/photo-1616092017315-e54c88662814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFsJTIwZXN0YXRlJTIwdmlydHVhbCUyMHRvdXJ8ZW58MXx8fHwxNzU5NDE3MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "Innovative tech-enabled home featuring smart automation and cutting-edge design elements throughout."
    // },
    // {
    //   id: 5,
    //   title: "Architectural Marvel",
    //   location: "Austin, TX",
    //   size: "6,100 sq ft",
    //   image: "https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTkzNjg4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "Bold contemporary design with unique geometric features and sustainable building materials."
    // },
    // {
    //   id: 6,
    //   title: "Luxury Interior Design",
    //   location: "Miami, FL",
    //   size: "3,800 sq ft",
    //   image: "https://images.unsplash.com/photo-1706809019104-02d83b4541ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yJTIwM0R8ZW58MXx8fHwxNzU5NDE3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   description: "Sophisticated interior spaces with custom furnishings and premium materials throughout this waterfront residence."
    // },
    {
      id: 1,
      title: "Motorcycle",
      // location: "Chicago, IL",
      // size: "1,500 sq ft",
      image: MotorcycleImage,
      description: "Technical demo showcasing a motorcycle. Credit to asolab.",
      splat: "https://superspl.at/s?id=891a7694"
    }, 
    {
      id: 2,
      title: "Pottery Museum",
      // location: "California, USA",
      // size: "2,000 sq ft",
      image: PotteryMuseumImage,
      description: "Technical demo of a pottery museum. Credit to scanthecity.",
      splat: "https://superspl.at/s?id=99dbe907"
    }, 
    {
      id: 3,
      title: "T-Rex Model",
      // location: "Florida, USA",
      // size: "2,500 sq ft",
      image: TrexImage,
      description: "Technical demo featuring a T-Rex model. Credit to romagnoli.",
      splat: "https://superspl.at/s?id=ab7522d0"
    }, 
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8">
            Explore Our Digital Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step inside our portfolio of immersive 3D collections that are preserving history and engaging a global audience.
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
                    {/* <p className="text-sm text-gray-600 mb-1">{project.location}</p> */}
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
                    {/* <p className="text-gray-600 mb-2">{project.location}</p> */}
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