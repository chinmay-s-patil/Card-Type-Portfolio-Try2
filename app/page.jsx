import ResponsiveContainer from './components/ResponsiveContainer'

export default function Page() {
  return (
    <ResponsiveContainer>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
        <h1 style={{ fontSize: '56px', marginBottom: '24px', fontWeight: '700' }}>
          Responsive Container Demo
        </h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '65ch' }}>
          This container automatically scales its content based on viewport size.
          Base reference is 1920x1080.
        </p>
      </div>
    </ResponsiveContainer>
  )
}