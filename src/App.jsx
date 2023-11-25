import { useEffect, useState } from "react";
import InputBill from "./components/InputBill";
import InputNumPeople from "./components/InputNumPeople";
import PercentageTip from "./components/PercentageTip";
import Result from "./components/Result";
import logo from "./images/logo.svg";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentageTip, setPercentageTip] = useState(0);
  const [numPeople, setNumPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if bill and numPeople are valid numbers
    if (!isNaN(bill) && !isNaN(numPeople) && numPeople > 0) {
      const tipPerPerson = (bill * (percentageTip / 100)) / numPeople;
      const totalPerPerson = bill / numPeople + tipPerPerson;

      setTipAmount(tipPerPerson.toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
      setError(false);
    } else {
      // Handle invalid input, set tip and total to 0, and trigger an error
      setTipAmount(0);
      setTotal(0);
      if (numPeople <= 0) {
        setError(true);
      }
    }
  }, [bill, percentageTip, numPeople]);

  function handleReset() {
    setBill(0);
    setPercentageTip(0);
    setNumPeople("");
    setTipAmount(0);
    setTotal(0);
    setIsClicked(false);
  }

  function handleCustomTip() {
    setIsClicked((prevState) => !prevState);
  }

  return (
    <main className="bg-light-grayish-cyan md:flex md:justify-center  md:flex-col md:items-center h-screen">
      <div className="py-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white rounded-t-2xl md:rounded-2xl md:w-[800px] p-6">
        <div className="md:flex md:gap-10">
          <div>
            <InputBill bill={bill} setBill={setBill} />
            <PercentageTip
              percentageTip={percentageTip}
              setPercentageTip={setPercentageTip}
              isClicked={isClicked}
              handleCustomTip={handleCustomTip}
            />
            <InputNumPeople
              error={error}
              setNumPeople={setNumPeople}
              numPeople={numPeople}
            />
          </div>
          <Result
            handleReset={handleReset}
            tipAmount={tipAmount}
            total={total}
          />
        </div>
      </div>
    </main>
  );
}
