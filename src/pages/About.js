import "./home.css";
import Wave from 'react-wavify';
import CountUp from 'react-countup';
import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
function About() {
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
        <div className='aboutt'>

          <div className='about_us'>

            <div className='img_manishji'></div>
            {/* <img  src={manishji} alt="" /> */}

            <div style={{ padding: "20px" }}>
              <h1>पंडित मनीष चंद्रशेखर व्यास</h1>
              <p style={{ fontSize: "19.5px", padding: "10px", textAlign: "justify" }}>
                पंडित मनीष चंद्रशेखर व्यास उज्जैन, मध्य प्रदेश में स्थित श्री कामना पूर्ति अनुष्ठान केंद्र के संचालक हैं। यह केंद्र अनेक पूजाओं और अनुष्ठानों का आयोजन करता है, जो विभिन्न प्रकार की समस्याओं के समाधान के लिए विशेष महत्व रखते हैं।
                <br />
                पंडित मनीष चंद्रशेखर व्यास अपने व्यापक ज्ञान और विद्या के साथ एक प्रमुख ज्योतिषी और धार्मिक आचार्य हैं। उन्होंने अपने अनुभव और विशेषज्ञता के माध्यम से श्री कामना पूर्ति अनुष्ठान केंद्र की स्थापना की है।
                <br />
                इस केंद्र में कालसर्प दोष शांति, नागबली नारायण बलि, पित्र दोष, महामृत्युंजय मंत्र, महाकालेश्वर अभिषेक पूजन, मंगल भात पूजा, कुंभ विवाह की पूजा जैसे अनुष्ठान वैदिक पद्धति से संपन्न किए जाते हैं। इन अनुष्ठानों के माध्यम से श्रद्धालुओं की सभी कामनाएं पूरी होने की कामना की जाती है और उनकी समस्याओं का समाधान किया जाता है।
                <br />
                श्री कामना पूर्ति अनुष्ठान केंद्र उज्जैन में नवग्रह शांति और पारदेश्वर शिवलिंग अभिषेक पूजन भी नियमित रूप से किए जाते हैं। पंडित मनीष चंद्रशेखर व्यास इस केंद्र के माध्यम से लोगों की सेवा करते हैं और उनके जीवन में सुख और समृद्धि का आगमन कराते हैं।
                <br />
                श्री कामना पूर्ति अनुष्ठान केंद्र उज्जैन धार्मिक और आध्यात्मिक स्थान के रूप में मान्यता प्राप्त कर चुका है। यहां लोग अपनी समस्याओं का समाधान ढूंढने के लिए आते हैं। पंडित मनीष चंद्रशेखर व्यास के द्वारा कार्यरत अनुष्ठानों और पूजाओं के माध्यम से, श्रद्धालु लोग अपने जीवन को सुखमय और समृद्ध बनाने का प्रयास करते हैं।
                <br />
                इस प्रकार, पंडित मनीष चंद्रशेखर व्यास द्वारा संचालित श्री कामना पूर्ति अनुष्ठान केंद्र उज्जैन में विभिन्न पूजाओं और अनुष्ठानों का आयोजन किया जाता है, जो विभिन्न प्रकार की समस्याओं का समाधान करते हैं और लोगों के जीवन में सुख और समृद्धि को लाते हैं।
              </p>
            </div>

          </div>

          <Wave fill='rgb(220, 38, 38)' style={{ position: "absolute" }}
            paused={false}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.15,
              points: 3
            }}
          />
          <div className='count_group'>
            <div className='count'>
              <CountUp start={0} end={15} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />k+
                  </div>
                )}
              </CountUp>
              <h3>हमारे द्वारा की गयी पुजा</h3>
            </div>
            <div className='count'>
              <CountUp start={0} end={15} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <h3>साल का अनुभव</h3>
            </div>
            <div className='count'>
              <CountUp start={0} end={100} delay={2}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />%
                  </div>
                )}
              </CountUp>
              <h3>परिणाम</h3>
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default About