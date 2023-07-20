import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import Container from 'react-bootstrap/Container';
// import Footer from './Footer'
// import NavBar from './Navbar';


function Contact() {
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    const [loading, setLoading] = useState(false);

    return (
        <>
            {loading ?

                <Loader
                    // color={'#294a65'}
                    loading={loading}
                    // cssOverride={override}
                    size={300}
                // aria-label="Loading Spinner"
                // data-testid="loader"
                // speedMultiplier={1.5}
                /> :
                <div className="">

                    <div>
                        {/* <NavBar /> */}
                        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>

                            <div className="w-100">
                                <div class="text-center my-5">

                                    <h2>संपर्क में रहें</h2>
                                    <p class="lead">सवाल हो? हमसे संपर्क करने से हिचकिचाएं नहीं।</p>
                                </div>
                                <div class="row justify-content-center my-5">
                                    <div class="col-lg-6">
                                        <form
                                            action="https://formsubmit.co/shiwangpande1@gmail.com"
                                            method="POST"
                                        >
                                            <div class="form-floating my-5">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    class="form-control"
                                                    required
                                                />
                                                <label for="email" class="form-label">Email</label>
                                            </div>
                                            <div class="form-floating my-5">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    class="form-control"
                                                    required
                                                />

                                                <label for="name" class="form-label">Name</label>
                                            </div>
                                            <div class="form-floating my-5">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    class="form-control"
                                                    required
                                                />
                                                <label for="subject" class="form-label">Subject</label>
                                            </div>
                                            <div class="form-floating my-5">
                                                <textarea
                                                    name="query"
                                                    class="form-control"
                                                    style={{ height: "150px" }}
                                                    placeholder="write your query here"
                                                    cols="30"
                                                    rows="10"
                                                    required
                                                ></textarea>
                                                <label for="query">Write a message</label>
                                            </div>
                                            <div class="text-center">
                                                <button type="submit" class="btn" style={{ backgroundColor: "#fa4c02", color: "white" }} >Send!</button>
                                                <input type="hidden" name="_next"
                                                    value="https://mesathank.netlify.app/" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        {/* <Footer /> */}


                    </div>


                </div >
            }
        </>
    )
}

export default Contact