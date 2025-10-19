import { Link } from "react-router";

export default function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">
          Welcome to Dashboard
        </h1>
        <Link to={"/dasboard"} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
          Get Started
        </Link>
      </div>
    </main>
  );
}
