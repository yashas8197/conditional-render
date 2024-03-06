import "./App.css";

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];
  const getReveresedArray = (numArray) => {
    return numArray.reverse().join(", ");
  };
  return (
    <>
      <h2>Reverse Array</h2>
      <p>Reversed Array: {getReveresedArray(originalArray)}</p>
    </>
  );
};

const CalculateBMI = () => {
  const getBMI = (w, h) => {
    return (w / h) * h;
  };
  return (
    <>
      <h2>BMI Calculator</h2>
      <p>BMI: {getBMI(70, 1.75)}</p>
    </>
  );
};

const GenerateQuote = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  ];
  const getQuote = (quote) => {
    let getRandomIndex = Math.floor(Math.random() * 6);
    return quote[getRandomIndex];
  };
  return (
    <>
      <h2>Random Quote</h2>
      <p>{getQuote(quotes)}</p>
    </>
  );
};

const GradeAnalyser = () => {
  const getGradeResult = (score) => {
    let message = "";
    if (score >= 90 && score <= 100) {
      message = "A, Excellent work!";
    } else if (score >= 80 && score <= 89) {
      message = "B, Good job!";
    } else if (score >= 70 && score <= 79) {
      message = "C, Not bad, keep it up!";
    } else if (score >= 60 && score <= 69) {
      message = "D, You passed, but aim higher next time.";
    } else {
      message = "F, Sorry, you didn't pass. Keep working hard!";
    }
    return message;
  };

  return (
    <>
      <h2>Grade Analizer</h2>
      <p>Score: 85</p>
      <p>Grade: {getGradeResult(85).charAt(0)}</p>
      <p>{getGradeResult(85).slice(3)}</p>
    </>
  );
};

const TemperatureFeedback = () => {
  const feedBack = (temperature) => {
    let message = ""
    if (temperature < 0) {
        message = "Brr, it's freezing!";
    } else if (temperature >= 0 && temperature <= 10) {
        message = "It's quite cold, bundle up!";
    } else if (temperature > 10 && temperature <= 20) {
        message = "The weather is cool and comfortable.";
    } else if (temperature > 20 && temperature <= 30) {
        message = "It's a warm day!";
    } else {
        message = "It's hot outside, stay cool!";
    }
    return [temperature, message];
  }
  return (
    <>
      <h2>Temperature Feedback</h2>
      <p>Current Temperature: {feedBack(25)[0]}</p>
      <p>{feedBack(25)[1]}</p>
    </>
  )
}

export default function App() {
  return (
    <main>
      <ReverseArray />
      <CalculateBMI />
      <GenerateQuote />
      <GradeAnalyser />
      <TemperatureFeedback/>
    </main>
  );
}
