import React, { useState, useEffect, useCallback } from "react";
import projectData from "../data/projects.json";

const Projects: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null);
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  const openLightbox = (projectId: number) => {
    const project = projectData.find((p) => p.id === projectId);
    setFocusedProject(projectId);

    if (project && project.videoUrl) {
      setVideoLightbox(project.videoUrl);
    } else {
      setLightboxImage(`/projects/project${projectId}.png`);
    }
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setVideoLightbox(null);
    setFocusedProject(null);
  };

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          if (focusedProject !== null && focusedProject < projectData.length) {
            openLightbox(focusedProject + 1);
          }
          break;
        case "ArrowLeft":
          if (focusedProject !== null && focusedProject > 1) {
            openLightbox(focusedProject - 1);
          }
          break;
        default:
          break;
      }
    },
    [focusedProject]
  );

  // Handle keyboard events
  useEffect(() => {
    if (lightboxImage || videoLightbox) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [lightboxImage, videoLightbox, handleKeyDown]);

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectData.map((project) => {
          const videoId = project.videoUrl
            ? getYouTubeVideoId(project.videoUrl)
            : null;
          const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/0.jpg`
            : `/projects/project${project.id}.png`;

          return (
            <div
              key={project.id}
              className="card hover:translate-y-[-5px]"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") openLightbox(project.id);
              }}
            >
              <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">
                {project.title}
              </h3>
              <p className="text-[var(--text-color)] font-medium mb-4">
                {project.description}
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-[var(--muted-text-color)] mb-1">
                    Context
                  </h4>
                  <p className="text-[var(--text-color)]">{project.context}</p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-[var(--muted-text-color)] mb-1">
                    Background
                  </h4>
                  <p className="text-[var(--text-color)]">
                    {project.background}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-[var(--muted-text-color)] mb-1">
                    Key Realizations
                  </h4>
                  <p className="text-[var(--text-color)]">
                    {project.realizations}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-[var(--muted-text-color)] mb-1">
                    Learnings
                  </h4>
                  <p className="text-[var(--text-color)]">
                    {project.learnings}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-100 dark:bg-slate-800 rounded-lg flex justify-center">
                {project.videoUrl && videoId ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => openLightbox(project.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View video for ${project.title}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[var(--primary-color)] text-white rounded-full w-12 h-12 flex items-center justify-center">
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
                      src={thumbnailUrl}
                      alt={`${project.title} - Video Thumbnail`}
                      className="max-h-40 rounded shadow hover:opacity-90 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img
                    src={`/projects/project${project.id}.png`}
                    alt={`${project.title} - Screenshot`}
                    className="max-h-40 rounded shadow cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(project.id)}
                    loading="lazy"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") openLightbox(project.id);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Lightbox with improved accessibility */}
      {lightboxImage && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-4xl max-h-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <img
              src={lightboxImage}
              alt="Project Detail View"
              className="block max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-center">
              <p className="text-sm">
                Use arrow keys to navigate between projects, ESC to close
              </p>
            </div>
            <button
              className="absolute top-2 right-2 bg-white/80 dark:bg-gray-700/80 text-black dark:text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-gray-600 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close image lightbox"
              tabIndex={0}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Video Lightbox with improved accessibility */}
      {videoLightbox && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Video lightbox"
        >
          <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={videoLightbox}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="Project Video"
              ></iframe>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 text-white text-center">
              <p className="text-sm">
                Use arrow keys to navigate between projects, ESC to close
              </p>
            </div>
            <button
              className="absolute top-2 right-2 bg-white/80 dark:bg-gray-700/80 text-black dark:text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-gray-600 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close video lightbox"
              tabIndex={0}
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
