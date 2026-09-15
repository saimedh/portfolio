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
    "Saimedh Porandla — AI Software Engineer | Full-Stack & Machine Learning",
    "I build AI-powered web applications and software products, combining full-stack development with machine learning to solve practical problems."
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
