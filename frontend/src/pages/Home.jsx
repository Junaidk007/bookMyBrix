import Hero from "../components/HomePage/Hero";
import ShowListing from "../components/HomePage/ShowListing";


function Home() {
    return (
        <>
            <Hero />
            <div className="listingBox">
                <ShowListing title={'Popular Hotels'} />
                <ShowListing title={'Available this weekend'} />
            </div>
        </>
    );
}

export default Home;