

// import { sql } from '@/lib/db';

import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWorksSection from "@/components/homepage component/HowItWorksSection";
import TopContractorsSection from "@/components/homepage component/TopContractorsSection";


export default  function Home() {
//   let dbStatus = '';

//   try {
//     const result = await sql`SELECT NOW()`;
//     dbStatus = `Connected! Server time: ${result[0].now}`;
//   } catch (error: any) {
//     dbStatus = `Connection failed: ${error.message}`;
//   }


  

  return (

    <main >
       
        {/* hero */}
        <HeroSection></HeroSection>

       <TopContractorsSection></TopContractorsSection>
       <HowItWorksSection></HowItWorksSection>
       <TopContractorsSection></TopContractorsSection>

      
       

    </main>
  );
}
