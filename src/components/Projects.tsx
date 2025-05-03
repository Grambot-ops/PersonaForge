import React, { useState } from "react";
import projectData from "../data/projects.json"; // Import data from JSON

const Projects: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null);

  const openLightbox = (projectId: number) => {
    const project = projectData.find((p) => p.id === projectId);
    if (project && project.videoUrl) {
      setVideoLightbox(project.videoUrl);
    } else {
      setLightboxImage(`/projects/project${projectId}.png`);
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setVideoLightbox(null);
  };

  // Handle Escape key to close lightbox
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div key={project.id} className="card hover:translate-y-[-5px]">
            <h3 className="text-xl font-bold mb-3 text-blue-700">
              {project.title}
            </h3>
            <p className="text-gray-800 font-medium mb-4">
              {project.description}
            </p>

            <div className="space-y-3 text-gray-600">
              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">
                  Context
                </h4>
                <p>{project.context}</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">
                  Background
                </h4>
                <p>{project.background}</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">
                  Key Realizations
                </h4>
                <p>{project.realizations}</p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 mb-1">
                  Learnings
                </h4>
                <p>{project.learnings}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg flex justify-center">
              {project.videoUrl ? (
                <div
                  className="relative cursor-pointer"
                  onClick={() => openLightbox(project.id)}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <img
                    src="https://img.youtube.com/vi/Z2LBS0gXR6E/0.jpg"
                    alt={project.title}
                    className="max-h-40 rounded shadow hover:opacity-90 transition-opacity"
                  />
                </div>
              ) : (
                <img
                  src={`/projects/project${project.id}.png`}
                  alt={`${project.title} - Screenshot`} // More descriptive alt text
                  className="max-h-40 rounded shadow cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(project.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50 p-4" // Darker, consistent background
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg shadow-2xl overflow-hidden">
            <img
              src={lightboxImage}
              alt="Project Detail View" // Updated alt text
              className="block max-w-full max-h-[90vh] object-contain" // Ensure image fits well
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-white text-xl font-bold" // Adjusted close button style
              onClick={closeLightbox}
              aria-label="Close image lightbox" // Accessibility
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Video Lightbox */}
      {videoLightbox && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50 p-4" // Darker, consistent background
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={videoLightbox}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full" // Removed rounded here, applied to parent
                title="Project Video"
              ></iframe>
            </div>
            <button
              className="absolute top-2 right-2 bg-white/80 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-white text-xl font-bold" // Adjusted close button style
              onClick={closeLightbox}
              aria-label="Close video lightbox" // Accessibility
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
