
import "./home.css";
import Card from 'react-bootstrap/Card';
import whatsapp from "./whatsapp-icon.svg";
import phone from "./phone.svg";
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
function Puja() {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800)
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
        <div>
          <div className='title my-5 text-center'>
            <h3 style={{ color: "#fa4c02", fontWeight: "bold" }}> <u> पूजा सूची: संपर्क करने के लिए पूजा सेवाओं की सूची देखें </u></h3>
          </div>


          <div className='card_group'>
            <Card style={{ width: '20rem' }}>
              <div className='puja_img' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>कालसर्प दोष पूजा</Card.Title>
                <Card.Text>
                  कालसर्प दोष को शांत करने के लिए विशेष पूजा आयोजित की जाती है। इस पूजा में नाग देवता की आराधना की जाती है और दोष निवारण के लिए विशेष मंत्रों का जाप किया जाता है।</Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>   <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='mangal' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>मंगल भात पूजा</Card.Title>
                <Card.Text>
                  मंगल भात पूजा में भगवान सूर्य की पूजा की जाती है। यह पूजा सौभाग्य और विवाहित जीवन में सुख-शांति के लिए की जाती है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
              <div className='mahamritunjya' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>महामृत्युंजय मंत्र</Card.Title>
                <Card.Text>
                  महामृत्युंजय मंत्र का जाप अनुष्ठान किया जाता है जो दुर्गाम रोगों, आपत्तियों और भय को दूर करने में सहायता करता है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='rudrabhisekh' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>रुद्राभिषेक पूजा</Card.Title>
                <Card.Text>
                  रुद्राभिषेक पूजा एक प्रमुख पूजा है जो भगवान शिव की आराधना के लिए की जाती है। इस पूजा में भगवान शिव के प्रतिमा या शिवलिंग को पवित्र जल, धूप, दिये, फूल और विभिन्न अन्न पदार्थों से सजाया जाता है।  </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='nagbali' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>नागबली नारायण बलि</Card.Title>
                <Card.Text>
                  इस पूजा में नागबली नारायण बलि अनुष्ठान किया जाता है। यह पूजा नागदेवता को संतुष्ट करने और उनकी कृपा प्राप्त करने के लिए की जाती है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='pitra' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>पित्र दोष</Card.Title>
                <Card.Text>
                  पितृ दोष के निवारण के लिए विशेष पूजा की जाती है। इस पूजा में पितृ देवताओं की आराधना की जाती है और उनके आशीर्वाद का लाभ प्राप्त किया जाता है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='mahakal' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>महाकालेश्वर अभिषेक पूजन</Card.Title>
                <Card.Text>
                  महाकालेश्वर अभिषेक पूजन में भगवान शिव की पूजा एवं अभिषेक किया जाता है। यह पूजा शिव के आशीर्वाद से शक्ति, सौभाग्य, और सुख-शांति की प्राप्ति के लिए की जाती है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='kumbh' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>कुंभ विवाह की पूजा</Card.Title>
                <Card.Text>
                  कुंभ विवाह की पूजा में शिव और पार्वती की पूजा की जाती है। यह पूजा विवाह सम्बंधित समस्याओं के निवारण और सुखी वैवाहिक जीवन के लिए की जाती है।
                </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='navgrah' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>नवग्रह शांति पूजा</Card.Title>
                <Card.Text>
                  इस पूजा में नवग्रहों की शांति और अनुकूलता के लिए विशेष पूजा की जाती है। नवग्रहों के दोषों को दूर करने और उनकी कृपा प्राप्त करने के लिए इस पूजा का आयोजन किया जाता है।    </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='pareshwar' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>पारदेश्वर शिवलिंग अभिषेक पूजन</Card.Title>
                <Card.Text>
                  पारदेश्वर शिवलिंग अभिषेक पूजन शिव भगवान की आराधना का एक महत्वपूर्ण अंग है। इस पूजा में शिवलिंग को शुद्ध किया जाता है और विशेष घृत, जल, धूप, और फूलों के साथ अभिषेक किया जाता है।   </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }}>
              <div className='vishesh' style={{ borderRadius: "50%" }}>

              </div>
              <Card.Body>
                <Card.Title>विशेष कामना पूर्ति अनुष्ठान पूजा</Card.Title>
                <Card.Text>
                  विशेष कामना पूर्ति अनुष्ठान पूजा एक महत्वपूर्ण पूजा है जो विभिन्न प्रकार की कामनाओं की पूर्ति के लिए की जाती है। इस पूजा में विशेष मंत्रों, आरती, और अभिषेक के द्वारा पूजा का आयोजन किया जाता है।   </Card.Text>
                <div class="frame">
                  <a href="https://wa.me/9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={whatsapp} alt="" /> Chat Now</span></button></a>
                </div>     <div class="frame">
                  <a href="tel:9754458233">   <button class="custom-btn btn-7"><span>
                    <img src={phone} alt="" /> 9754458233</span></button></a>
                </div>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

          </div>
        </div>
      }
    </>
  )
}

export default Puja