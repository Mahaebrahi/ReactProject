import React from "react";
import './Home.css'
import logo from '../images/gratisography-rain-cloud-free-stock-photo-800x525.jpg'
import { Navbar,Container,Nav,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRightCircle, Facebook } from "react-bootstrap-icons";
import { useState,useEffect } from "react";

const Home = () => {

    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "FrontEnd", "BackEnd" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
        <header className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <p className="homepara">Welcom All In My Portfolio</p>
                        <h1>{"Hi I'm Maha Ibrahim ,"}<span className="wrap">{text}</span></h1>
                         <span className="sp1"> Hello Everyone , I can do with stress in any website</span>
                        <h3>Let's Connect <ArrowRightCircle/></h3>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <img className="image" src={logo}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;
