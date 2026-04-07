export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <iframe
        src="https://my.spline.design/particles-cFaKkMRVlzUJnuPbK9on8vQy/"
        frameBorder="0"
        className="w-full h-full"
        title="Star Particle Background"
        style={{ opacity: 0.55 }}
      />
      {/* Covers the "Move your mouse." hint text baked into the Spline scene */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '80px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.95) 30%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
