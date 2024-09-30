import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TracingBeamDemo } from "@/components/common/ProjectScroll";
import ContactForm from "@/components/common/ContactForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import PropertiesSection from "@/components/Homesections/PropertiesSection";
import ExploreProperties from "@/components/Projectsection/ExploreMore";

const ProjectDetail = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      projectName: "",
    });
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  
    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitStatus(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          setSubmitStatus("success");
          console.log("Form submitted successfully");
          setFormData({ name: "", phone: "", email: "", projectName: "" });
        } else {
          setSubmitStatus("error");
          console.error("Form submission failed");
        }
      } catch (error) {
        setSubmitStatus("error");
        console.error("Error submitting form:", error);
      }
    };
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {projectSlug}= router.query
    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                // Fetch project data from the external API
                const response = await axios.get(
                    `https://avishkar.giantwheeltech.com/wp-json/wp/v2/project/${projectSlug}`
                );

                // Construct the project object based on the API response
                const fetchedProject = {
                    id: response.data.id,
                    slug: response.data.slug,
                    title: response.data.acf.title,
                    summary: response.data.acf.summary, // Corrected spelling from 'summery' to 'summary'
                    content: response.data.acf.content,
                    address: response.data.acf.address,
                    image: response.data.acf.image,
                    gallery: response.data.acf.photo_gallery?.gallery[0] || null,
                    category: response.data.project_category,
                    tags: response.data.project_tag,
                };

                // Set the fetched project data to state
                setProject(fetchedProject);
                console.log("project", project)
            } catch (error) {
                // Log the error and update the error state
                console.error("Error fetching project:", error);
                // setError("Failed to fetch project details");
            } finally {
                // Update loading state
                setLoading(false);
            }
        };

        fetchProjectData();
    }, [projectSlug]);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="px-8 w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
            <TracingBeamDemo project={project}/>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-[#999999] bg-opacity-20 py-10 lg:py-24">
        <div className="px-8 w-2/3">
          <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
          <Card className="w-full py-10 flex items-center justify-center">
      <CardContent className="w-full px-10">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="w-full"
              />
            </div>

            
          </div>
          <CardFooter className="flex flex-col items-center mt-6">
            <Button type="submit" className="w-full lg:w-auto">
              Send Message
            </Button>
            {submitStatus === "success" && (
              <p className="text-green-600 mt-2 text-center">
                Form submitted successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 mt-2 text-center">
                Error submitting form. Please try again.
              </p>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col  justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className=" w-full">
          <ExploreProperties id={projectSlug}/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
