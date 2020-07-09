import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import TopNav from '../components/top-nav'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <TopNav />    
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
