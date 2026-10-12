import Link from "next/link";

const signs = [
  "Sewer (rotten egg) odor",
  "Cracks in the foundation",
  "Cracks in the walls",
  "Slow drains",
  "Frequent backups",
  "Tree roots",
  "Flooding",
  "Stoppages",
  "Unusual noises coming from the pipes",
  "Pests such as rodents/insects invading property",
];

const techniques = [
  "Structural pipe lining with gaps",
  "Continuous structural pipe lining (no gaps)",
  "Sprayed-on pipe coating",
  "Brushed-on pipe coating",
];

const trenchingProblems = [
  "Depending on the location and extent, trenching can jeopardize the integrity of your home/building’s foundation.",
  "Demolition, clean up, and follow up restoration are necessary.",
  "Trenching through a concrete slab is very time consuming and will impact the project timeline.",
  "Small particulates are launched into the atmosphere when cutting surfaces such as concrete.",
  "Trenching is invasive, loud, and may require you to vacate the home/building.",
  "Water and toilet service can be off for extended periods of time.",
  "It may not be possible to match your existing flooring once the plumbing is completed.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-[#171717]">

      {/* HERO */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-16 sm:px-10 lg:px-16 lg:pb-32 lg:pt-24">

          <div className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-[#F48117]">
            <span className="h-px w-10 bg-[#F48117]" />
            About Pipelining
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            <h1 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              About PipeLining
              <br />
              <span className="text-[#F48117]">Pipe Restoration</span>
            </h1>

            <div className="max-w-md lg:pb-2">
              <p className="text-lg leading-8 text-black/60">
                When you have a failing sewer line, you need the right
                contractor to save your property and your wallet.
              </p>

              <Link
                href="/all_contractor"
                className="mt-7 inline-flex rounded-full bg-[#F48117] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Find a Contractor →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              01
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              Pipe Restoration
            </p>
          </div>

          <div className="max-w-5xl">

            <p className="text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Pipelining.com connects you with local, reliable providers for
              pipelining pipe restoration.
            </p>

            <div className="mt-10 grid gap-8 text-lg leading-8 text-black/60 md:grid-cols-2">
              <p>
                You don’t need to remove and replace your pipes. Trenchless
                (no-dig) pipelining, also known as pipe relining or CIPP
                (cured-in-place pipe), originated back in 1971.
              </p>

              <p>
                Today, this advanced technology is an ideal option for
                repairing pipes without major demolition to your home or
                business.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* LONG TERM */}
      <section className="bg-[#F48117] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-white/70">
                02
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/70">
                Why Trenchless
              </p>
            </div>

            <div className="max-w-5xl">

              <h2 className="text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                A long-term solution to sewer repair.
              </h2>

              <div className="mt-8 max-w-3xl text-lg leading-8 text-white/80">
                <p>
                  Most reputable installers use products that carry a minimum
                  50-year life use expectancy.
                </p>

                <p className="mt-6">
                  While the effectiveness of relining may be long lasting, the
                  installation process is usually much faster than conventional
                  methods. Many pipe renewals can be performed in as little as
                  one day.
                </p>
              </div>

              <p className="mt-10 text-xl font-medium">
                Why wait? There are qualified sewer repair contractors in your
                area waiting to help.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* PROPERTY OWNERS HAVE A CHOICE */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              03
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              Your Options
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              Not Familiar With Trenchless Pipe Restoration?
            </h2>

            <p className="mt-5 text-lg text-black/50">
              Property owners have a choice:
            </p>

            <div className="mt-12 grid border-t border-black/10 md:grid-cols-2">

              <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:pr-12">
                <span className="text-sm font-medium text-[#F48117]">
                  01
                </span>

                <h3 className="mt-5 text-2xl font-medium">
                  Dig and replace
                </h3>

                <p className="mt-5 text-base leading-7 text-black/60">
                  Dig trenches through the property’s foundation, flooring,
                  and yard; remove portions of walls, cabinetry, and other
                  finishes to replace old piping, taking weeks or even months.
                  Then be left with construction mess and home renovation
                  costs once the plumbing work is completed.
                </p>
              </div>

              <div className="py-8 md:pl-12">
                <span className="text-sm font-medium text-[#F48117]">
                  02
                </span>

                <h3 className="mt-5 text-2xl font-medium">
                  Trenchless pipe lining
                </h3>

                <p className="mt-5 text-base leading-7 text-black/60">
                  Utilize trenchless pipe lining to install new cured-in-place
                  pipe directly within the old, failed pipelines, usually in a
                  few days. Little to no residual mess or follow-up repair is
                  needed.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHY SPECIALIZED */}
      <section className="border-y border-black/10 bg-[#eeece8]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-[#F48117]">
                04
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
                The Contractors
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Most plumbers do not perform pipelining installation.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
                Here’s why:
              </p>

              <div className="mt-10 max-w-4xl">

                {[
                  "Conventional dig-and-replace methods are still the norm.",
                  "Training for trenchless techniques is intense. It requires extreme dedication and an enormous investment of time. The pipeliners we list have made incredible commitments to mastering their profession.",
                  "The equipment used to install pipe lining is costly. We’re not talking about wrenches and pipe cutters here; each key piece of equipment can be $10,000.00 – $100,000.00 or more.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 border-t border-black/10 py-7"
                  >
                    <span className="shrink-0 text-sm font-medium text-[#F48117]">
                      0{index + 1}
                    </span>

                    <p className="text-base leading-7 text-black/65">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

              <Link
                href="/all_contractor"
                className="mt-8 inline-flex rounded-full bg-[#F48117] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Find a Contractor →
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              05
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              Warning Signs
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              Signs of Pipe Problems
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
              As sewer pipes age, they often develop issues such as
              FOG (fat-oil-grease) buildup and show signs of decay in the form
              of scaling and corrosion. The aging process can leave your pipes
              with cracks or channels where the piping material has completely
              eroded.
            </p>

            <p className="mt-6 text-lg text-black/60">
              So how do you know if you have a failed sewer pipe line? Here
              are few tell-tale signs:
            </p>

            <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
              {signs.map((sign, index) => (
                <div
                  key={sign}
                  className="border-b border-r border-black/10 p-6"
                >
                  <span className="text-xs font-medium text-[#F48117]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-8 text-sm font-medium leading-6">
                    {sign}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-3xl text-base leading-7 text-black/60">
              If you are experiencing any of these issues, contact one of our
              trusted providers for an evaluation of your drainage system.
              Early intervention can save your home from extensive service and
              that usually means it will save you from paying more, too.
            </p>

          </div>
        </div>
      </section>

      {/* WHAT IS TRENCHLESS */}
      <section className="bg-[#191919] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-[#F48117]">
                06
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/40">
                The Method
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                What is “Trenchless” Sewer Pipe Repair?
              </h2>

              <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-white/60">

                <p>
                  Trenchless pipe repairs are very different from the
                  dig-and-replace method still used by most general plumbers.
                  Instead of digging a long trench through your home’s flooring
                  and foundation and causing major demolition of finishes such
                  as walls and cabinetry, your pipes are rehabilitated mostly
                  or entirely from existing access areas like your toilets,
                  plumbing cleanout, or small openings.
                </p>

                <p>
                  This type of service is highly specialized and requires a
                  significant investment by the contractor for equipment and
                  team training, which is why the majority of plumbers do not
                  perform pipe lining. This is also why you need a trusted,
                  verified contractor to rehabilitate your drainage pipe
                  system.
                </p>

                <p>
                  Trenchless sewer repairs are much less invasive to your
                  property and are generally performed in a shorter time frame,
                  many in as little as one day!
                </p>

              </div>

              <div className="mt-14 grid border-t border-white/15 sm:grid-cols-2">

                {techniques.map((technique, index) => (
                  <div
                    key={technique}
                    className="border-b border-white/15 py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  >
                    <span className="text-sm font-medium text-[#F48117]">
                      0{index + 1}
                    </span>

                    <p className="mt-3 text-base text-white/75">
                      {technique}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* RELINING PROCESS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              07
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              The Process
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              The Relining Process
            </h2>

            <div className="mt-10 max-w-4xl space-y-7 text-lg leading-8 text-black/60">

              <p>
                Cured-in-place pipe (CIPP) is essentially creating a new pipe
                directly within the existing old pipes.
              </p>

              <p>
                Since the epoxy- or resin-soaked material used for lining
                starts out flexible, the specialized equipment and skilled
                technicians have the ability to guide the flexible tubing
                through the piping system. Yes, pipe lining can navigate
                through most plumbing bends and around many curves and
                transition changes.
              </p>

              <p>
                Once the lining is in place, air pressure is used to gently
                inflate the tube to the full diameter of the pipe, sealing out
                all gaps, cracks, and leaks. The liner is then cured using one
                of several methods including ambient, steam, UV light, and
                more.
              </p>

              <p>
                When lining is properly installed, the result is a smooth,
                completely sealed, better-flowing system that should last for
                decades. Depending on geographic location, environmental
                conditions, and material used, pipe relining may have a longer
                life use expectancy than pipe replacement.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* COST */}
      <section className="border-y border-black/10 bg-[#eeece8]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-[#F48117]">
                08
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
                Cost & Quotes
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                How Much Does Pipe Lining Pipe Restoration Cost?
              </h2>

              <div className="mt-8 max-w-4xl space-y-7 text-lg leading-8 text-black/60">

                <p>
                  This is a popular question that we wish we could easily
                  answer. Most contractors price lining by the linear foot,
                  however, the average costs vary greatly depending on
                  location, materials used, difficulty of the job,
                  installation method, and other factors.
                </p>

                <p>
                  We have found that, on average, the majority of customers
                  report paying between $85 and $275 per linear foot.
                </p>

              </div>

              <div className="mt-14 border-t border-black/10 pt-10">

                <h3 className="text-2xl font-medium">
                  Understand Your Quote
                </h3>

                <div className="mt-6 max-w-4xl space-y-6 text-base leading-7 text-black/60">

                  <p>
                    Be sure to thoroughly review the scope of work included in
                    your trenchless pipe lining quote. Some contractors include
                    CCTV or video inspection, the cleaning process necessary to
                    prepare the pipes, and the lining installation in one
                    quote.
                  </p>

                  <p>
                    Be wary of contractors that give you a “quote” without
                    inspecting your piping system. Reputable contractors want
                    to know the facts about your pipes and will schedule an
                    inspection prior to preparing your project plans and
                    quoting your exact costs.
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CAMERA INSPECTION */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              09
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              Inspection
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              Should I Pay For A Camera Inspection?
            </h2>

            <div className="mt-8 max-w-4xl space-y-7 text-lg leading-8 text-black/60">

              <p>
                We often hear from customers who wonder if they should pay for
                a pipe inspection when some companies offer them for free. Our
                response is to be sure you know what you’re getting.
              </p>

              <p>
                If your contractor provides a free inspection, you have to
                expect that the costs involved for the technician(s) to perform
                the work and interpret the data will be reflected in the
                overall pricing of the project.
              </p>

              <p>
                Will you receive a copy of the video? Getting a copy of the
                inspection video is great, but it isn’t incredibly helpful if
                you don’t know what you’re viewing. Ask for a findings report
                so you better understand the conditions and layout of your
                system and subsequently, comprehend the plan of action to
                repair your pipes.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY / COST */}
      <section className="bg-[#F48117] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-white/70">
                10
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/70">
                Technology
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Higher Technology = Lower Cost
              </h2>

              <div className="mt-8 max-w-4xl space-y-7 text-lg leading-8 text-white/80">

                <p>
                  Although it sounds too good to be true, the advanced
                  technology of trenchless pipe lining usually costs LESS than
                  conventional pipe replacement!
                </p>

                <p>
                  When comparing costs, take into account the reconstruction
                  fees associated with trenching methods. To access your old
                  pipes, long trenches are dug through your flooring and
                  foundation. If you have a concrete foundation, this repair
                  alone could be thousands of additional dollars.
                </p>

                <p>
                  Replacing flooring, such as tile or wood has a hefty
                  installation cost involved, so that too must be calculated
                  into the traditional plumbing quote. When the plumbing is
                  finished, the renovations begin.
                </p>

                <p>
                  Aside from offering time-savings, convenience, and reduced
                  impact on your property, the costs associated with pipe lining
                  are mostly limited to what your contractor provides. There is
                  little to no renovation needed after installation.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TRENCHING PROBLEMS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

          <div>
            <span className="text-sm font-medium text-[#F48117]">
              11
            </span>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-black/40">
              Traditional Repair
            </p>
          </div>

          <div>

            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              What’s Wrong With Digging Trenches Through My Property?
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
              There are multiple reasons why you may want to avoid digging
              trenches through your property. Here are a few of our top
              considerations:
            </p>

            <div className="mt-12 border-t border-black/10">

              {trenchingProblems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 border-b border-black/10 py-7"
                >
                  <span className="shrink-0 text-sm font-medium text-[#F48117]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="max-w-3xl text-base leading-7 text-black/65">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#191919] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

          <div className="grid gap-14 lg:grid-cols-[220px_1fr]">

            <div>
              <span className="text-sm font-medium text-[#F48117]">
                12
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/40">
                The Alternative
              </p>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Trenchless (No-Dig) Pipe Restoration Eliminates The Trenching
                Downfalls
              </h2>

              <div className="mt-12 grid border-t border-white/15 md:grid-cols-3">

                <div className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:pr-8">
                  <span className="text-sm font-medium text-[#F48117]">
                    01
                  </span>

                  <p className="mt-5 text-base leading-7 text-white/65">
                    There’s little to no impact on your floors and foundation.
                    If an access opening needs to be made, the impact will be
                    limited to a small area – no trenches!
                  </p>
                </div>

                <div className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8">
                  <span className="text-sm font-medium text-[#F48117]">
                    02
                  </span>

                  <p className="mt-5 text-base leading-7 text-white/65">
                    Lining installation is much cleaner and leaves virtually no
                    mess. There’s rarely any residual repair other than a small
                    touchup for an access point.
                  </p>
                </div>

                <div className="py-8 md:pl-8">
                  <span className="text-sm font-medium text-[#F48117]">
                    03
                  </span>

                  <p className="mt-5 text-base leading-7 text-white/65">
                    You can remain comfortably in your home or building while
                    service is performed!
                  </p>
                </div>

              </div>

              <Link
                href="/all_contractor"
                className="mt-10 inline-flex rounded-full bg-[#F48117] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Find a Contractor →
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="mx-auto max-w-350 px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="border-t border-black/10 pt-10">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-[#F48117]">
                Pipelining.com
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Find a qualified contractor for your project.
              </h2>
            </div>

            <Link
              href="/all_contractor"
              className="inline-flex w-fit rounded-full bg-[#F48117] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Find a Contractor →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}