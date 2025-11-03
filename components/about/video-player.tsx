'use client';

import React from 'react';

interface VideoPlayerProps {
  video: {
    type: 'youtube' | 'tiktok' | 'local';
    url: string;
  };
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const getEmbedUrl = () => {
    if (video.type === 'youtube') {
      const videoId = video.url.split('v=')[1] || video.url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (video.type === 'tiktok') {
      return video.url;
    }
    return video.url;
  };

  if (video.type === 'local') {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        <video
          controls
          className="w-full h-full"
          src={video.url}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (video.type === 'youtube') {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          src={getEmbedUrl()}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (video.type === 'tiktok') {
    return (
      <div className="relative w-full rounded-lg overflow-hidden bg-black p-8 text-center">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          <span className="text-2xl">📱</span>
          Watch on TikTok
        </a>
      </div>
    );
  }

  return null;
};