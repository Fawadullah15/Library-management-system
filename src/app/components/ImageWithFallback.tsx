import { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="flex items-center justify-center bg-warm-beige"
        style={{ width: '100%', height: '100%' }}
      >
        <span style={{ color: 'var(--soft-grey)', fontSize: '0.9rem', fontWeight: 300 }}>
          {alt}
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setError(true)} {...props} />;
}
