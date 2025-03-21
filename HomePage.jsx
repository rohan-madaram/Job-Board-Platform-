import React from "react";
import { Link } from "react-router-dom";
import useJobStore from "../store/useJobStore";
import JobCard from "../components/JobCard";

export default function HomePage() {
  const jobs = useJobStore((state) => state.jobs);

  return (
    <div className="p-10 min-h-screen bg-gradient-to-tr from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-indigo-800 dark:text-indigo-300">
        🚀 Explore Available Jobs
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <Link to={`/job/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          ))
        ) : (
          <p className="text-center text-xl">No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
}
