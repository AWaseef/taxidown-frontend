import Navbar from './nav'
import Footer from './footer'
import GetFleets from './getfleets'
import Pick from './pick'
import { getDictionary } from '../dictionaries'
import OurServices from './ourServices'
import DriverProfessionals from './drivers'
import PickupContainer from './pickupContainer'

export default async function HomePage({params}) {
  const {lang} = await params;
  const dict = await getDictionary(lang); // en
  return (
    <div className=' w-[100vw]'>
        <Navbar home={dict.lang.home} contactUs={dict.lang.contactUs} loginTitle={dict.lang.loginTitle} bookingTitle={dict.lang.bookingTitle} logoutTitle={dict.lang.logoutTitle} successLogout={dict.lang.LogoutSuccessful} lang={lang}/>
        <PickupContainer dict={dict} lang={lang} />
        <div id="ourservices">
            <OurServices lang={lang} />
        </div>
        <GetFleets />
        <div className='flex flex-col gap-13 justify-center items-center py-20 bg-[#f8f8f8]'>
            <div className="text-center mb-[-15px]">
                <h1 className='text-[50px] truculenta font-medium'>Why choose us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    A team that values your time, your comfort, and your trust because your journey matters to us.            
                </p>
            </div>
            <DriverProfessionals 
            path={"/booking.png"} 
            title= {"Wide Coverage"} 
            content={"No matter your destination, we’ve got you covered. From airport transfers to city rides and longer trips, our service is available across a wide area so you never have to worry about reaching your destination. Wherever you’re heading, QuickPickups will get you there reliably and efficiently."}
            />
            <DriverProfessionals 
            flip={"md:flex-row-reverse lg:pl-20 gap:15"}
            path={"/driver.png"} 
            title= {"Professional Drivers"} 
            content={"Our drivers are carefully selected not only for their experience behind the wheel but also for their professionalism and courtesy. They know the best routes, respect your privacy, and are always happy to assist with luggage or special requests. With their knowledge and friendliness, you’ll feel comfortable and cared for throughout your journey."}
            />
            <DriverProfessionals 
            path={"/car2.png"} 
            title= {"Modern Vehicle Fleet"} 
            content={"We offer a wide selection of vehicles to suit different needs, from elegant cars for business travel to spacious vehicles for families and groups. All of our cars are modern, regularly serviced, and equipped with the latest technology to make your ride pleasant. Whatever the occasion, we have the perfect vehicle for you."}
            />
        </div>
        
        <Footer />
    </div>
  )
}
