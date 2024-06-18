import { Newsletter } from "@/utils/supabase/services/zodSchema";
import { EmailContentType, buildEmail, emailHead } from "./generic";

const newsletter2: Newsletter = {
  title: "Reflexiones y Prácticas Estoicas para la Vida Diaria",
  sections: [
    {
      title: "Cita de Marco Aurelio",
      content:
        "<p><strong>&quot;La felicidad de tu vida depende de la calidad de tus pensamientos.&quot;</strong> - Marco Aurelio</p><p>Esta frase de Marco Aurelio nos invita a reflexionar sobre el poder que tienen nuestros pensamientos para moldear nuestra experiencia de vida. La calidad de nuestros pensamientos determina en gran medida cómo percibimos y reaccionamos ante diferentes situaciones. Si nuestros pensamientos son negativos o derrotistas, es probable que nuestra percepción de la vida también lo sea. Por otro lado, al cultivar pensamientos positivos y constructivos, podemos enfrentar los retos con mayor optimismo y resiliencia.</p>",
    },
    {
      title: "Prácticas Diarias para Mejorar la Calidad de Tus Pensamientos",
      content:
        "<ol><li><strong>Meditación de Atención Plena</strong>: Dedica 10 minutos cada día a meditar, centrándote en el momento presente y observando tus pensamientos sin juzgarlos. Esto te ayudará a desarrollar una mayor conciencia y control sobre ellos.</li><li><strong>Reemplazo de Pensamientos Negativos</strong>: Cada vez que te descubras pensando negativamente, intenta reemplazar esos pensamientos por otros más positivos o realistas.</li><li><strong>Lectura Inspiradora</strong>: Incluye en tu rutina diaria la lectura de textos que fomenten una perspectiva positiva y constructiva sobre la vida.</li></ol>",
    },
    {
      title: "Aplicaciones en la Vida Real",
      content:
        "<ol><li><strong>El Caso de Viktor Frankl</strong>: Sobreviviente del Holocausto y psiquiatra, Frankl encontró sentido en las circunstancias más desoladoras imaginables. En su libro 'El hombre en busca de sentido', explica cómo, incluso en el horror de un campo de concentración, algunos prisioneros pudieron encontrar un propósito en la vida al centrarse en sus pensamientos y en la ayuda a los demás, demostrando que incluso bajo condiciones extremas, la calidad de nuestros pensamientos puede definir nuestra experiencia.</li><li><strong>Experiencias Cotidianas</strong>: Considera a una persona que enfrenta una enfermedad crónica. Al elegir centrarse en los aspectos positivos de su vida, como el tiempo con la familia o los pequeños logros diarios, esta persona puede experimentar una calidad de vida significativamente mejorada, a pesar de las dificultades físicas.</li></ol>",
    },
  ],
};

export function renderEmail(newsletter: EmailContentType = newsletter2) {
  const { title, sections } = newsletter;

  const htmlContent = buildEmail(sections);

  return `
        <!DOCTYPE html>
        <html lang="en">
        ${emailHead(title)}
        <body>
            <div id="container">
            <h1>${title}</h1>
            ${htmlContent}
            </div>
        </body>
        </html>
    `;
}
