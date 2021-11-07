import { Footer } from "./big/Footer"
import { Navbar } from "./big/Navbar"

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <div className="flex flex-col h-full flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export const getAppLayout = (page: React.ReactElement) => {
  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}