'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'introduction', number: '01', title: 'Introduction' },
  { id: 'what-is-trenchless', number: '02', title: 'What Is Trenchless Construction?' },
  { id: 'why-it-matters', number: '03', title: 'Why Trenchless Construction Matters' },
  { id: 'main-methods', number: '04', title: 'The Main Trenchless Methods' },
  { id: 'pipe-bursting', number: '05', title: 'Pipe Bursting' },
  { id: 'pipe-lining', number: '06', title: 'Pipe Lining' },
  { id: 'directional-drilling', number: '07', title: 'Directional Drilling' },
  { id: 'choosing-method', number: '08', title: 'Choosing the Right Method' },
  { id: 'contractor', number: '09', title: 'Finding the Right Contractor' },
  { id: 'cost', number: '10', title: 'Understanding Project Costs' },
  { id: 'preparation', number: '11', title: 'Preparing for a Project' },
  { id: 'conclusion', number: '12', title: 'Conclusion' },
];

function Chapter({
  number,
  title,
  id,
  children,
}: {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-20 sm:pt-28">
      <div className="mb-8 flex items-center gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-purple-500">
          {number}
        </span>

        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
        {title}
      </h2>

      <div className="mt-8 space-y-6 text-[17px] leading-[1.9] text-slate-600">
        {children}
      </div>
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-6 text-2xl font-semibold tracking-tight text-slate-900">
      {children}
    </h3>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-purple-500 py-3 pl-6 text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl">
      {children}
    </blockquote>
  );
}

function Takeaway({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-12 rounded-[28px] border border-purple-100 bg-purple-50/60 p-7 sm:p-9">
      <p className="text-xs font-semibold tracking-[0.18em] text-purple-500">
        {title}
      </p>

      <div className="mt-3 text-base leading-8 text-slate-700">
        {children}
      </div>
    </div>
  );
}

export default function page() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f8fbfe] text-slate-900">

      {/* READING PROGRESS */}

      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-purple-500 transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>


      {/* HERO */}

      <header className="relative overflow-hidden border-b border-slate-200/70 bg-white">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-10 sm:pt-36">

          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">

            <div className="max-w-4xl">

              <div className="mb-7 flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold tracking-wide text-purple-600">
                  INDUSTRY GUIDE
                </span>

                <span className="text-sm text-slate-400">
                  15 min read
                </span>

                <span className="text-slate-300">
                  •
                </span>

                <span className="text-sm text-slate-400">
                  October 2, 2026
                </span>

              </div>

              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-8xl">
                The complete guide to
                <span className="block text-purple-500">
                  trenchless construction
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
                How modern underground construction works, which
                technologies contractors use, what projects cost,
                and how to choose the right approach for your
                property or infrastructure project.
              </p>

            </div>


            {/* ARTICLE META */}

            <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(30,50,90,.06)] backdrop-blur">

              <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                ARTICLE
              </p>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs text-slate-400">
                    Written by
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    Pipelining Network
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Reading time
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    Approximately 15 minutes
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Topic
                  </p>

                  <p className="mt-1 font-medium text-slate-900">
                    Trenchless infrastructure
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative mt-16 h-[360px] overflow-hidden rounded-[36px] border border-white bg-[#eef8fc] shadow-[0_30px_90px_rgba(30,60,100,.09)] sm:h-[480px]">

            {/* Network lines */}

            <div className="absolute inset-0 opacity-40">

              <div className="absolute left-[5%] top-[20%] h-px w-[90%] rotate-[7deg] bg-cyan-300" />

              <div className="absolute left-[10%] top-[60%] h-px w-[80%] rotate-[-5deg] bg-purple-300" />

              <div className="absolute left-[30%] top-[10%] h-[90%] w-px rotate-[18deg] bg-cyan-200" />

              <div className="absolute left-[65%] top-[5%] h-[100%] w-px rotate-[-12deg] bg-purple-200" />

            </div>


            {/* Underground layers */}

            <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gradient-to-b from-transparent to-cyan-100/50" />

            <div className="absolute bottom-[25%] left-[8%] h-24 w-[84%] rounded-[50%] border-2 border-cyan-300/60" />

            <div className="absolute bottom-[20%] left-[18%] h-16 w-[65%] rounded-[50%] border border-purple-300/60" />


            {/* Main pipe */}

            <div className="absolute left-[12%] top-[43%] h-20 w-[76%] rounded-full border-[12px] border-white/80 bg-cyan-200/20 shadow-[0_20px_40px_rgba(0,180,200,.12)] backdrop-blur">

              <div className="absolute inset-3 rounded-full border border-cyan-300/60" />

            </div>


            {/* Orange point */}

            <div className="absolute left-[48%] top-[48%] h-5 w-5 rounded-full bg-orange-400 shadow-[0_0_30px_rgba(244,129,23,.45)]" />

          </div>

        </div>

      </header>


      {/* MAIN ARTICLE */}

      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[220px_minmax(0,720px)_220px] lg:gap-16">

        {/* LEFT TOC */}

        <aside className="hidden lg:block">

          <div className="sticky top-24 pt-24">

            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              CONTENTS
            </p>

            <nav className="mt-5 space-y-1">

              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex gap-3 rounded-xl px-3 py-2 text-xs text-slate-400 transition hover:bg-white hover:text-purple-600"
                >
                  <span className="text-slate-300 group-hover:text-purple-400">
                    {section.number}
                  </span>

                  <span>
                    {section.title}
                  </span>
                </a>
              ))}

            </nav>

          </div>

        </aside>


        {/* ARTICLE CONTENT */}

        <article className="min-w-0 pb-32">

          <Chapter
            id="introduction"
            number="01"
            title="Introduction"
          >
            <Paragraph>
              Underground infrastructure is easy to overlook. Roads,
              sidewalks, parking lots, landscaping and buildings occupy
              the visible world above the ground, while thousands of
              miles of pipes and utilities operate beneath it. When
              those systems work properly, most people never need to
              think about them.
            </Paragraph>

            <Paragraph>
              The situation changes quickly when an underground pipe
              begins to fail. A sewer line can collapse, roots can
              infiltrate a joint, an aging water line can begin leaking,
              or an existing utility can become inadequate for the needs
              of a growing property. Traditionally, repairing these
              problems has often meant excavating the ground above the
              damaged infrastructure.
            </Paragraph>

            <Paragraph>
              Trenchless construction offers another approach. Rather
              than treating excavation as the default solution, trenchless
              methods use specialized equipment and installation
              techniques to perform many underground projects with
              substantially less surface excavation.
            </Paragraph>

            <Quote>
              The fundamental idea behind trenchless construction is
              simple: solve an underground problem while disturbing as
              little of the surface as practical.
            </Quote>

            <Paragraph>
              This guide explains the major trenchless technologies,
              where they are commonly used, what factors influence a
              project, and how property owners and project managers can
              evaluate contractors before work begins.
            </Paragraph>
          </Chapter>


          <Chapter
            id="what-is-trenchless"
            number="02"
            title="What Is Trenchless Construction?"
          >
            <Paragraph>
              Trenchless construction is a broad term for underground
              construction, rehabilitation and replacement techniques
              that reduce the need for continuous open excavation.
              It includes several different technologies rather than
              representing one specific installation method.
            </Paragraph>

            <Paragraph>
              Some trenchless techniques rehabilitate an existing pipe
              from inside. Others replace an existing line by creating a
              new pathway along substantially the same alignment.
              Directional drilling can create a new underground pathway
              where one did not previously exist.
            </Paragraph>

            <Subheading>
              Open-cut construction versus trenchless construction
            </Subheading>

            <Paragraph>
              In a conventional open-cut project, crews excavate a
              trench along the route of the utility. The pipe is exposed,
              repaired or replaced, and the excavation is eventually
              backfilled and restored.
            </Paragraph>

            <Paragraph>
              Open excavation remains useful and appropriate for many
              projects. It can provide direct access to the infrastructure
              and may be the most practical option under certain site
              conditions.
            </Paragraph>

            <Paragraph>
              Trenchless methods approach the same problem differently.
              Instead of exposing the entire line, crews use access pits,
              existing structures, specialized drilling equipment, robotic
              equipment, inspection systems or other techniques to work
              below the surface.
            </Paragraph>

            <Takeaway title="IMPORTANT">
              Trenchless does not mean excavation-free. Many trenchless
              projects still require access pits, entry points or small
              excavations. The difference is that excavation is generally
              localized rather than extending continuously along the
              entire installation route.
            </Takeaway>
          </Chapter>


          <Chapter
            id="why-it-matters"
            number="03"
            title="Why Trenchless Construction Matters"
          >
            <Paragraph>
              The biggest visible difference between trenchless and
              conventional construction is often the amount of surface
              disruption. That difference can matter considerably when
              infrastructure passes beneath roads, driveways, mature
              landscaping, commercial properties or other finished areas.
            </Paragraph>

            <Paragraph>
              Surface restoration is not simply a cosmetic concern.
              Excavation can affect pavement, concrete, landscaping,
              irrigation systems, fencing and other structures. Reducing
              the amount of excavation can therefore change the overall
              scope of restoration work associated with a project.
            </Paragraph>

            <Subheading>
              Working around existing infrastructure
            </Subheading>

            <Paragraph>
              Modern properties rarely contain only one underground
              system. Sewer, water, electrical, telecommunications,
              drainage and gas infrastructure may share a relatively
              complicated underground environment.
            </Paragraph>

            <Paragraph>
              Before selecting a trenchless method, contractors need to
              understand what is already underground. Existing records,
              locating services, inspections and site investigations can
              all contribute to a better understanding of the project.
            </Paragraph>

            <Quote>
              The technology is only one part of a successful project.
              Understanding the site is equally important.
            </Quote>

            <Paragraph>
              This is one reason experienced contractors typically begin
              with investigation rather than immediately recommending a
              particular construction method.
            </Paragraph>
          </Chapter>


          <Chapter
            id="main-methods"
            number="04"
            title="The Main Trenchless Methods"
          >
            <Paragraph>
              There is no single trenchless technology that works for
              every project. Different methods solve different problems,
              and the appropriate choice depends on pipe material,
              diameter, depth, alignment, soil conditions, access,
              existing utilities and the desired final result.
            </Paragraph>

            <div className="my-12 grid gap-4">

              {[
                ['01', 'Pipe bursting', 'Replacement of an existing pipe by fracturing the old line and pulling a new pipe into position.'],
                ['02', 'Pipe lining', 'Rehabilitation of an existing pipe by installing a new structural or semi-structural liner.'],
                ['03', 'Directional drilling', 'Creation of an underground pathway for new utilities using a steerable drilling system.'],
                ['04', 'Inspection & rehabilitation', 'Inspection, cleaning and targeted repair of existing underground infrastructure.'],
              ].map(([number, title, description]) => (

                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex gap-5">

                    <span className="text-xs font-semibold text-purple-500">
                      {number}
                    </span>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {description}
                      </p>
                    </div>

                  </div>
                </div>

              ))}

            </div>

            <Paragraph>
              Understanding these differences is useful for anyone
              evaluating a project because contractor recommendations
              should be connected to the actual conditions of the site,
              rather than simply to the popularity of a particular
              technology.
            </Paragraph>
          </Chapter>


          <Chapter
            id="pipe-bursting"
            number="05"
            title="Pipe Bursting"
          >
            <Paragraph>
              Pipe bursting is a replacement technique used when an
              existing underground pipe needs to be replaced and the
              existing alignment is suitable for the new installation.
              A bursting head is pulled or pushed through the existing
              pipe, breaking the old pipe apart while a replacement pipe
              follows behind it.
            </Paragraph>

            <Paragraph>
              One advantage of this approach is that the replacement pipe
              can sometimes be equal to or larger than the original pipe.
              This can make pipe bursting useful when a system needs
              additional capacity and the surrounding conditions permit
              the installation.
            </Paragraph>

            <Subheading>
              When pipe bursting may be considered
            </Subheading>

            <Paragraph>
              Pipe bursting may be considered for aging, damaged or
              undersized pipelines where the existing alignment and
              surrounding conditions are compatible with the method.
              Contractors generally need to evaluate the existing pipe,
              soil, depth, nearby utilities and the condition of
              connection points before determining whether bursting is
              appropriate.
            </Paragraph>

            <Paragraph>
              Because the technique physically displaces material around
              the existing pipe, the surrounding environment needs to be
              evaluated carefully. Nearby utilities and structures can
              influence the method and equipment selected.
            </Paragraph>

            <Takeaway title="PROJECT FACTOR">
              Pipe bursting is a replacement technique, not simply a
              repair. A contractor should evaluate the existing alignment,
              access points, surrounding utilities and the proposed
              replacement pipe before recommending it.
            </Takeaway>
          </Chapter>


          <Chapter
            id="pipe-lining"
            number="06"
            title="Pipe Lining"
          >
            <Paragraph>
              Pipe lining approaches rehabilitation from a different
              direction. Rather than removing the existing pipe from the
              ground, a new liner is installed within the existing pipe.
              Depending on the technology and application, the liner can
              form a renewed internal pipe structure after installation.
            </Paragraph>

            <Paragraph>
              This can be particularly useful where excavation would
              create significant disruption. A property owner may have a
              driveway, mature trees, finished landscaping or other
              improvements above the existing line.
            </Paragraph>

            <Subheading>
              Inspection comes first
            </Subheading>

            <Paragraph>
              A camera inspection is often an important part of evaluating
              whether lining is suitable. The contractor needs to
              understand the condition, diameter, alignment and geometry
              of the existing pipe before selecting a rehabilitation
              approach.
            </Paragraph>

            <Paragraph>
              Cleaning can also be an important preparation step. Deposits,
              roots and other obstructions may need to be removed so that
              the contractor can properly evaluate the pipe and prepare
              the installation.
            </Paragraph>

            <Quote>
              Good rehabilitation begins with knowing exactly what is
              already inside the ground.
            </Quote>
          </Chapter>


          <Chapter
            id="directional-drilling"
            number="07"
            title="Directional Drilling"
          >
            <Paragraph>
              Horizontal directional drilling, commonly abbreviated as
              HDD, is used to create underground pathways for utilities
              while limiting surface excavation. A steerable drilling
              system creates a bore along a planned alignment, allowing
              the contractor to install a new utility beneath roads,
              landscapes and other surface obstacles.
            </Paragraph>

            <Paragraph>
              Directional drilling is fundamentally different from pipe
              rehabilitation. Instead of renewing an existing pipe,
              HDD is frequently used to install new infrastructure.
            </Paragraph>

            <Subheading>
              Planning the bore
            </Subheading>

            <Paragraph>
              A successful directional drilling project depends heavily
              on planning. The contractor needs information about the
              proposed alignment, depth, soil conditions and existing
              underground utilities.
            </Paragraph>

            <Paragraph>
              The drilling plan also needs to account for entry and exit
              locations. These points determine how equipment accesses
              the underground pathway and how the installed utility
              ultimately reaches the required destination.
            </Paragraph>

            <Paragraph>
              Because the drilling path can be controlled during the
              operation, HDD can navigate around certain obstacles.
              However, that does not mean every site is suitable. Soil
              conditions, groundwater, rock, access limitations and
              existing infrastructure can all influence feasibility.
            </Paragraph>
          </Chapter>


          <Chapter
            id="choosing-method"
            number="08"
            title="Choosing the Right Method"
          >
            <Paragraph>
              One of the most important decisions in a trenchless project
              is determining which technology is appropriate. This is not
              something that should be decided from the project description
              alone.
            </Paragraph>

            <Paragraph>
              Two projects may both involve damaged sewer lines but
              require completely different solutions because of differences
              in diameter, depth, material, alignment, access and
              surrounding infrastructure.
            </Paragraph>

            <Subheading>
              Important questions to ask
            </Subheading>

            <div className="my-8 space-y-3">

              {[
                'What is the existing pipe material and diameter?',
                'How deep is the existing infrastructure?',
                'Has the line been inspected with a camera?',
                'Are there existing utilities nearby?',
                'What are the soil and groundwater conditions?',
                'Where can equipment access the site?',
                'What surface features need to be protected?',
                'Does the project require repair, rehabilitation or replacement?',
              ].map((question) => (

                <div
                  key={question}
                  className="flex gap-4 rounded-2xl bg-white p-5"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-500" />

                  <span className="text-sm leading-7 text-slate-600">
                    {question}
                  </span>
                </div>

              ))}

            </div>

            <Paragraph>
              These questions help transform a general request for a
              trenchless contractor into a more useful project
              conversation. The contractor can then explain which
              technologies may be suitable and why.
            </Paragraph>
          </Chapter>


          <Chapter
            id="contractor"
            number="09"
            title="Finding the Right Contractor"
          >
            <Paragraph>
              Technology is only one part of the equation. The contractor
              performing the work has an equally important role in
              planning, executing and documenting the project.
            </Paragraph>

            <Paragraph>
              When comparing contractors, it can be useful to look at
              experience with the specific type of work, geographic
              coverage, equipment capabilities, qualifications, project
              history and communication practices.
            </Paragraph>

            <Subheading>
              Look beyond a company name
            </Subheading>

            <Paragraph>
              A contractor directory can make the initial research
              process easier by organizing information that would
              otherwise be scattered across individual company websites,
              search results and referrals.
            </Paragraph>

            <Paragraph>
              Location is especially important. Underground construction
              conditions vary considerably between regions, and a
              contractor familiar with local conditions may already
              understand common soil characteristics, permitting
              requirements and infrastructure patterns.
            </Paragraph>

            <Takeaway title="WHEN COMPARING CONTRACTORS">
              Look at the complete project fit: specialization,
              location, experience, qualifications, communication,
              availability and the contractor's understanding of the
              specific site.
            </Takeaway>
          </Chapter>


          <Chapter
            id="cost"
            number="10"
            title="Understanding Project Costs"
          >
            <Paragraph>
              Trenchless construction does not have one universal price.
              Project costs can vary substantially depending on the
              technology, pipe size, length, depth, site conditions,
              access requirements, materials, restoration requirements
              and local labor conditions.
            </Paragraph>

            <Paragraph>
              This is why a simple price-per-foot comparison can sometimes
              be misleading. Two projects with the same pipe length can
              have very different levels of complexity.
            </Paragraph>

            <Subheading>
              What can influence the price?
            </Subheading>

            <Paragraph>
              Equipment requirements are one factor. Larger or more
              complicated projects may require specialized machinery,
              additional crews or longer preparation periods.
            </Paragraph>

            <Paragraph>
              Access is another major consideration. A site with simple
              equipment access may require less preparation than a
              property where equipment must be positioned around existing
              structures, traffic or landscaping.
            </Paragraph>

            <Paragraph>
              Restoration can also influence the overall project cost.
              Reducing excavation may reduce some restoration requirements,
              but trenchless construction does not automatically eliminate
              all surface restoration.
            </Paragraph>
          </Chapter>


          <Chapter
            id="preparation"
            number="11"
            title="Preparing for a Project"
          >
            <Paragraph>
              Property owners and project managers can make the process
              easier by preparing useful information before contacting
              contractors.
            </Paragraph>

            <Paragraph>
              Existing plans, previous inspection reports, property
              drawings, utility information and records of previous
              repairs can all provide useful context.
            </Paragraph>

            <Paragraph>
              Photographs of access areas and visible infrastructure can
              also help a contractor understand the site before an
              initial visit. They are not a replacement for professional
              investigation, but they can make the early conversation
              more productive.
            </Paragraph>

            <Subheading>
              Ask for a clear scope
            </Subheading>

            <Paragraph>
              Before work begins, the project scope should be clear.
              Owners should understand what section of infrastructure is
              being addressed, what method is proposed, what preparation
              is required and what restoration is included.
            </Paragraph>

            <Quote>
              A clear scope creates a better foundation for comparing
              proposals and understanding the work.
            </Quote>
          </Chapter>


          <Chapter
            id="conclusion"
            number="12"
            title="Conclusion"
          >
            <Paragraph>
              Trenchless construction has changed the way many underground
              infrastructure projects can be approached. Instead of
              automatically excavating the entire route, contractors can
              use specialized technologies to inspect, rehabilitate,
              replace or install underground infrastructure while
              reducing the amount of surface disruption required.
            </Paragraph>

            <Paragraph>
              The technology itself, however, is only one part of the
              decision. Every project has its own conditions. Existing
              infrastructure, soil, depth, access, utilities, property
              features and project objectives all influence which approach
              makes sense.
            </Paragraph>

            <Paragraph>
              For property owners and project managers, the most useful
              starting point is therefore not simply asking which
              technology is cheapest or newest. The better starting point
              is understanding the actual condition and requirements of
              the project and then finding contractors who have experience
              with that specific type of work.
            </Paragraph>

            <Paragraph>
              With the right investigation, planning and contractor,
              trenchless construction can provide a practical way to
              address underground infrastructure while keeping the visible
              impact of construction as limited as the project conditions
              allow.
            </Paragraph>


            {/* FINAL CTA */}

            <div className="mt-16 overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white sm:p-12">

              <p className="text-xs font-semibold tracking-[0.2em] text-purple-300">
                READY TO EXPLORE?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Find trenchless contractors in your area.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Explore contractors by location, specialization and
                service area.
              </p>

              <a
                href="/all_contractor"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-purple-100"
              >
                Explore contractors
                <span>→</span>
              </a>

            </div>

          </Chapter>

        </article>


        {/* RIGHT SIDEBAR */}

        <aside className="hidden lg:block">

          <div className="sticky top-24 pt-24">

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">

              <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                ARTICLE INFO
              </p>

              <div className="mt-6 space-y-5">

                <div>
                  <p className="text-xs text-slate-400">
                    Reading time
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    ~15 minutes
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Length
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    3,000+ words
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Industry Guide
                  </p>
                </div>

              </div>

            </div>


            <div className="mt-5 rounded-[28px] bg-gradient-to-br from-purple-50 to-cyan-50 p-6">

              <p className="text-xs font-semibold tracking-[0.18em] text-purple-500">
                LOOKING FOR A CONTRACTOR?
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Search the contractor network by location and
                specialization.
              </p>

              <a
                href="/all_contractor"
                className="mt-5 inline-block text-sm font-semibold text-slate-900"
              >
                Browse network →
              </a>

            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}