import './(my-app)/globals.css'
import './styles/prism.css'

// Simple passthrough layout to avoid nesting conflicts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 