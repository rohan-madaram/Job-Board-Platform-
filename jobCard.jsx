import React from "react";

export default function JobCard({ job }) {
  if (!job) return null;

  return (
    <div className="bg-gradient-to-r from-white to-indigo-50 dark:from-gray-800 dark:to-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 rounded-2xl border border-gray-200 dark:border-gray-600 cursor-pointer transform hover:scale-105">
      <h2 className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-3">
        {job.title}
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-1">
        <span className="font-semibold">Company:</span> {job.company}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-3">
        <span className="font-semibold">Location:</span> {job.location}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {job.description}
      </p>
    </div>
  );
}
