import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ComeSoon, logo } from "../../../imagepath";

const ComingSoon = () => {
  
  const [seconds, setSeconds] = React.useState(2);
  const [minutes, setMinutes] = React.useState(2);
  const [hours, setHours] = React.useState(2);
  const [days, setDays] = React.useState(4);
  const [timeDone, setDone] = React.useState(false);

    //seconds 60 -> 0
    React.useEffect(() => {
      const secondsCounter =
        seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(secondsCounter);
    }, [seconds]);
  
    //seconds == 60 (when seconds == 0)
    React.useEffect(() => {
      return () => setSeconds(2);
    }, [seconds == 0 && !timeDone ]);
  
  //MINUTES
  
    //Minutes 60 -> 0  (when seconds == 0)
    React.useEffect(() => {
      return () => setMinutes(minutes-1)
    }, [seconds == 0]);
  
    //Minutes == 60 (when minutes == 0)
    React.useEffect(() => {
      return () => setMinutes(2);
    }, [minutes == 0 && !timeDone]);
  
  //HOURS
  
    //hours 24 => 0 (when minutes == 0)
    React.useEffect(() => {
      return () => setHours(hours - 1);
    }, [minutes == 0]);
  
    //hours == 23 (when hours == 0)
    React.useEffect(() => {
      return () => setHours(2);
    }, [hours == 0 && !timeDone]);
  
  //DAYS
    //days 5 => 0 (when hours == 0)
    React.useEffect(() => {
        return () => setDays(days-1);
    }, [hours == 0 && !timeDone])
  
  //DONE
  
    React.useEffect(() => {
        return () => setDone(true)
    }, [days == 0 && hours == 0 && minutes == 0 && seconds == 0])
  

    useEffect(() => {
		document.body.classList.add("error-page");
		return () => document.body.classList.remove("error-page");
		}, []);

  return (
    <>
        <div className="main-wrapper">
          <div className="error-box">
            <div className="error-logo">
              <Link to="/home">
                <img
                  src={logo}
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <h4>WE ARE COMING SOON!!</h4>
            <h6 className="font-weight-normal">
              Stay tuned for something amazing
            </h6>
            <div className="countdown-container">
              <div className="countdown-el days-c">
                <p className="big-text" id="days">
                  {days}
                </p>
                <span>Days</span>
              </div>
              <div className="countdown-el hours-c">
                <p className="big-text" id="hours">
                 {hours}
                </p>
                <span>hrs</span>
              </div>
              <div className="countdown-el mins-c">
                <p className="big-text" id="mins">
                  {minutes}
                </p>
                <span>mins</span>
              </div>
            </div>
            <div className="error-box-img">
              <img
                src={ComeSoon}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="come-soon-box">
              <h5 className="h4 font-weight-normal">
                Subscribe to our mailing list to get latest updates
              </h5>
              <div className="subscribe-soon">
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <button className="btn btn-danger" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="social-icon-soon">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-facebook face-book" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-twitter twit-ter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-instagram insta-gram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin linked-in" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ComingSoon;
