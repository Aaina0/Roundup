import Core from "@/components/widgets/Core";
import HeroSection from "../components/widgets/HeroSection";
import Specialized from "../components/widgets/Specialized";
import Outcome from "@/components/widgets/Outcome";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Core />
      <Specialized />
      <Outcome/>
    </main>
  );
}
