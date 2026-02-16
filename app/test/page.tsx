export default function TestPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page Works!</h1>
      <p>If you see this, your deployment is working.</p>
      <p>Date: {new Date().toISOString()}</p>
    </div>
  )
}