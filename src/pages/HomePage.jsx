import HomeHeader from '../components/Home/HomeHeader'
import HomeBody from '../components/Home/HomeBody'
import { Helmet } from 'react-helmet'

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>{'مُسْلِم'}</title>
            </Helmet>
            <HomeHeader />
            <HomeBody />
        </>
    )
}
