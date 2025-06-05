export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-slate-100 to-slate-200" />
      <div className="w-full h-full grid-layout">
        {[...Array(6)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {[...Array(6)].map((_, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="grid-cell" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
