import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-2">Redirecting to the home page...</p>
    </div>
  );
};

export default NotFoundPage;
