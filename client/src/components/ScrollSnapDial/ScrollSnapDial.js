import { useRef } from 'react';
import './ScrollSnapDial.css';

const ScrollSnapDial = ({ min, max, value, onChange }) => {
  const startX = useRef(0);
  const isDragging = useRef(false);

  const itemWidth = 60;
  const border = 4;
  const boxTotalWidth = itemWidth + border; // 64
  const gap = 16;
  const count = max - min + 1;
  const totalWidth = count * (boxTotalWidth + gap) - gap;
  
  const index = value - min;
  const highlightLeft = index * (boxTotalWidth + gap) + boxTotalWidth / 2;

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX ?? e.touches?.[0].clientX ?? 0;
    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX ?? e.touches?.[0].clientX ?? 0;
    const diff = currentX - startX.current;

    if (diff > 30 && value > min) {
      onChange(value - 1);
      isDragging.current = false;
    } else if (diff < -30 && value < max) {
      onChange(value + 1);
      isDragging.current = false;
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="dial-container"
      style={{ width: totalWidth }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onTouchCancel={handlePointerUp}
    >
      <div className="highlight-box" style={{ left: highlightLeft }} />
      {Array.from({ length: count }, (_, i) => {
        const val = min + i;
        return (
          <div
            key={val}
            className={`dial-item ${val === value ? 'active' : ''}`}
            onClick={() => onChange(val)}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollSnapDial;