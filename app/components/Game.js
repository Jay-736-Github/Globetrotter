// "use client";

// import { useEffect, useState } from "react";
// import ClueCard from "./ClueCard";
// import AnswerOptions from "./AnswerOptions";
// import Feedback from "./Feedback";
// import ScoreBoard from "./ScoreBoard";
// import ChallengeModal from "./ChallengeModal";

// export default function Game({ username }) {
//   const [destinations, setDestinations] = useState([]);
//   const [currentDestination, setCurrentDestination] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [score, setScore] = useState({ correct: 0, incorrect: 0 });
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("/api/destinations");
//       const data = await res.json();
//       setDestinations(data);
//       pickNewDestination(data);
//     }
//     fetchData();
//   }, []);

//   const pickNewDestination = (data = destinations) => {
//     if (data.length === 0) return;
//     const randomIndex = Math.floor(Math.random() * data.length);
//     const destination = data[randomIndex];
//     setCurrentDestination(destination);
//     setSelectedAnswer(null);
//     setFeedback(null);
//     generateOptions(destination, data);
//   };

//   const generateOptions = (destination, allDestinations) => {
//     // Select the correct answer plus 3 random others.
//     const others = allDestinations.filter((d) => d.city !== destination.city);
//     const shuffledOthers = others.sort(() => 0.5 - Math.random()).slice(0, 3);
//     const opts = [...shuffledOthers, destination].sort(
//       () => 0.5 - Math.random()
//     );
//     setOptions(opts);
//   };

//   const handleAnswer = (answer) => {
//     setSelectedAnswer(answer);
//     if (answer === currentDestination.city) {
//       setFeedback({ correct: true, message: "Correct! " + getRandomFunFact() });
//       setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
//     } else {
//       setFeedback({
//         correct: false,
//         message: "Incorrect! " + getRandomFunFact(),
//       });
//       setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
//     }
//     // Optionally, update score in Supabase using /api/score
//   };

//   const getRandomFunFact = () => {
//     if (!currentDestination) return "";
//     const facts = currentDestination.fun_fact;
//     return facts[Math.floor(Math.random() * facts.length)];
//   };

//   const handleNext = () => {
//     pickNewDestination();
//   };

//   return (
//     <div className="w-full max-w-xl bg-white p-6 rounded shadow-md">
//       <ScoreBoard score={score} username={username} />
//       <ClueCard clues={currentDestination?.clues || []} />
//       <AnswerOptions
//         options={options}
//         onSelect={handleAnswer}
//         selected={selectedAnswer}
//       />
//       {feedback && <Feedback feedback={feedback} />}
//       {selectedAnswer && (
//         <button
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       )}
//       <div className="mt-4">
//         <button
//           className="text-blue-500 underline"
//           onClick={() => setModalOpen(true)}
//         >
//           Challenge a Friend!
//         </button>
//       </div>

//       {modalOpen && (
//         <ChallengeModal
//           onClose={() => setModalOpen(false)}
//           currentUser={username}
//           currentScore={score}
//         />
//       )}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import ClueCard from "./ClueCard";
// import AnswerOptions from "./AnswerOptions";
// import Feedback from "./Feedback";
// import ScoreBoard from "./ScoreBoard";
// import ChallengeModal from "./ChallengeModal";

// export default function Game({ username }) {
//   const [currentDestination, setCurrentDestination] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [feedback, setFeedback] = useState(null);
//   const [score, setScore] = useState({ correct: 0, incorrect: 0 });
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchNewDestination();
//   }, []);

//   const fetchNewDestination = async () => {
//     const res = await fetch("/api/destinations");
//     const destination = await res.json();
//     setCurrentDestination(destination);
//     setSelectedAnswer(null);
//     setFeedback(null);
//     generateOptions(destination);
//   };

//   const generateOptions = async (destination) => {
//     const res = await fetch("/api/destinations"); // Fetch another random destination
//     const randomDestination = await res.json();

//     // Select the correct answer plus 3 random others
//     const others = [randomDestination]; // Only one additional option from API
//     const opts = [...others, destination].sort(() => 0.5 - Math.random());
//     setOptions(opts);
//   };

//   const handleAnswer = (answer) => {
//     setSelectedAnswer(answer);
//     if (answer === currentDestination.city) {
//       setFeedback({ correct: true, message: "Correct! " + getRandomFunFact() });
//       setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
//     } else {
//       setFeedback({
//         correct: false,
//         message: "Incorrect! " + getRandomFunFact(),
//       });
//       setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
//     }
//   };

//   const getRandomFunFact = () => {
//     if (!currentDestination) return "";
//     const facts = currentDestination.fun_fact;
//     return facts[Math.floor(Math.random() * facts.length)];
//   };

//   return (
//     <div className="w-full max-w-xl bg-white p-6 rounded shadow-md">
//       <ScoreBoard score={score} username={username} />
//       <ClueCard clues={currentDestination?.clues || []} />
//       <AnswerOptions
//         options={options}
//         onSelect={handleAnswer}
//         selected={selectedAnswer}
//       />
//       {feedback && <Feedback feedback={feedback} />}
//       {selectedAnswer && (
//         <button
//           className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           onClick={fetchNewDestination}
//         >
//           Next
//         </button>
//       )}
//       <div className="mt-4">
//         <button
//           className="text-blue-500 underline"
//           onClick={() => setModalOpen(true)}
//         >
//           Challenge a Friend!
//         </button>
//       </div>

//       {modalOpen && (
//         <ChallengeModal
//           onClose={() => setModalOpen(false)}
//           currentUser={username}
//           currentScore={score}
//         />
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import ClueCard from "./ClueCard";
import AnswerOptions from "./AnswerOptions";
import Feedback from "./Feedback";
import ScoreBoard from "./ScoreBoard";
import ChallengeModal from "./ChallengeModal";

export default function Game({ username }) {
  const [destinations, setDestinations] = useState([]);
  const [currentDestination, setCurrentDestination] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/destinations");
      const data = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        console.error("Invalid or empty data received:", data);
        return;
      }

      setDestinations(data);
      pickNewDestination(data);
    }
    fetchData();
  }, []);

  const pickNewDestination = (data = destinations) => {
    if (!data || data.length === 0) return;
    const randomIndex = Math.floor(Math.random() * data.length);
    const destination = data[randomIndex];
    setCurrentDestination(destination);
    setSelectedAnswer(null);
    setFeedback(null);
    generateOptions(destination, data);
  };

  const generateOptions = (destination, allDestinations) => {
    if (!destination || !allDestinations || allDestinations.length < 4) {
      console.error("Not enough destinations available for options.");
      return;
    }

    // Ensure incorrect options are properly filtered
    const incorrectDestinations = allDestinations
      .filter((d) => d.city !== destination.city) // Exclude correct answer
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, 3); // Pick 3 incorrect answers

    if (incorrectDestinations.length < 3) {
      console.error("Not enough incorrect destinations available!");
      return;
    }

    // Combine correct answer with 3 incorrect answers
    const opts = [...incorrectDestinations, destination].sort(
      () => 0.5 - Math.random()
    );

    setOptions(opts);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentDestination.city) {
      setFeedback({ correct: true, message: "Correct! " + getRandomFunFact() });
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setFeedback({
        correct: false,
        message: "Incorrect! " + getRandomFunFact(),
      });
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const getRandomFunFact = () => {
    if (!currentDestination) return "";
    const facts = currentDestination.fun_fact;
    return facts[Math.floor(Math.random() * facts.length)];
  };

  const handleNext = () => {
    pickNewDestination();
  };

  return (
    <div className="w-full max-w-xl bg-white p-6 rounded shadow-md">
      <ScoreBoard score={score} username={username} />
      <ClueCard clues={currentDestination?.clues || []} />
      <AnswerOptions
        options={options}
        onSelect={handleAnswer}
        selected={selectedAnswer}
      />
      {feedback && <Feedback feedback={feedback} />}
      {selectedAnswer && (
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleNext}
        >
          Next
        </button>
      )}
      <div className="mt-4">
        <button
          className="text-blue-500 underline"
          onClick={() => setModalOpen(true)}
        >
          Challenge a Friend!
        </button>
      </div>

      {modalOpen && (
        <ChallengeModal
          onClose={() => setModalOpen(false)}
          currentUser={username}
          currentScore={score}
        />
      )}
    </div>
  );
}
