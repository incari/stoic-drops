type Section = {
  title: string;
  content: string;
};

type EmailContentType = {
  title: string;
  sections: Section[];
};

const emailHead = (title: string) => {
  return `<head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6 }
                h1 { color: #222; }
                h2 { color: #222; }
                p { margin: 10px 0; font-size: 16px }
                #container { max-width:700px; margin: 0 auto;}
            </style>
        </head>`;
};

const buildEmail = (sections: Array<Section>) =>
  sections
    .map(
      (section) => `
        <section style="margin-bottom: 20px;">
            <h2>${section.title}</h2>
            <p style="white-space: pre-wrap;">${section.content}</p>
        </section>
    `
    )
    .join("");

export { emailHead, buildEmail };
export type { EmailContentType, Section };
