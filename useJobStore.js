import { create } from "zustand";

const useJobStore = create((set) => ({
  jobs: [
    {
      id: "1",
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      description: "Build modern UIs with React and Tailwind CSS."
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "DevSolutions",
      location: "Bangalore",
      description: "Work with Node.js, Express, and MongoDB."
    }
  ],
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
}));
export default useJobStore;
