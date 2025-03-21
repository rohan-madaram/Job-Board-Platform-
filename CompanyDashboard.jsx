import React from "react";
import { useForm } from "react-hook-form";
import useJobStore from "../store/useJobStore";

export default function CompanyDashboard() {
  const { register, handleSubmit, reset } = useForm();
  const addJob = useJobStore((state) => state.addJob);

  const onSubmit = (data) => {
    const newJob = { ...data, id: Date.now().toString() };
    addJob(newJob);
    reset();
    alert("🎉 Job Posted Successfully!");
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-400 text-center">
        Post a New Job
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl border border-gray-200 dark:border-gray-700">
        
        <input
          {...register("title")}
          placeholder="Job Title"
          className="input"
          required
        />
        
        <input
          {...register("company")}
          placeholder="Company Name"
          className="input"
          required
        />
        
        <input
          {...register("location")}
          placeholder="Location"
          className="input"
          required
        />
        
        <textarea
          {...register("description")}
          placeholder="Job Description"
          className="input md:col-span-2 h-32 resize-none"
          required
        />

        <div className="md:col-span-2 flex gap-4 justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Post Job
          </button>
          <button
            type="reset"
            onClick={() => reset()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
