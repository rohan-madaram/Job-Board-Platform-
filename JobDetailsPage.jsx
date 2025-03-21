import React from "react";
import { useParams } from "react-router-dom";
import jobData from "../data/jobs.json";

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const job = jobData.find((job) => job.id.toString() === jobId);

  if (!job) return <div className="text-center mt-10 text-red-500">Job not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">{job.title}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2"><strong>Company:</strong> {job.company}</p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-800 dark:text-gray-100 mb-4 leading-relaxed">{job.description}</p>
      <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-5 rounded-lg">
        <h2 className="font-semibold text-2xl mb-2">Requirements</h2>
        <ul className="list-disc list-inside space-y-1">
          {job.requirements?.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
