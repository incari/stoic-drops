// pages/newsletter.tsx

import { createEmail } from "../../api/chat-gpt/create-email";
import {
  Newsletter,
  renderNewsletter,
} from "../../components/email-templates/basic";

async function Page() {
  const language = "de";
  const content = await createEmail({ language });

  return (
    <NewsletterPage
      content={content}
      language={language}
    />
  );
}

const NewsletterPage = ({
  content,
  language,
}: {
  content: Newsletter;
  language: string;
}) => {
  const htmlContent = renderNewsletter(content);

  return (
    <>
      <div>Example on: {language}</div>
      <div
        style={{ maxWidth: "700px", margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </>
  );
};

export default Page;
