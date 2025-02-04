import { GraduationCap, BookOpen, Languages } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pt-20 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              KelimeUsta
              <span className="block text-purple-600 dark:text-purple-400">Master Turkish Words</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Enhance your Turkish vocabulary through immersive paragraph-based learning.
              Practice translations at your own pace and level.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400">
                Start Learning
              </button>
              <button className="text-lg font-semibold leading-6 text-gray-900 hover:text-purple-600 dark:text-gray-100 dark:hover:text-purple-400">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <Languages className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Level-Based Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Progress through carefully curated content tailored to your proficiency level.
            </p>
          </div>
          
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Contextual Practice</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn words in context through real-world paragraphs and scenarios.
            </p>
          </div>
          
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800 border-t-4 border-purple-600 dark:border-purple-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
              <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Translation Exercises</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Improve your skills with interactive translation practices and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}