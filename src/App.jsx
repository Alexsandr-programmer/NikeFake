import CustomerReviews from './sections/CustomerReviews'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import PopularProducts from './sections/PopularProducts'
import Service from './sections/Service'
import SpecialOffers from './sections/SpecialOffers'
import Subscribe from './sections/Subscribe'
import SuperQuality from './sections/SuperQuality'
import Nav from './components/Nav'

export default function App() {
	return (
		<main className='relative'>
			<Nav></Nav>
			<section className='xl:padding-l wide:padding-r padding-b'>
				<Hero></Hero>
			</section>
			<section className='padding'>
				<PopularProducts></PopularProducts>
			</section>
			<section className='padding'>
				<SuperQuality></SuperQuality>
			</section>
			<section className='padding-x py-10'>
				<Service></Service>
			</section>
			<section className='padding'>
				<SpecialOffers></SpecialOffers>
			</section>
			<section className='bg-pale-blue padding '>
				<CustomerReviews></CustomerReviews>
			</section>
			<section className='padding-x sm:py-32 py-16 w-full'>
				<Subscribe></Subscribe>
			</section>
			<section className='bg-black padding-x padding-t pb-8'>
				<Footer></Footer>
			</section>
		</main>
	)
}
