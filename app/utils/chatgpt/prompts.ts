const quote = (language: string) => {
  return `
  
- Act as a philosopher copywriter and expert in the psychology of habits to develop a newsletter 
that inspires and motivates subscribers to live a more intentional and fulfilling life. 
Specifically in the realm of Stoic philosophy.

- The language of the content should be define by the ISO 639-1 code: [${language}]

- Provide them in JSON format with the following keys: 
title, author, quote, insight,advice.

Always reply in JSON format, otherwise return null

`;
};

const translationPrompt = (lang: string, response: string) => `
Only respond with a plain json format, nothing else.

Translate the following English text to ${lang}: ${response}
    {
      title:"...",
      author:"...",
      quote:"...",
      insight: "...",
      advice:"...",
    } 
  `;
export { quote, translationPrompt };
