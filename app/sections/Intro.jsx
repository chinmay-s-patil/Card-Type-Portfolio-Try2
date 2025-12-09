export default function Landing() {
  return (
    <div className="split" style={{ height: '100%', alignItems: 'center', transform: 'scale(0.7)', transformOrigin: 'center' }}>
      <div
        className="hero-content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="kicker" style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', marginBottom: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
          Hello — I'm
        </div>
        <h1 style={{
          fontWeight: '800',
          fontSize: 'clamp(2rem, 5vw, 5rem)',
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 'clamp(0.75rem, 2vw, 1.5rem)'
        }}>
          Chinmay Patil
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, #14ffc8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fluid Simulations
          </span>{' '}
          & Visual Interfaces
        </h1>
        <p style={{
          color: 'var(--muted)',
          fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)',
          lineHeight: '1.6',
          maxWidth: '50ch',
          marginBottom: 'clamp(1rem, 2.5vw, 2rem)'
        }}>
          CFD engineer specializing in OpenFOAM and advanced visualization. I
          create reproducible simulation pipelines and build intuitive web
          interfaces that transform complex data into actionable insights for
          engineers and stakeholders.
        </p>

        <div style={{
          display: 'flex',
          gap: 'clamp(0.5rem, 1.5vw, 1rem)',
          flexWrap: 'wrap',
          marginTop: 'clamp(1rem, 2.5vw, 2rem)'
        }}>
          <a 
            className="btn bg-white text-slate-900" 
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: 'clamp(0.6rem, 1.2vw, 0.875rem) clamp(1rem, 2vw, 1.75rem)',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)'
            }}
          >
            <span>Explore Projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3L8 13M8 13L13 8M8 13L3 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a 
            className="btn bg-white/6 border border-white/10" 
            href="#experience"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: 'clamp(0.6rem, 1.2vw, 0.875rem) clamp(1rem, 2vw, 1.75rem)',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)'
            }}
          >
            <span>View Experience</span>
          </a>
        </div>

        <div style={{ height: 'clamp(1rem, 2.5vw, 2rem)' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
          width: '100%'
        }}>
          <div className="card" style={{
            padding: 'clamp(1rem, 2vw, 1.75rem)'
          }}>
            <strong
              style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
                display: 'block', 
                marginBottom: 'clamp(0.25rem, 0.8vw, 0.5rem)' 
              }}
            >
              Core Focus
            </strong>
            <div className="muted" style={{ 
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', 
              lineHeight: '1.6' 
            }}>
              CFD · OpenFOAM · Python · Next.js · Data Visualization
            </div>
          </div>
          <div className="card" style={{
            padding: 'clamp(1rem, 2vw, 1.75rem)'
          }}>
            <strong
              style={{ 
                fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
                display: 'block', 
                marginBottom: 'clamp(0.25rem, 0.8vw, 0.5rem)' 
              }}
            >
              Current Status
            </strong>
            <div className="muted" style={{ 
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', 
              lineHeight: '1.6',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'hsl(var(--accent))',
                  animation: 'pulse 2s infinite',
                  flexShrink: 0
                }}
              />
              Available for freelance & collaboration
            </div>
          </div>
        </div>
      </div>

      <aside className="portrait" aria-label="Chinmay Patil" style={{
        minHeight: 'clamp(300px, 40vh, 480px)',
        height: '100%',
        maxHeight: '600px'
      }}>
        <img
          src="/portrait.jpg"
          alt="Chinmay Patil - CFD Engineer and Developer"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </aside>
    </div>
  );
}