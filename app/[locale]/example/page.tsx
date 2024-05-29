"use client";

import { renderEmail } from "../../utils/email-templates/newsletter";
import { Newsletter, generateNewsletter } from "./action";
import { useState } from "react";

export default function Page() {
  const [generation, setGeneration] = useState<Newsletter>();
  const htmlContent = renderEmail(generation);

  return (
    <div className="space-y-4">
      <button
        onClick={async () => {
          const generatedNewsletter = await generateNewsletter();
          setGeneration(generatedNewsletter);
        }}
      >
        Create newsletter email
      </button>

      <div
        style={{ maxWidth: "700px", margin: "auto" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <pre
        style={{
          whiteSpace: "wrap",
        }}
      >
        {JSON.stringify(generation, null, 2)}
      </pre>
    </div>
  );
}
