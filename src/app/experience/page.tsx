import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Actual Experience Data from Resume
interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string; // Optional location
  startDate: Date;
  endDate: Date | null;
  description: string[];
}

// Updated Data with Shortened Descriptions
const experiencesData: Experience[] = [
  {
    id: 1,
    title: "Research Intern, Computational Condensed Matter Physics",
    company: "Dr. Castillo Research Group, Ohio University",
    location: "Athens, OH",
    startDate: new Date(2023, 4), // May 2023
    endDate: null, // Present
    description: [
      "Developed/ran simulations of supercooled liquids using HPC resources.",
      "Created Python scripts for relaxation metric analysis on large datasets.",
      "Presented at APS Global Summit, APS EGLS, NQPI seminars, and OU Expos.",
    ],
  },
  {
    id: 2,
    title: "Teaching Assistant",
    company: "Department of Physics and Astronomy, Ohio University",
    location: "Athens, OH",
    startDate: new Date(2023, 7), // Aug 2023
    endDate: null, // Present
    description: [
      "Led weekly lab sessions for PHYS 2001 (Introduction to Physics).",
      "Hosted weekly sessions for PHYS 2054 (General Physics I).",
    ],
  },
  {
    id: 3,
    title: "Supplemental Instruction Leader - Differential Equations",
    company: "Mathematics Department, Ohio University",
    location: "Athens, OH",
    startDate: new Date(2023, 7), // Aug 2023
    endDate: new Date(2024, 7), // Aug 2024
    description: [
      "Created and structured the SI course for MATH 3400 (Differential Equations).",
      "Authored 110+ pages of LaTeX problem sets; delivered biweekly review sessions.",
    ],
  },
  {
    id: 4,
    title: "Research Intern, Computational Solid State Physics",
    company: "Dr. Govorov Research Group, Ohio University",
    location: "Athens, OH",
    startDate: new Date(2024, 2), // Mar 2024
    endDate: new Date(2024, 7), // Aug 2024
    description: [
      "Analyzed nonlinear charge carrier spreading in lateral superlattices using MATLAB.",
    ],
  },
  {
    id: 5,
    title: "Physics & Math Peer Tutor",
    company: "Department of Physics and Astronomy, Ohio University",
    location: "Athens, OH",
    startDate: new Date(2022, 9), // Oct 2022
    endDate: new Date(2023, 9), // Oct 2023
    description: [
      "Provided tutoring for Calculus, General Physics, Linear Algebra, and Diff Eq.",
    ],
  },
  {
    id: 6,
    title: "Records Assistant",
    company: "Tropic Air",
    location: "San Pedro, Belize",
    startDate: new Date(2017, 4), // May 2017
    endDate: new Date(2019, 7), // Aug 2019
    description: [
      "Digitized 20+ years of aircraft parts and flight logs using ARMS software.",
      "Maintained compliance with Belize Department of Civil Aviation directives.",
    ],
  },
];

// Simple duration calculation function returning text
function calculateDuration(startDate: Date, endDate: Date | null): string {
  const end = endDate ?? new Date();
  let years = end.getFullYear() - startDate.getFullYear();
  let months = end.getMonth() - startDate.getMonth();
  if (months < 0) { years--; months += 12; }
  let durationString = "";
  if (years > 0) durationString += `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) { if (durationString) durationString += " "; durationString += `${months} month${months > 1 ? "s" : ""}`; }
  return durationString || "< 1 month";
}

// Date Formatter
const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function ExperiencePage() {
  // Refined sorting logic
  const experiences = [...experiencesData].sort((a, b) => {
    const aIsPresent = a.endDate === null;
    const bIsPresent = b.endDate === null;

    if (aIsPresent && !bIsPresent) {
      return -1; // a (present) comes before b (past)
    } else if (!aIsPresent && bIsPresent) {
      return 1; // b (present) comes before a (past)
    } else if (aIsPresent && bIsPresent) {
      // Both are present, sort by start date ascending (longest duration first)
      return a.startDate.getTime() - b.startDate.getTime();
    } else {
      // Neither is present, sort by end date descending (most recent first)
      // We need to ensure endDate is not null here, but the checks above guarantee it.
      return (b.endDate as Date).getTime() - (a.endDate as Date).getTime();
    }
  });

  return (
    <main>
      <div className="my-12 md:my-20">
        <header className="container mb-3 mt-[-40px] md:mt-[-90px] md:mb-[0] space-y-2 md:mb-12">
          <h1 className="text-3xl font-heading md:text-3xl">Experience</h1>
          <p className="text-text/80">My professional journey so far.</p>
        </header>

        {/* Simple Responsive Grid Layout */}
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-2 md:-mx-4 lg:-mx-6"> {/* Negative margin for spacing */}
            {experiences.map((exp) => {
              const duration = calculateDuration(exp.startDate, exp.endDate);
              const startDateFormatted = formatDate(exp.startDate);
              const endDateFormatted = exp.endDate ? formatDate(exp.endDate) : "Present";
              
              return (
                // Grid item: full width on mobile, half on md+, third on lg+
                <div key={exp.id} className="w-full p-2 md:w-1/2 lg:w-1/3 md:p-4 lg:p-6">
                  <Card className="flex flex-col h-full bg-bw border-border shadow-shadow"> {/* Use h-full for consistent height in row */} 
                    <CardHeader className="pb-3"> {/* Slightly more bottom padding */}
                      <CardTitle className="text-lg font-heading">{exp.title}</CardTitle>
                      <p className="text-sm text-text/80">
                        {exp.company}
                        {exp.location && `, ${exp.location}`}
                      </p>
                      {/* Added Date Range and Duration */}
                      <p className="text-xs text-text/60 pt-1">
                        {startDateFormatted} - {endDateFormatted}
                        <span className="mx-1">·</span>
                        ({duration})
                      </p>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0"> {/* Allow content to grow */}
                      <ul className="list-disc space-y-1.5 pl-5 text-sm text-text/90">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
} 