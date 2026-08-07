import { Hero } from "../features/home/Hero";
import { ProofStatement } from "../features/home/ProofStatement";
import { FeaturedProjects } from "../features/home/FeaturedProjects";
import { Skills } from "../features/home/Skills";
import { TechStack } from "../features/home/TechStack";
import { ExperienceHighlights } from "../features/home/ExperienceHighlights";
import { Testimonials } from "../features/home/Testimonials";
import { HomeCTA } from "../features/home/HomeCTA";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function HomePage() {
  useDocumentMeta(
    "Saimedh Porandla — AI Software Engineer | Production-Ready AI Applications",
    "I build production-ready AI web applications. Five shipped AI systems, from data pipeline to deployed UI."
  );

  return (
    <>
      <Hero />
      <ProofStatement />
      <FeaturedProjects />
      <Skills />
      <TechStack />
      <ExperienceHighlights />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
