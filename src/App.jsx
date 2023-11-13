import React, { useState } from "react";
import listsvg from "../src/assets/icon-list.svg";
import iconsuccess from "../src/assets/icon-success.svg";
import signup from "../src/assets/illustration-sign-up-desktop.svg";
function App() {
  const [em, setem] = useState("");
  const [err, seterr] = useState(0);
  const [success, setsuccess] = useState(false);
  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(em);
  };
  const checkem = () => {
    if (em == "" || validateEmail() == false) {
      seterr(1);
    } else {
      setsuccess(true);
    }
  };
  const dissmissmsg = () => {
    setem("");
    setsuccess(false);
  };
  return (
    <>
      <div className="main">
        {success ? (
          <div className="success">
            <div className="innersuc">
              <img src={iconsuccess} alt="image not found" />
              <h1 style={{ fontSize: "2.6rem", fontWeight: "700" }}>
                Thanks for subscribing!
              </h1>
              <p>
                A confirmation email has been sent to {em}. Please open it and
                click the button inside to confirm your subscription
              </p>
              <button className="dismissbtn" onClick={dissmissmsg}>
                Dismiss message
              </button>
            </div>
          </div>
        ) : (
          <div className="signup">
            <div className="innerdiv">
              <h1 style={{ fontSize: "2.6rem", fontWeight: "700" }}>
                Stay updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on.</p>
              <p>
                <img src={listsvg} alt="image not found" /> Product discovery
                and building what matters.
              </p>
              <p>
                <img src={listsvg} alt="image not found" /> Measuring to ensure
                updates are a success.
              </p>
              <p>
                <img src={listsvg} alt="image not found" /> And much more!
              </p>
              <p style={{ marginBottom: "0.4rem" }}>
                Email address{" "}
                {err == 1 ? (
                  <span style={{ color: "red", marginLeft: "6rem" }}>
                    Valid email rquired
                  </span>
                ) : null}
              </p>
              <input
                type="text"
                placeholder="email@company.com"
                value={em}
                onChange={(e) => setem(e.target.value)}
                onClick={() => (err == 1 ? seterr(0) : null)}
                className={err == 0 ? "eminput" : "eminput errorinput"}
              />
              <br />
              <button onClick={checkem}>Subscribe to monthly newsletter</button>
            </div>
            <div>
              <img src={signup} alt="image not found" className="imgsignup" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
