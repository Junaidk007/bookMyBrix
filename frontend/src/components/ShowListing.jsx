import ListingCard from './ListingCard';
import './showlisting.css'

function ShowListing({title, cardData}) {
    return ( 
        <div className="listings-container">
            <h2>{title}</h2>
            <div className="cards-container">
                <ListingCard imgURl={'https://a0.muscache.com/im/pictures/hosting/Hosting-1664006634303666476/original/1d237239-391f-4956-984b-6cec6f861146.jpeg?im_w=1200'}
                title={'Hotel'}
                price={2000}
                rating={4.5}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/hosting/Hosting-1671208971074388686/original/b171b4c1-4f1b-48e0-a50a-0bd337f02ff5.jpeg?im_w=1200'}
                title={'Appartment'}
                price={3000}
                rating={5.0}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1599484101991344942/original/db2fc6c8-90f0-40f6-9846-1673cecba8f4.jpeg?im_w=1200'}
                title={'Fifth Avenue'}
                price={5000}
                rating={4.55}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1599484101991344942/original/db2fc6c8-90f0-40f6-9846-1673cecba8f4.jpeg?im_w=1200'}
                title={'Fifth Avenue'}
                price={5000}
                rating={4.55}/>
                <ListingCard imgURl={'https://a0.muscache.com/im/pictures/hosting/Hosting-1664006634303666476/original/1d237239-391f-4956-984b-6cec6f861146.jpeg?im_w=1200'}
                title={'Hotel'}
                price={2000}
                rating={4.5}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/hosting/Hosting-1671208971074388686/original/b171b4c1-4f1b-48e0-a50a-0bd337f02ff5.jpeg?im_w=1200'}
                title={'Appartment'}
                price={3000}
                rating={5.0}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1599484101991344942/original/db2fc6c8-90f0-40f6-9846-1673cecba8f4.jpeg?im_w=1200'}
                title={'Fifth Avenue'}
                price={5000}
                rating={4.55}/>
                <ListingCard
                imgURl={'https://a0.muscache.com/im/pictures/BnbProperty/BnbProperty-1599484101991344942/original/db2fc6c8-90f0-40f6-9846-1673cecba8f4.jpeg?im_w=1200'}
                title={'Fifth Avenue'}
                price={5000}
                rating={4.55}/>
            </div>
        </div>
     );
}

export default ShowListing;