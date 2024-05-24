import React from 'react';
import './App.css';
import { candidates } from './components/candidates';
import CandidateCard from './components/CandidateCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Pemilihan Presiden 2025</h1>
      <div className="candidate-list">
        {candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}

export default App;
