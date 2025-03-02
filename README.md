<h1>Globetrotter Challenge</h1>

<h2>Overview</h2>
<p>
  The Globetrotter Challenge is an engaging and interactive travel guessing game where players must guess the correct destination based on a series of clues. The game keeps track of the user's score, which increases for correct answers and decreases for incorrect ones. The ultimate goal is to score as many points as possible while exploring destinations worldwide.
</p>

<h2>Features</h2>
<ul>
  <li><strong>Solo Play & Friend Challenges</strong>: Play the game solo or challenge friends by sharing a link.</li>
  <li><strong>Real-time Score Tracking</strong>: Instantly track your score as you answer each question.</li>
  <li><strong>Dynamic Questions</strong>: The game is designed to dynamically generate clues and destinations, keeping each round fresh.</li>
  <li><strong>Challenge Mode</strong>: Challenge friends to see who can score the most points and earn bragging rights!</li>
  <li><strong>Responsive Design</strong>: The game is optimized for both desktop and mobile devices, ensuring a seamless experience.</li>
</ul>

<h2>Tech Stack</h2>
<h3>Frontend</h3>
<ul>
  <li><strong>Next.js</strong>: A React-based framework for building the frontend, offering SSR (Server-Side Rendering) and static site generation.</li>
  <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for building modern and responsive designs.</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><strong>Next.js API Routes</strong>: For backend functionality, such as score calculations, challenge generation, and user authentication.</li>
  <li><strong>Supabase</strong>: Provides a backend-as-a-service, including database storage for user data, game progress, and high scores.</li>
</ul>

<h3>Authentication</h3>
<ul>
  <li><strong>JWT (JSON Web Tokens)</strong>: Secure user login and authentication using JWT, ensuring each player’s session is safe and private.</li>
</ul>

<h2>Setup Instructions</h2>
<ol>
  <li><strong>Clone the Repository</strong>:
    <pre>git clone https://github.com/your-username/globetrotter-challenge.git</pre>
  </li>
  <li><strong>Install Dependencies</strong>:
    Navigate into the project directory and install all necessary dependencies:
    <pre>cd globetrotter-challenge
npm install</pre>
  </li>
  <li><strong>Environment Variables</strong>:
    Create a `.env.local` file at the root of the project and add the following environment variables:
    <pre>NEXT_PUBLIC_SITE_URL=https://your-vercel-deployment-url
SUPABASE_URL=https://your-supabase-instance-url
SUPABASE_ANON_KEY=your-supabase-anon-key</pre>
    Replace the placeholders with your actual values.
  </li>
  <li><strong>Run the Development Server</strong>:
    Once you've installed all the dependencies and set up the environment variables, you can start the development server:
    <pre>npm run dev</pre>
    Visit <a href="http://localhost:3000">http://localhost:3000</a> in your browser to access the Globetrotter Challenge game.
  </li>
</ol>

<h2>Testing the Application</h2>
<h3>Running Unit Tests</h3>
<p>
  If you'd like to run unit tests for the application (which test key functionalities such as the score calculations), you can do so with the following command:
  <pre>npm run test</pre>
</p>

<h3>End-to-End Testing</h3>
<p>
  End-to-end tests are available for testing the game's interactive features. These tests ensure that gameplay works as expected, including score tracking, user authentication, and challenge functionalities.
  <pre>npm run test:e2e</pre>
</p>

<h2>Folder Structure</h2>
<pre>
app/
├── layout.js         // Global layout & metadata
├── globals.css       // TailwindCSS base
├── page.js           // Landing page (user registration)
├── game/
│     └── page.js     // Game page that renders the interactive game
├── components/
│     ├── Game.js           // Main game component (handles fetching data, random destination, score, etc.)
│     ├── ClueCard.js       // Displays one or two clues
│     ├── AnswerOptions.js  // Renders answer choices as buttons
│     ├── Feedback.js       // Displays immediate feedback with a confetti or sad-face emoji
│     └── ScoreBoard.js     // Displays the current score (correct/incorrect)
├── api/
│     ├── destinations/route.js  // GET endpoint to serve the destinations dataset
│     ├── user/route.js          // POST endpoint to register a user (using Supabase)
│     ├── score/route.js         // POST endpoint to update user score (using Supabase)
│     └── challenge/route.js     // GET endpoint to generate a challenge invite link & image
├── utils/
│     └── supabaseClient.js     // Supabase client initialization for client-side usage
└── data/
      └── data.json             // Sample dataset (this can be later expanded using AI)
</pre>

<h2>Game Instructions</h2>
<ol>
  <li><strong>Start the Game</strong>: Open the game at <a href="http://localhost:3000">http://localhost:3000</a>.</li>
  <li><strong>Gameplay</strong>: You'll be presented with clues about a destination. Choose the correct answer from a list of options.</li>
  <li><strong>Score Calculation</strong>: For each correct answer, your score increases by 1 point. For each incorrect answer, your score decreases by 1 point.</li>
  <li><strong>Challenge a Friend</strong>: You can share a unique link with a friend to challenge them to beat your score.</li>
</ol>

<h2>Improvements & Future Features</h2>
<ul>
  <li><strong>Timer</strong>: Add a countdown timer for each question to increase the challenge.</li>
  <li><strong>Leaderboard</strong>: Display a leaderboard showing the top players based on their scores.</li>
  <li><strong>User Profiles</strong>: Allow users to create accounts, save their progress, and see their score history.</li>
  <li><strong>Dynamic Question Bank</strong>: Pull questions from an external source to make the game more diverse.</li>
  <li><strong>Multiplayer Support</strong>: Allow multiple users to play in real-time on the same game.</li>
  <li><strong>UI/UX Enhancements</strong>: Add animations, sound effects, and more dynamic visual elements to improve the user experience.</li>
</ul>
