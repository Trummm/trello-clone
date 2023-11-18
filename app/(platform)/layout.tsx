import { ClerkProvider } from '@clerk/nextjs'

const LayoutPlatform = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default LayoutPlatform
