import React from "react"
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <FeaturedProducts type="Featured" indexes={[4, 7, 9, 10, 21]} />
            <Categories />
            <FeaturedProducts type="Trending" indexes={[0, 8, 12, 14, 19]} />
            <Contact />
        </div>
    )
}

export default Home;