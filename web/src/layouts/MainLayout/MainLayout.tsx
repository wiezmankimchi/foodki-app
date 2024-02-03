import { Bold } from 'lucide-react'
import LightDark from 'src/components/LightDark/LightDark'
import Logo from 'src/components/Logo/Logo'
import ScrollTopButton from 'src/components/ScrollTopButton/ScrollTopButton'
// import { Toaster } from 'src/components/ui/Toast/Toaster'
import { useAppContext } from 'src/context/AppContext'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { dark } = useAppContext()
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className={`  bg-orange-100 bg-scroll dark:bg-orange-900`}>
        <div className="mx-8 bg-orange-100 dark:bg-orange-900">
          <ScrollTopButton />
          <section className={` min-h-screen`}>
            <div className="">
              <div className="flex  flex-row justify-between">
                <div className="mx-3 mt-2">
                  <Logo className={'h-20 w-20'} />
                </div>
                <div className="mx-3 mt-8">
                  <LightDark />
                </div>
              </div>
            </div>
            <div className="mx-2 mb-4 mt-8">{children}</div>
            {/* <Toaster /> */}
          </section>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
