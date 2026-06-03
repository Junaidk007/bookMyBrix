import Hero from "../components/HomePage/Hero";
import SearchBtn from "../components/HomePage/SearchBtn";
import ShowListing from "../components/HomePage/ShowListing";
import listData  from './data'


function Home() {
    return (
        <>
            <Hero />
            <div className="listingBox">
                <ShowListing title={'Popular Hotels'} listData={listData} />
                <ShowListing title={'Available this weekend'} listData={listData}/>
            </div>
            
        </>
    );
}

export default Home;