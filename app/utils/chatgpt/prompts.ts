const intro = `
Welcome to today's drop, curated for your personal growth journey. 
Here, we provide tools and insights to enhance your daily life, exploring timeless quotes,
 reflections, exercises, and real-life applications. Through stoic principles, 
 discover how to navigate challenges with grace, leading to a more fulfilling existence. 
 Let's dive in and uncover transformative wisdom together.
 `;

const footer = `
  Thank you for being a part of our Stoic Drops community. 
  Remember, true wisdom comes from understanding and practicing the principles of Stoic philosophy in your daily life.
  Embrace the journey, find tranquility in the present moment, and let Stoic wisdom guide you to a more intentional
  and fulfilling life.</p><p>Enjoyed this issue? Forward it to a friend who might benefit from a dose of Stoic wisdom. 
  Let\'s grow our community together!</p><p>Feel free to share your thoughts or reach out to us at
  <a href="mailto:contact@stoicdrops.com">contact@stoicdrops.com</a>.</p>
  <p>Remember, "The happiness of your life depends upon the quality of your thoughts." – Marcus Aurelius</p>
       `;

const newsletterPrompt = (quote: string, language: string) => {
  console.log(language);
  return `

- The words enclosed by [] are variables. 
- Act as a copywriter and expert in the psychology of habits to develop a newsletter
 that inspires and motivates subscribers to live a more intentional and fulfilling life.
  Specifically in the realm of Stoic philosophy.

- The newsletter will be wrote in the following language enclosed by [] on the ISO 639-1 code format: [${language}] 

- Use the following quote to generate the content enclosed by []: [${quote}]

- Add this intro enclosed by [] but with the title section as a empty string: [${intro}]

- Add a section with the quote.

- Add a reflection section where explain the initial quote and develop a short story of 
  how this can improve your life.

- Add a practices section where describes activities that the reader can execute in 
they daily live to practice the stoicism.

-Add examples of Real-life Applications: Share stories or examples of how famous individuals
 or everyday people have applied Stoic principles in their lives to make the philosophy 
 more relatable and actionable.

 - Add this the content enclosed by [] as footer section but using {"Stay Stoic, Stay Resilient.} as title of that section: [${footer}]

- Return a JSON file with HTML in the following structure:

type Section = {
  title: string;
  content: string;
};

export type Newsletter = {
  title: string;
  sections: Section[];
};

`;
};

export { newsletterPrompt };
