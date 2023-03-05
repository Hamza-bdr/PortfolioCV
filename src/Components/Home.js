import React from 'react';
import '../App.css';
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <header className="bg-slate-50 shadow">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to my website</h1>
          <p className="mt-2 text-xl text-gray-600">I'm a freelance web developer based in Paris</p>
        </div>
      </header>
      <main className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Web Design</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum hala, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing hala, ultricies sed, dolor.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">Web Development</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit hala, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim hala amet, adipiscing nec, ultricies sed, dolor.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900">SEO Optimization</h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit hala, adipiscing nec, ultricies hala, dolor.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <p className="text-sm text-gray-600">&copy; 2023 My Website. All rights reserved.</p>
          <div className="flex items-center">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12c0 5.523 3.757 10.174 8.872 11.493.647.12.884-.28.884-.622 0-.307-.012-1.117-.018-2.195-3.607.782-4.367-1.74-4.367-1.74-.589-1.495-1.437-1.893-1.437-1.893-1.174-.807.089-.792.089-.792 1.298.09 1.983 1.33 1.983 1.33 1.156 1.977 3.032 1.406 3.77 1.077.117-.837.451-1.407.82-1.728-2.87-.327-5.896-1.436-5.896-6.398 0-1.414.504-2.572 1.332-3.475-.134-.328-.577-1.647.126-3.438 0 0 1.09-.348 3.57 1.33A12.413 12.413 0 0 1 12 6.945c1.102 0 2.204.147 3.246.436 2.48-1.678 3.57-1.33 3.57-1.33.704 1.791.262 3.11.128 3.438.83.903 1.332 2.061 1.332 3.475 0 4.975-3.03 6.067-5.907 6.387.464.4.875 1.19.875 2.398 0 1.732-.016 3.125-.016 3.55 0 .343.232.746.89.62A11.987 11.987 0 0 0 23 12c0-6.075-4.925-11-11-11z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default HomePage;



