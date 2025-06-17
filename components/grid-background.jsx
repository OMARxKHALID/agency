export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0f1117]">
      <div className="grid-container">
        <div className="w-full h-full pointer-events-none grid-layout">
          {[...Array(6)].map((_, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {[...Array(6)].map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="grid-cell" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
