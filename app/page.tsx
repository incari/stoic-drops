import { redirect } from "next/navigation";

export default function RootPage() {
  return <h1>hola</h1>;
  redirect("/en");
}
