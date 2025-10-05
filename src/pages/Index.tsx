import { Hero } from "@/components/Hero";
import { SARExplanation } from "@/components/SARExplanation";
import { ProblemStatement } from "@/components/ProblemStatement";
import { InteractiveMap } from "@/components/InteractiveMap";
import { AlertSimulator } from "@/components/AlertSimulator";
import { Statistics } from "@/components/Statistics";
import { DataComparison } from "@/components/DataComparison";
import { ChatbotPlaceholder } from "@/components/ChatbotPlaceholder";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SARExplanation />
      <ProblemStatement />
      <InteractiveMap />
      <AlertSimulator />
      <Statistics />
      <DataComparison />
      <ChatbotPlaceholder />
      <Impact />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
