export const welcomeContent = (name?: string) => {
  return {
    title: "Welcome to Stoic Drops!",
    sections: [
      {
        title: "",
        content: `<p>Dear ${name},</p>
                <p>Welcome to Stoic Drops! We're thrilled to have you join our
                 community dedicated to exploring the wisdom and principles of Stoic philosophy.</p>`,
      },
      {
        title: "What to Expect:",
        content: `<ul>
                  <li><strong>Weekly Insights:</strong> Deep dives into key Stoic concepts 
                  and teachings from philosophers like Seneca, Epictetus, and Marcus Aurelius.</li>

                  <li><strong>Practical Exercises:</strong> Simple, actionable steps to incorporate 
                  Stoic practices into your routine.</li>

                  <li><strong>Inspiring Stories:</strong> Real-life examples of how Stoicism has 
                  helped individuals overcome challenges and find peace.</li>

                  <li><strong>Community Connection:</strong> Opportunities to connect with fellow 
                  subscribers, share your experiences, and support each other on this journey.</li>
                </ul>`,
      },
      {
        title: "",
        content: `<p>Remember, the journey to a Stoic life is a continuous process of learning, reflection, and growth.
                 We're here to support you every step of the way.</p>
                <p>Stay strong, stay virtuous, and welcome to Stoic Drops.</p>
                <p>With gratitude,</p>
                <p>Martín<br>
                   Founder, Stoic Drops Newsletter<br>`,
      },
    ],
  };
};
