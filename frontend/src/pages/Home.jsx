import Hero from "../components/Hero";
import ShowListing from "../components/ShowListing";

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