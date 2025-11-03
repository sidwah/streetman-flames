'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  videoType?: 'youtube' | 'tiktok' | 'local';
}

interface ImageGalleryProps {
  images: string[];
  title: string;
  video?: {
    type: 'youtube' | 'tiktok' | 'local';
    url: string;
  };
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, video }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    ...images.map(img => ({ type: 'image' as const, url: img })),
    ...(video ? [{ type: 'video' as const, url: video.url, videoType: video.type }] : []),
  ];

  const openLightbox = (index: number) => {
    setCurrentItemIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentItemIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToNext = () => {
    setCurrentItemIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const getVideoEmbedUrl = (url: string, type: string) => {
    if (type === 'youtube') {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const currentItem = galleryItems[currentItemIndex];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            {item.type === 'video' ? (
              <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand-red/20" />
                <div className="relative flex flex-col items-center gap-2 z-10">
                  <Play className="w-12 h-12 text-white" />
                  <span className="text-xs font-semibold text-white">Video</span>
                </div>
              </div>
            ) : (
              <Image
                src={item.url}
                alt={`${title} gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="w-6 h-6 text-primary" />
                ) : (
                  <span className="text-2xl">🔍</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={currentItemIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.type === 'video' ? (
                <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                  {currentItem.videoType === 'youtube' ? (
                    <iframe
                      src={getVideoEmbedUrl(currentItem.url, currentItem.videoType)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : currentItem.videoType === 'local' ? (
                    <video
                      controls
                      className="w-full h-full"
                      src={currentItem.url}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
                      <a
                        href={currentItem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg"
                      >
                        <span className="text-3xl">📱</span>
                        Watch on TikTok
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative aspect-square max-h-[80vh] bg-black rounded-lg overflow-hidden">
                  <Image
                    src={currentItem.url}
                    alt={`${title} image ${currentItemIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                </div>
              )}
            </motion.div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {currentItemIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};