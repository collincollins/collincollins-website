"use client"; // Needed for Dialog state

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea might be needed for contact form
import { ArrowRight, Github, Linkedin } from "lucide-react";
import emailjs from 'emailjs-com'; // Import EmailJS
import { useToast } from "@/hooks/use-toast"; // Corrected import path

export function Hero() {
  const { toast } = useToast(); // Initialize toast hook
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // To control dialog closing

  const SERVICE_ID = "service_mc1ruf6";
  const TEMPLATE_ID = "template_ku692pa";
  const PUBLIC_KEY = "eiQxZEm_9uv9OWC5f";

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        toast({ // Success toast
          title: "Message Sent!",
          description: "Thanks for reaching out, I'll get back to you soon.",
        });
        // Clear form and close dialog
        setName("");
        setEmail("");
        setMessage("");
        setIsDialogOpen(false);
      })
      .catch((err) => {
        console.error('EmailJS FAILED...', err);
        toast({ // Error toast
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Couldn't send the message. Please try again later or contact me directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="mt-0 mb-12 md:mt-5 md:mb-20">
      <div className="container flex flex-col">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 lg:gap-16"> {/* Use max-w-4xl for consistency */}
          {/* Top Section: Info + Image */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
            {/* Left Side: Text Info */}
            <div className="order-last text-center md:order-1 md:w-3/5 md:text-start"> {/* Adjusted width */}
              <div className="mb-6 flex flex-col gap-y-2">
                <h1 className="text-4xl font-bold md:text-5xl">Collin Collins</h1>
                <h2 className="text-lg font-medium text-text/80"> {/* Added subtle color */}
                  Physics and Math Student
                </h2>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-0 sm:justify-center md:justify-start"> {/* Adjusted spacing/alignment */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="default">
                      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[90vw] max-w-[425px] bg-main border-border border-2 p-6 rounded-base"> {/* Added width constraint */}
                    <DialogHeader>
                      <DialogTitle>Contact Me</DialogTitle>
                      <DialogDescription>
                        Fill out the form below and I'll get back to you.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleContactSubmit} className="grid gap-4 py-4">
                      {/* Updated grid layout for responsiveness */}
                      <div className="grid gap-2 sm:grid-cols-4 sm:items-center sm:gap-4">
                        <Label htmlFor="contact-name" className="sm:text-right">
                          Name
                        </Label>
                        <Input
                          id="contact-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="sm:col-span-3" 
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="grid gap-2 sm:grid-cols-4 sm:items-center sm:gap-4">
                        <Label htmlFor="contact-email" className="sm:text-right">
                          Email
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="sm:col-span-3"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="grid gap-2 sm:grid-cols-4 sm:items-start sm:gap-4"> {/* items-start for textarea */}
                         <Label htmlFor="contact-message" className="sm:text-right sm:pt-2"> {/* Align label with top of textarea */}
                          Message
                        </Label>
                         <Textarea 
                          id="contact-message" 
                          placeholder="Your message..." 
                          value={message}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                          className="sm:col-span-3 min-h-[100px]"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <DialogFooter className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end sm:space-x-2 sm:gap-0 sm:space-y-0">
                        <Button type="button" variant="noShadow" className="w-full sm:w-auto" onClick={() => setIsDialogOpen(false)} disabled={isSubmitting}>Cancel</Button>
                        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              {/* Social Links */}
              <div className="mt-5 mb-5 md:mt-10 flex justify-center space-x-5 md:justify-start">
                <a href="https://github.com/collincollins" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-6 w-6 text-text/60 transition-opacity hover:text-text/100" />
                </a>
                <a href="https://www.linkedin.com/in/collin-squared" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-6 w-6 text-text/60 transition-opacity hover:text-text/100" />
                </a>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative order-1 mx-auto md:order-last md:w-2/5"> 
              <div className="flex items-center justify-center">
                {/* Wrapper div for styling - Now responsive */}
                <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-[20%] border-[6px] border-border overflow-hidden"> {/* Added md: size classes */} 
                  <Image
                    alt="Collin Collins Portrait"
                    loading="lazy"
                    fill // Use fill to make image cover the wrapper
                    sizes="(max-width: 768px) 250px, 300px" // Adjusted sizes prop
                    className="object-cover" // Ensure image covers the area
                    src="/images/collin-portrait.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: About Me Text */}
          <div className="mt-[-20px] space-y-6 rounded-base border-2 border-border bg-bw p-6 md:p-8 shadow-shadow">
            <div>
              <h3 className="mb-4 font-heading text-xl md:text-2xl font-medium"> {/* Changed h5 to h3 */}
                About Me
              </h3>
              {/* Using placeholder text from your example, update as needed */}
              <p className="mb-4 text-text/90">
              I'm a 4th year undergraduate Physics and Math student at Ohio University with a passion for computational physics. 
              </p>
              <p className="mb-4 text-text/90">
              Currently, I'm developing and analyzing molecular dynamics simulations and using high-performance computing resources to characterize dynamic heterogeneity in glassy diatomic liquids. I've presented my research at regional and global conferences, research expos, and I am working towards publishing my group's work.
              </p>
              <p className="mb-4 text-text/90">
              Teaching is another passion of mine. I created and led a Supplemental Instruction course for Differential Equations, typesetting and presenting extensive problem and solution sets to support my students.
              </p>
              <p className="text-text/90">
              I'm proficient in Python, MATLAB, LaTeX, and tools like HPC, Git, and Linux. I'm eager to connect with others who share my enthusiasm for physics and making comupters do the hard stuff!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 