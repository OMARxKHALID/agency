export function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#1d2027]">
      <div className="grid-container" style={{ "--grid-color": "0, 0, 0" }}>
        <div className="w-full h-full pointer-events-none grid-layout">
          {[...Array(15)].map((_, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {[...Array(15)].map((_, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="grid-cell" />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full h-full pointer-events-none grid-layout"
        style={{ "--grid-color": "255, 255, 255" }}
      >
        {[...Array(15)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {[...Array(15)].map((_, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="grid-cell" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
