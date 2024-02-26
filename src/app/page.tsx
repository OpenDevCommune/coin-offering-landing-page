import AboutSection from "@/widgets/AboutSection/AboutSection";
import JoinSection from "@/widgets/JoinSection/JoinSection";
import PartnerSection from "@/widgets/PartnerSection/PartnerSection";
import SeadRoundSection from "@/widgets/SeadRoundSection/SeadRoundSection";
import GybernetSection from "@/widgets/GybernetSection/GybernetSection";
import GyberRealitySection from "@/widgets/GyberRealitySection/GyberRealitySection";
import SappSection from "@/widgets/SappSection/SappSection";



export default function Home() {

  return (
    <main>
        <AboutSection/>
        <JoinSection />
        <PartnerSection />
        <SeadRoundSection/>
        <GybernetSection/>
        <GyberRealitySection/>
        <SappSection/>
    </main>
  );
}
