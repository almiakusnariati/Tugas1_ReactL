import React from 'react';
import { Candidate } from '../types.tsx';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <img src={candidate.photo} alt={candidate.name} />
      <h2>{candidate.number}. {candidate.name}</h2>
      <p>Batch: {candidate.batch}</p>
    </div>
  );
};

export default CandidateCard;
