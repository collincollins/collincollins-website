import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Project data structure (removed customStyle)
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

// Updated Project Data (Reordered, updated Market desc)
const projects: Project[] = [
  {
    id: 1,
    title: "dynamical heterogeneity visualization", // Lowercase title
    description: "A web-app visualizing spatial clustering of particle mobility in simulated glass-forming liquids. Highlights fastest/slowest particles.",
    tech: ["JavaScript", "Three.js", "WebGL", "HTML/CSS"],
    link: "https://dynamicalheterogeneity.com",
  },
  {
    id: 7, 
    title: "Can You Beat The Market?",
    description: "Try to outperform a buy-and-hold strategy by timing trades in simulated or real S&P 500 data. See community statistics.", // Updated description
    tech: ["Svelte", "Chart.js", "JS", "CSS"], 
    link: "https://canyoubeatthemarket.com",
  },
  {
    id: 2,
    title: "Don't Buy That!",
    description: "Ever wonder what your money could grow into if you skip that purchase?",
    tech: ["Svelte", "JS", "CSS"],
    link: "https://dontbuythat.org", // UPDATE LINK
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="my-12 md:my-20"> 
        <header className="container mb-3 mt-[-40px] md:mt-[-90px] md:mb-[0] space-y-2 md:mb-12">
          <h1 className="text-3xl font-heading md:text-3xl">Projects</h1>
          <p className="text-text/80">A collection of things I've built.</p>
        </header>

        <div className="container">
          <div className="flex flex-wrap justify-center -mx-2 md:-mx-4 lg:-mx-6">
            {projects.map((project) => {
              
              // --- Render DHV Card --- 
              if (project.title === "dynamical heterogeneity visualization") {
                return (
                  <div key={project.id} className="w-full p-2 md:w-1/2 lg:w-1/3 md:p-4 lg:p-6">
                    <Card className="flex flex-col h-full bg-[#f0f0f0] border-border shadow-shadow">
                      <CardHeader className="p-6 pb-3">
                        <CardTitle className="nb-font lowercase tracking-wide leading-tight">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-1 pb-10">
                        <p className="text-[0.85em] !text-[#555] leading-snug mb-3 nb-font font-bold">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="neutral" className="nb-font border-border !bg-transparent !text-text shadow-none flex justify-center whitespace-nowrap text-center text-[11px]">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 flex items-end justify-end">
                         <a href={project.link} target="_blank" rel="noopener noreferrer" 
                              className={cn(
                                "inline-flex items-center justify-center whitespace-nowrap",
                                "h-10 p-2 text-sm transition-all",
                                "nb-font font-bold nb-border nb-shadow",
                                "bg-[#80c080] hover:bg-[#27ae60] text-[#000]", 
                                "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                              )}
                        >
                          play
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                );
              } 
              // --- Render Market App Card --- 
              else if (project.title === "Can You Beat The Market?") {
                 return (
                  <div key={project.id} className="w-full p-2 md:w-1/2 lg:w-1/3 md:p-4 lg:p-6">
                    <Card className="flex flex-col h-full market-card bg-[#e5eafbb6]">
                      <CardHeader className="p-6 pb-3">
                        <CardTitle className="market-card-title">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-1 pb-10">
                        <p className="market-card-description">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {project.tech.map((tech) => (
                            <Badge key={tech} className="market-badge justify-center bg-[#435b9f] border-black border-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 flex items-end justify-end">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                            className={cn("market-button")}
                        >
                          Start Simulation
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                );
              } 
              // --- Render Don't Buy That! App Card --- 
              else if (project.title === "Don't Buy That!") {
                return (
                  <div key={project.id} className="w-full p-2 md:w-1/2 lg:w-1/3 md:p-4 lg:p-6">
                    <Card className="flex flex-col h-full market-card bg-[#F3F4F6]">
                      <CardHeader className="p-6 pb-3">
                        <CardTitle className="market-card-title">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0 flex-1 pb-10">
                        <p className="market-card-description">
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                          {project.tech.map((tech) => (
                            <Badge key={tech} className="market-badge justify-center bg-[#435b9f] border-black border-2">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 flex items-end justify-end">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" 
                            className={cn("market-button")}
                        >
                          Calculate
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                );
              } 
            })}
          </div>
        </div>
      </div>
    </main>
  );
} 