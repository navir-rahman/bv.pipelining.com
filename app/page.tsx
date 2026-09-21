

// import { sql } from '@/lib/db';

import HeroSection from "@/components/HeroSection/HeroSection";


export default  function Home() {
//   let dbStatus = '';

//   try {
//     const result = await sql`SELECT NOW()`;
//     dbStatus = `Connected! Server time: ${result[0].now}`;
//   } catch (error: any) {
//     dbStatus = `Connection failed: ${error.message}`;
//   }


  

  return (

    <main className="p-8">
       
        {/* hero */}
        <HeroSection></HeroSection>

       

      
       

    </main>
  );
}
