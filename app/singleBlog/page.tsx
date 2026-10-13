import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';

// Set NEXT_PUBLIC_SITE_URL to your production domain in the deployment environment.
// Change ARTICLE_PATH to the exact URL path where this page is published.
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.pipelining.com'
).replace(/\/$/, '');
const ARTICLE_PATH = '/blog/trenchless-construction';
const ARTICLE_URL = new URL(ARTICLE_PATH, `${SITE_URL}/`).toString();
const ARTICLE_IMAGE_URL = `${ARTICLE_URL.replace(/\/$/, '')}/opengraph-image`;
const PUBLISHED_AT = '2026-10-02T00:00:00.000Z';
// Update this when the article receives a meaningful editorial update.
const UPDATED_AT = PUBLISHED_AT;
const ARTICLE_TITLE = 'The Complete Guide to Trenchless Construction';
const ARTICLE_HEADLINE = 'The complete guide to trenchless construction';
const ARTICLE_DESCRIPTION =
  'Learn how trenchless construction works, including pipe bursting, pipe lining, directional drilling, project cost factors, and choosing a contractor.';

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: { absolute: `${ARTICLE_TITLE} | Pipelining Network` },
  description: ARTICLE_DESCRIPTION,
  authors: [{ name: 'Pipelining Network', url: SITE_URL }],
  alternates: { canonical: ARTICLE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'Pipelining Network',
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    publishedTime: PUBLISHED_AT,
    modifiedTime: UPDATED_AT,
    authors: ['Pipelining Network'],
    images: [
      {
        url: ARTICLE_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'The Complete Guide to Trenchless Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    images: [ARTICLE_IMAGE_URL],
  },
};

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
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-20 sm:pt-28">
      <div className="mb-8 flex items-center gap-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-(--primary-color)">
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

function Paragraph({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-6 text-2xl font-semibold tracking-tight text-slate-900">
      {children}
    </h3>
  );
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-(--primary-color) py-3 pl-6 text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl">
      {children}
    </blockquote>
  );
}

function Takeaway({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="my-12 rounded-[28px] border border-purple-100 bg-purple-50/60 p-7 sm:p-9">
      <p className="text-xs font-semibold tracking-[0.18em] text-(--primary-color)">
        {title}
      </p>
      <div className="mt-3 text-base leading-8 text-slate-700">
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${ARTICLE_URL}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': ARTICLE_URL,
    },
    url: ARTICLE_URL,
    headline: ARTICLE_HEADLINE,
    description: ARTICLE_DESCRIPTION,
    image: [ARTICLE_IMAGE_URL],
    datePublished: PUBLISHED_AT,
    dateModified: UPDATED_AT,
    inLanguage: 'en',
    articleSection: 'Industry Guide',
    keywords: [
      'trenchless construction',
      'pipe bursting',
      'pipe lining',
      'horizontal directional drilling',
      'underground utility construction',
    ],
    author: {
      '@type': 'Organization',
      name: 'Pipelining Network',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pipelining Network',
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-[#f8fbfe] text-slate-900">
      {/* SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* READING PROGRESS (Pure CSS Scroll Driven Animation - Zero JS) */}
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div className="h-full bg-(--primary-color) origin-left [animation:grow-progress_linear_both] [animation-timeline:scroll(root)]" />
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-slate-200/70 bg-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-10 sm:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold tracking-wide text-(--primary-color)">
                  INDUSTRY GUIDE
                </span>
                <span className="text-sm text-slate-400">15 min read</span>
                <span className="text-slate-300">•</span>
                <time dateTime={PUBLISHED_AT} className="text-sm text-slate-400">October 2, 2026</time>
              </div>

              <h1 id="article-title" className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-8xl">
                The complete guide to
                <span className="block text-(--primary-color)">
                  trenchless construction
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
                How modern underground construction works, which technologies
                contractors use, what projects cost, and how to choose the right
                approach for your property or infrastructure project.
              </p>
            </div>

            {/* HERO ARTICLE META CARD */}
            <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(30,50,90,.06)] backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                ARTICLE
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs text-slate-400">Written by</p>
                  <p className="mt-1 font-medium text-slate-900">
                    Pipelining Network
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Reading time</p>
                  <p className="mt-1 font-medium text-slate-900">
                    Approximately 15 minutes
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Topic</p>
                  <p className="mt-1 font-medium text-slate-900">
                    Trenchless infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div aria-hidden="true" className="relative mt-16 h-[360px] overflow-hidden rounded-[36px] border border-white bg-[#eef8fc] shadow-[0_30px_90px_rgba(30,60,100,.09)] sm:h-[480px]">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-[5%] top-[20%] h-px w-[90%] rotate-[7deg] bg-cyan-300" />
              <div className="absolute left-[10%] top-[60%] h-px w-[80%] rotate-[-5deg] bg-(--primary-color-deactive)" />
              <div className="absolute left-[30%] top-[10%] h-[90%] w-px rotate-[18deg] bg-cyan-200" />
              <div className="absolute left-[65%] top-[5%] h-[100%] w-px rotate-[-12deg] bg-purple-200" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[42%] bg-gradient-to-b from-transparent to-cyan-100/50" />
            <div className="absolute bottom-[25%] left-[8%] h-24 w-[84%] rounded-[50%] border-2 border-cyan-300/60" />
            <div className="absolute bottom-[20%] left-[18%] h-16 w-[65%] rounded-[50%] border border-(--primary-color-deactive)/60" />
            <div className="absolute left-[12%] top-[43%] h-20 w-[76%] rounded-full border-[12px] border-white/80 bg-cyan-200/20 shadow-[0_20px_40px_rgba(0,180,200,.12)] backdrop-blur">
              <div className="absolute inset-3 rounded-full border border-cyan-300/60" />
            </div>
            <div className="absolute left-[48%] top-[48%] h-5 w-5 rounded-full bg-orange-400 shadow-[0_0_30px_rgba(244,129,23,.45)]" />
          </div>
        </div>
      </header>

      {/* MAIN ARTICLE LAYOUT */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[220px_minmax(0,720px)_220px] lg:gap-16">
        {/* LEFT TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 pt-24">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              CONTENTS
            </p>
            <nav aria-label="Table of contents" className="mt-5 space-y-1">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex gap-3 rounded-xl px-3 py-2 text-xs text-slate-400 transition hover:bg-white hover:text-(--primary-color)"
                >
                  <span className="text-slate-300 group-hover:text-(--primary-color)">
                    {section.number}
                  </span>
                  <span>{section.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* CENTER ARTICLE CONTENT */}
        <article aria-label="The Complete Guide to Trenchless Construction" className="min-w-0 pb-32">
          <Chapter id="introduction" number="01" title="Introduction">
            <Paragraph>
              Underground infrastructure is easy to overlook. Roads, sidewalks,
              and buildings occupy the visible world above, while pipes operate beneath.
            </Paragraph>
            <Paragraph>
              When lines fail, excavation has traditionally been the default fix.
            </Paragraph>
            <Paragraph>
              Trenchless construction solves underground problems with minimal surface disruption.
            </Paragraph>
            <Quote>
              Solve an underground problem while disturbing as little surface as practical.
            </Quote>
            <Paragraph>
              This guide explores major trenchless technologies and project planning.
            </Paragraph>
          </Chapter>

          <Chapter
            id="what-is-trenchless"
            number="02"
            title="What Is Trenchless Construction?"
          >
            <Paragraph>
              Trenchless construction covers rehabilitation and replacement methods that avoid continuous open trenches.
            </Paragraph>

            <Subheading>
              Open-cut construction versus trenchless construction
            </Subheading>
            <Paragraph>
              Open-cut excavation uncovers entire pipe runs, whereas trenchless utilizes access pits and specialized underground machinery.
            </Paragraph>
            <Takeaway title="IMPORTANT">
              Trenchless means localized excavation rather than continuous digging.
            </Takeaway>
          </Chapter>

          <Chapter
            id="why-it-matters"
            number="03"
            title="Why Trenchless Construction Matters"
          >
            <Paragraph>
              Preserving surface features avoids extensive paving, landscape, and structural restoration.
            </Paragraph>
            <Subheading>Working around existing infrastructure</Subheading>
            <Paragraph>
              Evaluating existing underground utilities ensures safe boring and lining routes.
            </Paragraph>
            <Quote>
              The technology is only one part; site investigation is equally crucial.
            </Quote>
          </Chapter>

          <Chapter id="main-methods" number="04" title="The Main Trenchless Methods">
            <Paragraph>
              Method selection depends on pipe size, soil, material, and site access.
            </Paragraph>
            <div className="my-12 grid gap-4">
              {[
                ['01', 'Pipe bursting', 'Fracturing old pipe while pulling a new pipe into position.'],
                ['02', 'Pipe lining', 'Installing a continuous cured-in-place liner within existing pipe.'],
                ['03', 'Directional drilling', 'Creating new underground paths using steerable drills.'],
                ['04', 'Inspection & rehabilitation', 'Camera inspection and targeted cleaning repair.'],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex gap-5">
                    <span className="text-xs font-semibold text-(--primary-color)">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Chapter>

          <Chapter id="pipe-bursting" number="05" title="Pipe Bursting">
            <Paragraph>
              Pipe bursting replaces old lines by breaking them outward while pulling new pipe in.
            </Paragraph>
            <Subheading>When pipe bursting may be considered</Subheading>
            <Paragraph>
              Ideal for expanding pipe capacity along existing alignments.
            </Paragraph>
            <Takeaway title="PROJECT FACTOR">
              Bursting requires assessing surrounding soil and adjacent utilities.
            </Takeaway>
          </Chapter>

          <Chapter id="pipe-lining" number="06" title="Pipe Lining">
            <Paragraph>
              Lining renews structural integrity from inside without removing old pipe walls.
            </Paragraph>
            <Subheading>Inspection comes first</Subheading>
            <Paragraph>
              CCTV camera inspections evaluate geometry, blockages, and lining viability.
            </Paragraph>
            <Quote>
              Good rehabilitation begins with knowing what is inside the ground.
            </Quote>
          </Chapter>

          <Chapter id="directional-drilling" number="07" title="Directional Drilling">
            <Paragraph>
              HDD creates steerable underground pathways for brand-new utility lines.
            </Paragraph>
            <Subheading>Planning the bore</Subheading>
            <Paragraph>
              Precise entry/exit pit planning prevents utility strikes and soil heave.
            </Paragraph>
          </Chapter>

          <Chapter id="choosing-method" number="08" title="Choosing the Right Method">
            <Paragraph>
              Every site presents unique challenges requiring tailored methods.
            </Paragraph>
            <Subheading>Important questions to ask</Subheading>
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
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-(--primary-color)" />
                  <span className="text-sm leading-7 text-slate-600">
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </Chapter>

          <Chapter id="contractor" number="09" title="Finding the Right Contractor">
            <Paragraph>
              Contractors manage planning, execution, and regional compliance.
            </Paragraph>
            <Subheading>Look beyond a company name</Subheading>
            <Paragraph>
              Directories help compare local experience, equipment, and specialization.
            </Paragraph>
            <Takeaway title="WHEN COMPARING CONTRACTORS">
              Verify local experience, site understanding, and equipment capabilities.
            </Takeaway>
          </Chapter>

          <div className="my-16 rounded-[28px] border border-orange-200 bg-orange-50 p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-[0.18em] text-orange-700">
              READY FOR THE NEXT STEP?
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Find contractors for your trenchless project.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Explore the Pipelining Network contractor directory to compare companies by location and specialization.
            </p>
            <Link
              href="/all_contractor"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            >
              Browse contractors <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Chapter id="cost" number="10" title="Understanding Project Costs">
            <Paragraph>
              Pricing varies based on diameter, depth, access, and soil conditions.
            </Paragraph>
            <Subheading>What can influence the price?</Subheading>
            <Paragraph>
              Heavy equipment access, utility bypasses, and surface restoration affect total cost.
            </Paragraph>
          </Chapter>

          <Chapter id="preparation" number="11" title="Preparing for a Project">
            <Paragraph>
              Gathering utility maps, site photos, and past repair records accelerates contractor quoting.
            </Paragraph>
            <Subheading>Ask for a clear scope</Subheading>
            <Quote>
              A clear scope creates a better foundation for comparing proposals.
            </Quote>
          </Chapter>

          <Chapter id="conclusion" number="12" title="Conclusion">
            <Paragraph>
              Trenchless construction replaces or rehabilitates underground systems with minimal surface footprint.
            </Paragraph>
            <Paragraph>
              Planning, inspection, and experienced local contractors are key to project success.
            </Paragraph>

            {/* FINAL CTA BOX */}
            <div className="mt-16 overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white sm:p-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-(--primary-color-deactive)">
                READY TO EXPLORE?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Find trenchless contractors in your area.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Explore contractors by location, specialization and service area.
              </p>
              <Link
                href="/all_contractor"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-purple-100"
              >
                Explore contractors <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Chapter>
        </article>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 pt-24 space-y-5">
            {/* ARTICLE INFO CARD */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                ARTICLE INFO
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs text-slate-400">Reading time</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    ~15 minutes
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Length</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    3,000+ words
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Category</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Industry Guide
                  </p>
                </div>
              </div>
            </div>

            {/* CONTRACTOR CTA CARD */}
            <div className="rounded-[28px] bg-gradient-to-br from-purple-50 to-cyan-50 p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-(--primary-color)">
                LOOKING FOR A CONTRACTOR?
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Search the contractor network by location and specialization.
              </p>

              <Link
                href="/all_contractor"
                className="mt-5 inline-block text-sm font-semibold text-slate-900"
              >
                Browse network <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}