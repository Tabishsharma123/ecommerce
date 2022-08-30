import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import "../About/About.css";

const Aboutus = () => {
    return (
        <Container className='py-5 my-3'>
            <Row classNamename="py-4 my-5">
                <Col sm={7}>
                    <img
                        src="https://scontent.flko3-1.fna.fbcdn.net/v/t1.6435-9/128349405_107070187911007_6613538657878347519_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=973b4a&_nc_ohc=qd0lm5YRUaIAX9_upFv&_nc_ht=scontent.flko3-1.fna&oh=00_AT-i8kKEdraARNgzauhRwgeKlGh_QvmqGNW73If1mv5gXQ&oe=6306979F"
                        className="rounded-circle" height="250px" width="250px"
                        
                    />
                </Col>
                <Col sm={5}>
                    <h1 className='font-weight-light'><strong>AboutUS</strong></h1>
                    <p className='mt-4 text-muted'>
                        <h5>
                            Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available* Best Deals. Easy & Fast Delivery. Huge Selection. Low Prices. Great Offers. Top Brands. No Cost EMI Available.
                        </h5>
                        <br />
                        <h5>
                            Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping & Cash on Delivery ...
                        </h5>
                    </p>
                </Col>
            </Row>
            <br /><hr />
            <Row>
                <section className="ourteam">
                    <div className="container text-center">
                        <h1>OUR AMAZING Team</h1>

                        <div className="row teamsetting">
                            <div className="col-lg-2 col-md-2 col-sm-10 col-12 d-block m-auto">
                                <figure className="figure">
                                    <img src="../assets/v.jpeg" className="figure-img rounded-circle" height="250px" width="250px" />
                                    <figcaption>
                                        Vasu Garg
                                        <h5><strong className="figure-caption">Team Leader</strong></h5>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-10 col-12 d-block m-auto ">
                                <figure className="figure">
                                    <img src="../assets/h.jpeg" className="figure-img rounded-circle" height="250px" width="250px" />
                                    <figcaption>
                                        Harshit Singh
                                        <h5><strong className="figure-caption">Team Member</strong></h5>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-10 col-12 d-block m-auto">
                                <figure className="figure">
                                    <img src="../assets/n.jpeg" className="figure-img  rounded-circle" height="250px" width="250px" />
                                    <figcaption>
                                        Nishant Singh
                                        <h5><strong className="figure-caption">Team Member</strong></h5>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-lg-2 col-md-2 col-sm-10 col-12 d-block m-auto">
                                <figure className="figure">
                                    <img src="../assets/t.jpeg" className="figure-img  rounded-circle" height="250px" width="250px" />
                                    <figcaption>
                                        Tabish Sharma
                                        <h5><strong className="figure-caption">Team Member</strong></h5>
                                    </figcaption>
                                </figure>
                            </div>

                        </div>
                    </div>
                </section>
            </Row>
        </Container>

    )
}
export default Aboutus