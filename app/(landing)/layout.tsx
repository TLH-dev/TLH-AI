import Footer from '@/src/components/landing/footer'
import Topbar from '@/src/components/landing/topbar'

const LandingLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Topbar />
      <main className="max-w-5xl mx-auto">{props.children}</main>
      <Footer />
    </div>
  )
}

export default LandingLayout
