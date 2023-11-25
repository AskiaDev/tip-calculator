const Result = ({ handleReset, tipAmount, total }) => {
  return (
    <div className="p-5 my-4 flex flex-col bg-very-dark-cyan rounded-xl md:w-full">
      <div className="flex h-full justify-between items-center">
        <div>
          <h1 className="text-light-grayish-cyan-2 md:text-2xl font-space-mono font-bold">
            Tip Amount
          </h1>
          <p className="text-dark-grayish-cyan-2 font-space-mono text-sm opacity-50">
            / person
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-strong-cyan font-space-mono">
            ${tipAmount}{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-light-grayish-cyan-2 md:text-2xl font-space-mono font-bold">
            Total
          </h1>
          <p className="text-dark-grayish-cyan-2 font-space-mono text-sm opacity-50">
            / person
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-strong-cyan font-space-mono">
            ${total}{" "}
          </h1>
        </div>
      </div>
      <button
        onClick={handleReset}
        className="w-full bg-strong-cyan justify-end font-space-mono text-very-dark-cyan mt-10 p-2 rounded-md text-lg hover:bg-light-grayish-cyan"
      >
        RESET
      </button>
    </div>
  );
};

export default Result;
