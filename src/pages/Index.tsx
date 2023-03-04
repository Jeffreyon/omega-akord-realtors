import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

function Index() {
    return (
        <div className="bg-white text-slate-900">
            <div className=" bg-slate-100">
                <Navbar />
                <Header />
            </div>
            <AboutUs />
            <Testimonials />
            <Newsletter />
            <Blog />
            <Footer />
        </div>
    );
}

export default Index;
