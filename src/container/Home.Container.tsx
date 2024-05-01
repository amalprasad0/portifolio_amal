import { Banner, CarouselCard, NavigationBar, VerCarousel } from '../components'

export function HomeContainer() {
  return (
    <div className='mx-20'>
      <NavigationBar/>
      <Banner/>
      <div className=" carousel-container">
        <VerCarousel/>
      </div>
    </div>
  )
}
