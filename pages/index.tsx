// import { Inter } from 'next/font/google';

import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import RequestForm from '@/components/requestform';
import Services from '@/components/services';
import VisionAndMission from '@/components/visionmission';
import WhoWeAre from '@/components/whoweare';
import WhyChooseUs from '@/components/whychooseus';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <RequestForm />
      <WhyChooseUs />
      <WhoWeAre />
      <VisionAndMission />
      <FAQ />
    </main>
  );
}
