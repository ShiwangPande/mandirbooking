import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import FooterPic from '../images/footer.jpg'
import { MDBIcon } from 'mdb-react-ui-kit';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import footer_logo from "./om.png";
export default function Footer() {
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);

    const handleClickToOpen1 = () => {
        setOpen1(true);
    };

    const handleToClose1 = () => {
        setOpen1(false);
    };
    return (
        <MDBFooter className='text-center text-lg-start text-white' style={{ background: "black" }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>


            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 '>
                            <div className='text-uppercase fw-bold ' style={{ display: "flex", justifyContent: "center" }}>
                                {/* <MDBIcon icon="gem" className="me-3" /> */}
                                <img className='footer-logo' src={footer_logo} alt="" />
                            </div>
                            <p className='text-uppercase fw-bold footer-logo-tagline' style={{ textAlign: 'center' }}>
                                जीवन की कामनाओं को पूरा करने का संगठन
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>तेज़ खोजें</h6>
                            <p>
                                <a href='/' className='text-reset'>
                                    Home

                                </a>
                            </p>
                            <p>
                                <a href='/contact' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a href='/gallery' className='text-reset'>
                                    Gallery
                                </a>
                            </p>
                            <p>
                                <a href='/about' className='text-reset'>
                                    About Us
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>उपयोगी लिंक्स</h6>
                            <p>
                                <a href='https://www.instagram.com/' className='text-reset'>
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href='https://www.linkedin.com' className='text-reset'>
                                    Linkedin
                                </a>
                            </p>
                            <p>
                                <a href='' className='text-reset'>
                                    Telegram
                                </a>
                            </p>
                            {/* <p>
                                <a href='#!' className='text-reset'>
                                    Twitter
                                </a>
                            </p> */}
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>संपर्क</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                श्री कामना पूर्ति अनुष्ठान केंद्र, उज्जैन, मध्य प्रदेश
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                पंडित मनीष चंद्रशेखर व्यास
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> 22/1 श्री त्रिलोक कृपा कार्तिक चौक उज्जैन
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> Mobile no.: 9754458233
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className="footer-pic d-flex align-items-center justify-content-center">
                {/* <img src="https://www.linkpicture.com/q/wrench3_1.png" alt="" /> */}
                {/* <iframe title="map-iframe" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Government%20College%20of%20engineering%20Nagpur,%20Maharashtra%20India%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe> */}
                <iframe title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.45159355749223!2d75.76222851608853!3d23.184340570882785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963753badfd22c9%3A0xb07439fafb91bd9d!2z4KSV4KS-4KSyIOCkuOCksOCljeCkqiDgpKrgpYLgpJzgpL4g4KS24KS-4KSC4KSk4KS_IOCkieCknOCljeCknOCliOCkqA!5e1!3m2!1sen!2sin!4v1689792748743!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe>
            </div>
            <div className='footer__height text-center p-4'>
                <MDBContainer fluid>
                    <p className='text-white'>
                        <Button variant="none" style={{ color: 'white' }}
                            onClick={handleClickToOpen}>
                            © 2023 All Rights Reserved
                        </Button>
                        <Dialog open={open} onClose={handleToClose}>
                            <DialogTitle>{"© 2023 All Rights Reserved"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Copyright for aश्री कामना पूर्ति अनुष्ठान केंद्र website for puja:
                                    <br />
                                    "All rights reserved. This website and its content are protected by copyright laws. The text, images, graphics, and other materials on this website are the intellectual property of [Temple Name]. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, without the prior written permission of the copyright owner.
                                    <br />
                                    This website is intended for informational purposes and personal use only. Any unauthorized use of the materials on this website may violate copyright laws and other applicable laws.
                                    <br />
                                    For inquiries regarding the use of the content on this website or to obtain permission for any specific use, please contact [Temple Name] at [Contact Email/Phone]."
                                    <br />
                                    Note: This is a general copyright statement. It is recommended to consult with legal professionals or experts to tailor it to your specific website and requirements.  </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToClose}
                                    color="primary" autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog> <br />
                        <Button variant="none" style={{ color: 'white' }}
                            onClick={handleClickToOpen1}>
                            Privacy Policy
                        </Button>
                        <Dialog open={open1} onClose={handleToClose1}>
                            <DialogTitle>{"Privacy Policy"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Privacy Policy for Mandir Temple Website for Puja

                                    At श्री कामना पूर्ति अनुष्ठान केंद्र, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website for puja services.
                                    <br />
                                    <h4> 1. Information Collection:</h4>
                                    We may collect personal information from you when you voluntarily provide it during the puja booking process or when you contact us. This may include your name, contact details, email address, and any additional information you provide related to the puja requirements.
                                    <br />
                                    <h4> 2. Use of Information:</h4>
                                    We use the collected information to process your puja bookings, communicate with you regarding the puja services, and provide you with the desired services. We may also use your information to improve our website, personalize your user experience, and send you relevant updates or promotional offers with your consent.
                                    <br />
                                    <h4> 3. Information Sharing:</h4>
                                    We do not sell, trade, or transfer your personal information to third parties without your consent, except as necessary to fulfill your puja services or as required by law. We may share your information with trusted service providers who assist us in operating our website or conducting our business, as long as they agree to keep your information confidential.
                                    <br />
                                    <h4> 4. Data Security:</h4>
                                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use secure technologies and encryption protocols to safeguard your data and maintain its confidentiality.
                                    <br />
                                    <h4> 5. Cookies and Tracking Technologies:</h4>
                                    Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You have the option to accept or decline cookies, and you can modify your browser settings to disable cookies if desired. However, disabling cookies may affect the functionality and user experience of our website.
                                    <br />
                                    <h4>6. Third-Party Links:</h4>
                                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
                                    <br />
                                    <h4>  7. Children's Privacy:</h4>
                                    Our services are not directed towards individuals under the age of 18. We do not knowingly collect or solicit personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to promptly delete that information.
                                    <br />
                                    <h4>   8. Changes to the Privacy Policy:</h4>
                                    We may update this Privacy Policy from time to time. Any changes will be effective upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates.
                                    <br />
                                    <h4>  9. Contact Us:</h4>
                                    If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us through the provided contact details on our website.
                                    <br />
                                    By using our website and availing our puja services, you consent to the terms of this Privacy Policy and the collection, use, and storage of your personal information as described herein.</DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleToClose1}
                                    color="primary" autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog> <br />
                        <a target={"_blank"} href="https://www.linkedin.com/in/shiwang-pandey-33a628221/">
                            <b className='text-white'>Designed And Developed by Shiwang Pandey</b>
                        </a>
                    </p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}