import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { TracingBeamDemo } from "@/components/common/ProjectScroll";
import ExploreProperties from "@/components/Projectsection/ExploreMore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const router = useRouter();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { projectSlug } = router.query;

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(
          `https://avishkar.giantwheeltech.com/wp-json/wp/v2/project/${projectSlug}`
        );

        const fetchedProject = {
          id: response.data.id,
          slug: response.data.slug,
          title: response.data.acf.title,
          summary: response.data.acf.summary,
          content: response.data.acf.content,
          address: response.data.acf.address,
          image: response.data.acf.image,
          gallery: response.data.acf.photo_gallery?.gallery[0] || null,
          category: response.data.project_category,
          tags: response.data.project_tag,
        };

        setProject(fetchedProject);
        console.log("project", project);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectSlug]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center px-2 lg:px-10 pt-28 lg:pt-48">
        <div className="w-auto">
          <div className="flex justify-center w-full">
            <div className=" w-full">
              <div className="flex flex-col-reverse lg:flex-row justify-center w-full gap-8">
                <TracingBeamDemo project={project} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 mt-4">
          <div className="flex justify-center">
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col  justify-center px-4 lg:px-0">
        <div className="flex justify-center w-full">
          <div className=" w-full">
            <ExploreProperties id={projectSlug} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
