import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!weight || !height || weight <= 0 || height <= 0) {
      setBmi(null);
      setCategory("Invalid input");
      return;
    }

    let heightInMeters = height / 100;
    let bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    let categoryText = "";
    if (bmiValue < 18.5) {
      categoryText = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      categoryText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      categoryText = "Overweight";
    } else {
      categoryText = "Obese";
    }

    setCategory(categoryText);
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={`flex justify-center items-center  ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`p-8 rounded-lg shadow-lg w-96 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 p-2 bg-gray-700 text-white rounded w-full"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <div className="pt-[105px] pb-[105px]">
          <h2 className="text-center font-bold text-lg">BMI Calculator</h2>
          <form onSubmit={calculateBMI} className="mt-4">
            <label className="block">
              Weight (kg):
              <input
                type="number"
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
            <label className="block mt-2">
              Height (cm):
              <input
                type="number"
                className="w-full border p-2 rounded mt-1"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <div className="flex gap-2 mt-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Submit</button>
              <button type="button" className="bg-gray-300 text-gray-600 px-4 py-2 rounded w-full" onClick={reload}>Reload</button>
            </div>
          </form>
          {bmi && (
            <div className="mt-4 text-center font-bold">
              Your BMI is: {bmi} <br />
              You are: {category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
