import React from 'react';
import LoginForm from '../components/auth/LoginForm';

/**
 * IndexPage component.
 * This page now serves as the Login Page for the application.
 * It displays the LoginForm component centered on the screen.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <LoginForm />
    </div>
  );
};

export default IndexPage;