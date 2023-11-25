import { useEffect, useRef, useState } from "react";

const PercentageTip = ({
  setPercentageTip,
  percentageTip,
  isClicked,
  handleCustomTip,
}) => {
  const [customTip, setCustomTip] = useState("");

  const customTipRef = useRef(null);

  useEffect(() => {
    if (isClicked) {
      customTipRef.current.focus();
    }
  }, [isClicked]);

  function handleButtonClicked(value) {
    console.log(value);
    setPercentageTip(value);
  }

  function handleInputChange(event) {
    setCustomTip(event.target.value);
  }

  return (
    <div className="my-3">
      <label className="font-space-mono text-very-dark-cyan">
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3 font-space-mono">
        <button
          onClick={() => handleButtonClicked(5)}
          className={`py-[1rem] ${
            percentageTip === 5 ? "bg-strong-cyan" : "bg-very-dark-cyan"
          } ${
            percentageTip === 5 ? "text-very-dark-cyan" : "text-white"
          } hover:bg-strong-cyan hover:text-very-dark-cyan rounded-md`}
        >
          5%
        </button>
        <button
          onClick={() => handleButtonClicked(10)}
          className={`py-[1rem] ${
            percentageTip === 10 ? "bg-strong-cyan" : "bg-very-dark-cyan"
          } ${
            percentageTip === 10 ? "text-very-dark-cyan" : "text-white"
          } hover:bg-strong-cyan hover:text-very-dark-cyan rounded-md`}
        >
          10%
        </button>
        <button
          onClick={() => handleButtonClicked(15)}
          className={`py-[1rem] ${
            percentageTip === 15 ? "bg-strong-cyan" : "bg-very-dark-cyan"
          } ${
            percentageTip === 15 ? "text-very-dark-cyan" : "text-white"
          } hover:bg-strong-cyan hover:text-very-dark-cyan rounded-md`}
        >
          15%
        </button>
        <button
          onClick={() => handleButtonClicked(25)}
          className={`py-[1rem] ${
            percentageTip === 25 ? "bg-strong-cyan" : "bg-very-dark-cyan"
          } ${
            percentageTip === 25 ? "text-very-dark-cyan" : "text-white"
          } hover:bg-strong-cyan hover:text-very-dark-cyan rounded-md`}
        >
          25%
        </button>
        <button
          onClick={() => handleButtonClicked(50)}
          className={`py-[1rem] ${
            percentageTip === 50 ? "bg-strong-cyan" : "bg-very-dark-cyan"
          } ${
            percentageTip === 50 ? "text-very-dark-cyan" : "text-white"
          } hover:bg-strong-cyan hover:text-very-dark-cyan rounded-md`}
        >
          50%
        </button>
        {isClicked ? (
          <input
            ref={customTipRef}
            type="number"
            value={customTip}
            onClick={handleCustomTip}
            onBlur={(e) => handleButtonClicked(+e.target.value)}
            onChange={handleInputChange}
            className="font-space-mono text-2xl p-2 text-right w-[6rem] rounded-md bg-light-grayish-cyan-2 outline-strong-cyan text-very-dark-cyan cursor-pointer "
          />
        ) : (
          <button
            onClick={handleCustomTip}
            className="font-space-mono text-center p-2 text-lg max-w-full rounded-md bg-light-grayish-cyan-2 outline-strong-cyan text-very-dark-cyan cursor-pointer "
          >
            Custom
          </button>
        )}
      </div>
    </div>
  );
};

export default PercentageTip;
