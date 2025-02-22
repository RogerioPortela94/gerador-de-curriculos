import React from 'react';

interface EmailProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Email: React.FC<EmailProps> = ({ email, setEmail }) => {
  return (
    <div className="form-group text-secondary">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Email;