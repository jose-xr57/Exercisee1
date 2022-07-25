import React from "react";

const QuoteBox = ({ randomUsers, randomColors, getRandomAll }) => {
  const objectStyle = {
    color: randomColors,
  };

  const objectBgStyle = {
    backgroundColor: randomColors,
  };
  console.log(objectStyle);
  console.log(objectBgStyle);

  return (
    <>
      <div className="QuoteBox" style={objectStyle}>
        <div className="boxInfo">
          {/* ------------ */}
          <picture>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 32.000000 32.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                fill={objectBgStyle.backgroundColor}
                stroke="none"
              >
                <path
                  d="M74 295 c-53 -27 -68 -67 -69 -180 l0 -100 65 0 65 0 0 65 c0 63 -1
                  65 -28 68 -24 3 -26 7 -21 30 3 15 17 36 31 48 18 15 24 29 21 50 -4 34 -22
                  39 -64 19z"
                />
                <path
                  d="M260 297 c-56 -29 -88 -126 -78 -242 l3 -40 65 0 65 0 3 67 c3 67 3
                68 -23 68 -19 0 -25 5 -25 21 0 29 18 59 36 59 11 0 14 9 12 37 -3 42 -19 50
                -58 30z"
                />
              </g>
            </svg>
            <p>{randomUsers.quote}</p>
          </picture>
          {/* ------------ */}

          <p>{randomUsers.author}</p>
          {/* --------------- */}
          <br />
          <div className="container_btn">
            <button
              onClick={getRandomAll}
              className="btn"
              style={objectBgStyle}
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBox;
