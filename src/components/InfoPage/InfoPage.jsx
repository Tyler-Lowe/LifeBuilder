import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1>Welcome to the Future Builder App</h1>
  
  <h2>Features and Benefits</h2>
  <p>Are you ready to shape your future? Our Future Builder App is designed to help you envision your path ahead and make informed decisions about your academic and professional journey. Whether you're a student exploring majors, a professional considering career shifts, or simply curious about your potential, our app is your compass.</p>
  
  <h3>Explore Your Potential</h3>
  <p>Dive into a world of possibilities as you explore various academic majors and career paths. Discover the exciting fields that align with your passions and strengths.</p>
  
  <h3>Visualize Your Path</h3>
  <p>See your potential future laid out before you. Our app provides clear and concise visualizations, including salary projections, living expenses, and potential student loan payments.</p>
  
  <h3>Personalized Insights</h3>
  <p>Receive tailored recommendations based on your interests, strengths, and goals. Our intelligent algorithms analyze your data to offer relevant suggestions for your academic and professional growth.</p>
  
  <h3>Interactive Planning</h3>
  <p>Craft your own roadmap to success with our interactive planning tools. Customize your educational journey by selecting majors, adjusting living costs, and setting financial goals.</p>
  
  <h2>Technologies Utilized</h2>
  <ul>
    <li><strong>React.js:</strong> Our user-friendly and responsive interface is powered by React.js. Enjoy seamless interactions and a dynamic experience as you explore your future possibilities.</li>
    <li><strong>PostgreSQL:</strong> We leverage PostgreSQL, a powerful open-source relational database system, to securely store and manage your data. Your information is safe and readily accessible whenever you need it.</li>
    <li><strong>Express.js and Node.js:</strong> Our backend is powered by Express.js, a fast and flexible web application framework for Node.js. This combination ensures a robust and efficient backend infrastructure.</li>
    <li><strong>Material UI:</strong> The intuitive and visually appealing design of our app is made possible by Material UI. This UI framework enhances the user experience, making navigation and interaction a breeze.</li>
  </ul>
  
  <h2>Getting Started</h2>
  <ol>
    <li><strong>Sign Up or Log In:</strong> Create an account or log in to start your journey. Your information is securely stored and easily accessible whenever you visit.</li>
    <li><strong>Set Your Goals:</strong> Define your academic and career objectives. Whether it's choosing a major, estimating future earnings, or managing expenses, we have you covered.</li>
    <li><strong>Explore Majors:</strong> Browse a comprehensive list of majors and learn about potential careers and salaries. Select the paths that intrigue you the most.</li>
    <li><strong>Visualize Your Future:</strong> See your future earnings, expenses, and more through interactive charts and tables. Our app helps you make sense of complex financial data.</li>
    <li><strong>Customize Your Path:</strong> Tailor your academic and financial plan based on your preferences and goals. Adjust variables like living costs, loan payments, and more.</li>
    <li><strong>Get Insights:</strong> Receive personalized insights and recommendations based on your chosen path. Our algorithms analyze your data to offer valuable suggestions.</li>
  </ol>
  
  <h2>Special Thanks To:</h2>
  <ul>
  <li>Zac</li>
  <li>Chris</li>
  <li>Peter</li>
  <li>Hannah</li>
  <li>Javi</li>
  </ul>

    </div>
  );
}

export default InfoPage;
