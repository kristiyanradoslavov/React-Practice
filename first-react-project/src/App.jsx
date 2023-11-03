function App() {

    return (
        <>
            <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                    <div className="container">
                        <div className="header_nav">
                            <a className="navbar-brand brand_desktop" href="index.html">
                                <img src="images/logo.png" alt="" />
                            </a>
                            <div className="main_nav">
                                <div className="top_nav">
                                    <ul className=" ">
                                        <li className="">
                                            <a className="" href="">
                                                <img src="images/telephone.png" alt="" />
                                                <span> +01 1234567890</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a className="" href="">
                                                <img src="images/mail.png" alt="" />
                                                <span>demo@gmail.com</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a className="" href="">
                                                <img src="images/location.png" alt="" />
                                                <span>Den mark Loram ipusum</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom_nav">
                                    <nav className="navbar navbar-expand-lg custom_nav-container">
                                        <a className="navbar-brand brand_mobile" href="index.html">
                                            <img src="images/logo.png" alt="" />
                                        </a>
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                        >
                                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                                <ul className="navbar-nav  ">
                                                    <li className="nav-item active">
                                                        <a className="nav-link" href="index.html">
                                                            Home <span className="sr-only">(current)</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="about.html">
                                                            {" "}
                                                            About{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="class.html">
                                                            {" "}
                                                            Classes{" "}
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="blog.html">
                                                            Blog
                                                        </a>
                                                    </li>
                                                </ul>
                                                <form className="form-inline">
                                                    <button
                                                        className="btn ml-3 ml-lg-5 nav_search-btn"
                                                        type="submit"
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className=" slider_section position-relative">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 offset-md-2">
                                <div className="slider_heading">
                                    <h2>
                                        Bo <span>xer</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div
                                    id="carouselExampleIndicators"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={0}
                                            className="active"
                                        >
                                            01
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                                            02
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                                            03
                                        </li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="box">
                                                <div className="detail-box">
                                                    <h1>
                                                        Boxing <br />
                                                        Center
                                                    </h1>
                                                    <hr />
                                                    <div className="btn-box">
                                                        <a href="" className="btn-1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="box">
                                                <div className="detail-box">
                                                    <h1>
                                                        Boxing <br />
                                                        Center
                                                    </h1>
                                                    <hr />
                                                    <div className="btn-box">
                                                        <a href="" className="btn-1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="box">
                                                <div className="detail-box">
                                                    <h1>
                                                        Boxing <br />
                                                        Center
                                                    </h1>
                                                    <hr />
                                                    <div className="btn-box">
                                                        <a href="" className="btn-1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
            {/* about section */}
            <section className="about_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 ml-auto pr-0">
                            <div className="about_container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-5">
                                        <div className="detail-box">
                                            <div className="heading_container">
                                                <h2>About Class</h2>
                                            </div>
                                            <p>
                                                iusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris iusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquipnisi ut aliquipiusmod tempor
                                                incididunt ut labore et
                                            </p>
                                            <hr />
                                            <a href="">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* class section */}
            <section className="class_section ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto">
                            <div className="class_container">
                                <div className="row">
                                    <div className="col-lg-9 col-md-10">
                                        <div className="heading_container">
                                            <h2>Our Classes Videos</h2>
                                            <p>
                                                iusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis n ostrud exercitation ullamco
                                                laboris iusmod tempor incididunt ut labore et dolore
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="class_box-container">
                                    <div className="owl-carousel owl_carousel1">
                                        <div className="item">
                                            <div className="box">
                                                <div className="img-box">
                                                    <img src="images/c1.jpg" alt="" />
                                                    <div className="detail-box">
                                                        <button>
                                                            <img src="images/play-icon.png" alt="" />
                                                        </button>
                                                        <h2>Boxing</h2>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <a href="">See More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box">
                                                <div className="img-box">
                                                    <img src="images/c2.jpg" alt="" />
                                                    <div className="detail-box">
                                                        <button>
                                                            <img src="images/play-icon.png" alt="" />
                                                        </button>
                                                        <h2>Boxing</h2>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <a href="">See More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box">
                                                <div className="img-box">
                                                    <img src="images/c1.jpg" alt="" />
                                                    <div className="detail-box">
                                                        <button>
                                                            <img src="images/play-icon.png" alt="" />
                                                        </button>
                                                        <h2>Boxing</h2>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <a href="">See More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="box">
                                                <div className="img-box">
                                                    <img src="images/c2.jpg" alt="" />
                                                    <div className="detail-box">
                                                        <button>
                                                            <img src="images/play-icon.png" alt="" />
                                                        </button>
                                                        <h2>Boxing</h2>
                                                    </div>
                                                </div>
                                                <div className="btn-box">
                                                    <a href="">See More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end class section */}
            {/* blog section */}
            <section className="blog_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 ml-auto">
                            <div className="heading_container">
                                <h2>Latest Blog</h2>
                                <p>
                                    iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis n
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pl-0">
                            <div className="box b1">
                                <div className="img-box">
                                    <img src="images/b1.jpg" alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 ml-auto">
                                        <div className="detail-box">
                                            <div className="img_date">
                                                <h6>
                                                    17 <br />
                                                    Feb
                                                </h6>
                                            </div>
                                            <h3>Boxer Joniya Daro</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea
                                            </p>
                                            <a href="">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pr-0">
                            <div className="box b2">
                                <div className="img-box">
                                    <img src="images/b2.jpg" alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 col-md-10 mr-auto">
                                        <div className="detail-box">
                                            <div className="img_date">
                                                <h6>
                                                    17 <br />
                                                    Jun
                                                </h6>
                                            </div>
                                            <h3>Boxer Joniya Daro</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea
                                            </p>
                                            <a href="">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end blog section */}
            {/* client section */}
            <section className="client_section layout_padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto">
                            <div className="client_container">
                                <div className="heading_container">
                                    <h2>What Says Our students</h2>
                                    <p>
                                        iusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis n
                                    </p>
                                </div>
                                <div className="client_box-container">
                                    <div className="carousel-wrap ">
                                        <div className="owl-carousel">
                                            <div className="item">
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src="images/client1.png" alt="" />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h4>Jone Moe</h4>
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum{" "}
                                                        </p>
                                                        <img src="images/quote.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src="images/client2.png" alt="" />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h4>Lio Uji</h4>
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum{" "}
                                                        </p>
                                                        <img src="images/quote.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src="images/client1.png" alt="" />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h4>Jone Moe</h4>
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum{" "}
                                                        </p>
                                                        <img src="images/quote.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src="images/client2.png" alt="" />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h4>Lio Uji</h4>
                                                        <p>
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable content of a page when
                                                            looking at its layout. The point of using Lorem Ipsum{" "}
                                                        </p>
                                                        <img src="images/quote.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end client section */}
            {/* info section */}
            <div className="info_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 ml-auto">
                            <div className="row info_main-row">
                                <div className="col-md-6 pr-0">
                                    {/* contact section */}
                                    <section className="contact_section">
                                        <h2>Request A Call Back</h2>
                                        <form action="">
                                            <div>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="message-box"
                                                    placeholder="Message"
                                                />
                                            </div>
                                            <div className="d-flex ">
                                                <button>SEND</button>
                                            </div>
                                        </form>
                                        <div className="map_container">
                                            <div className="map">
                                                <div
                                                    id="googleMap"
                                                    style={{ width: "100%", height: 300 }}
                                                />
                                            </div>
                                        </div>
                                    </section>
                                    {/* end contact section */}
                                    {/* footer section */}
                                    <section className=" footer_section ">
                                        <div className="social_box">
                                            <a href="#">
                                                <img src="images/facebook.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="images/twitter.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="images/linkedin.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="images/instagram.png" alt="" />
                                            </a>
                                            <a href="#">
                                                <img src="images/youtube.png" alt="" />
                                            </a>
                                        </div>
                                        <p>
                                            © 2020 All Rights Reserved. Design by
                                            <a href="https://html.design/">Free Html Templates</a>
                                        </p>
                                    </section>
                                    {/* footer section */}
                                </div>
                                <div className="col-md-6  px-0">
                                    <div className="img-box">
                                        <img src="images/footer-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default App
