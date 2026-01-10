import { useEffect, useState } from 'react';

const MapleLeaf = ({ style, delay }: { style: React.CSSProperties; delay: number }) => (
  <svg
    viewBox="0 0 100 100"
    className="absolute text-primary/10 animate-fall-leaf"
    style={{
      ...style,
      animationDelay: `${delay}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
    }}
  >
    <path
      fill="currentColor"
      d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z"
    />
  </svg>
);

const MapleLeafBackground = () => {
  const [leaves, setLeaves] = useState<Array<{ id: number; left: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 20 + Math.random() * 40,
      delay: Math.random() * 15,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Floating leaves */}
      {leaves.map((leaf) => (
        <MapleLeaf
          key={leaf.id}
          delay={leaf.delay}
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        />
      ))}

      {/* Static decorative leaves */}
      <div className="absolute top-20 left-10 w-32 h-32 text-primary/5 animate-float-leaf">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z" />
        </svg>
      </div>
      
      <div className="absolute bottom-40 right-20 w-40 h-40 text-primary/5 animate-float-leaf" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/4 w-24 h-24 text-accent/5 animate-float-leaf" style={{ animationDelay: '4s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5L55 25L75 15L65 35L85 40L65 50L80 70L55 60L50 95L45 60L20 70L35 50L15 40L35 35L25 15L45 25Z" />
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default MapleLeafBackground;
