
import React from "react";

const DeveloperSection = () => {
  return (
    <section className="w-full py-12 bg-white dark:bg-gray-900" id="developer">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="druk-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-druk-500 text-black mr-2">06</span>
            <span>Developer</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-druk-500 flex items-center justify-center text-4xl font-bold">
              BS
            </div>
            
            <div className="text-left space-y-4">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Bishal Sharma</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Lead Developer at Druk Robot
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-druk-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">bishalsharma153@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-druk-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Bhutan</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400">
                Leading the innovation of humanoid robotics technology with a focus on Bhutanese cultural integration and sustainable design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
