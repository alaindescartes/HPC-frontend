import React from "react";
import NewStyles from "./New.module.css";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate(); // Define navigate using the hook

  return (
    <div className={NewStyles.container}>
      <div className={NewStyles.card}>
        <img
          src="https://images.unsplash.com/photo-1580191947416-62d35a55e71d?w=2971&q=80&auto=format&fit=crop"
          alt="Welcome card"
        />
      </div>
      <p>
        We want you to know how much we appreciate you taking the time to
        consider CCC as a church for you.
      </p>
      <p>
        Whether you consider yourself a GUEST still making a decision or you
        have decided to make CCC your HOME,
      </p>
      <h2>WE’RE HERE FOR YOU!</h2>
      <p>
        Please let us know if there’s anything we can do to help you get more
        acquainted with the programs & ministries offered at CCC. We have a
        loving team of staff and volunteers ready to serve YOU!
      </p>
      <h1>HELP US CONNECT WITH YOU BY FILLING OUT A WELCOME CARD</h1>
      <button onClick={() => navigate("/welcome")} className={NewStyles.btn}>
        WELCOME CARD
      </button>
    </div>
  );
};

export default New;
