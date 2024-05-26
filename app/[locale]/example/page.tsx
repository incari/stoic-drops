// pages/newsletter.tsx

import { createEmail } from "../../api/chat-gpt/create-email";
import { Newsletter } from "../../components/email-templates/generic";
import { renderNewsletter } from "../../components/email-templates/newsletter";
import { renderWelcomeEmail } from "../../components/email-templates/welcome";

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
  const welcome = renderWelcomeEmail("Martin");
  return (
    <>
      <div
        style={{ maxWidth: "700px", margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: welcome }}
      />
    </>
  );
};

export default Page;
