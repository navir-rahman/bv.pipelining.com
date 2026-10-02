import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trenchless Construction Blog | Guides, Methods & Contractor Advice",
  description:
    "Explore practical guides about trenchless construction, pipe lining, pipe bursting, directional drilling, sewer rehabilitation, project costs, and choosing the right contractor.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Trenchless Construction Blog | Pipelining Network",
    description:
      "Practical guides and expert information about trenchless construction, pipe rehabilitation, underground utilities, and contractors.",
    type: "website",
  },
};

const categories = [
  "All",
  "Trenchless Construction",
  "Pipe Lining",
  "Pipe Bursting",
  "Directional Drilling",
  "Contractors",
  "Project Planning",
];

const posts = [
  {
    slug: "complete-guide-to-trenchless-construction",
    title: "The Complete Guide to Trenchless Construction",
    excerpt:
      "Learn how trenchless construction works, when it is used, the major methods, project considerations, costs, and how to choose a qualified contractor.",
    category: "Trenchless Construction",
    date: "October 2, 2026",
    dateTime: "2026-10-02",
    readTime: "14 min read",
    featured: true,
  },
  {
    slug: "what-is-pipe-lining",
    title: "What Is Pipe Lining? A Practical Guide to CIPP",
    excerpt:
      "Understand how cured-in-place pipe lining works, where it can be used, what preparation is required, and what property owners should ask contractors.",
    category: "Pipe Lining",
    date: "September 24, 2026",
    dateTime: "2026-09-24",
    readTime: "9 min read",
  },
  {
    slug: "pipe-bursting-explained",
    title: "Pipe Bursting Explained: How Trenchless Replacement Works",
    excerpt:
      "A clear explanation of pipe bursting, including the process, suitable applications, access requirements, and important project considerations.",
    category: "Pipe Bursting",
    date: "September 17, 2026",
    dateTime: "2026-09-17",
    readTime: "8 min read",
  },
  {
    slug: "horizontal-directional-drilling-guide",
    title: "Horizontal Directional Drilling: What You Need to Know",
    excerpt:
      "Explore how HDD creates underground utility pathways while reducing the need for continuous surface excavation.",
    category: "Directional Drilling",
    date: "September 10, 2026",
    dateTime: "2026-09-10",
    readTime: "10 min read",
  },
  {
    slug: "how-to-choose-trenchless-contractor",
    title: "How to Choose a Trenchless Construction Contractor",
    excerpt:
      "Questions to ask, qualifications to review, project details to compare, and information to request before selecting a contractor.",
    category: "Contractors",
    date: "September 3, 2026",
    dateTime: "2026-09-03",
    readTime: "11 min read",
  },
  {
    slug: "trenchless-vs-traditional-excavation",
    title: "Trenchless vs. Traditional Excavation",
    excerpt:
      "Compare the two approaches across excavation, restoration, access, site conditions, project scope, and cost considerations.",
    category: "Project Planning",
    date: "August 27, 2026",
    dateTime: "2026-08-27",
    readTime: "9 min read",
  },
  {
    slug: "sewer-camera-inspection-guide",
    title: "Why Sewer Camera Inspection Matters Before Repair",
    excerpt:
      "Learn what a sewer camera inspection can reveal and why inspection is an important part of planning rehabilitation or replacement.",
    category: "Project Planning",
    date: "August 20, 2026",
    dateTime: "2026-08-20",
    readTime: "7 min read",
  },
  {
    slug: "trenchless-construction-cost",
    title: "How Much Does Trenchless Construction Cost?",
    excerpt:
      "Understand the factors that influence trenchless construction pricing, including pipe size, depth, access, materials, equipment, and restoration.",
    category: "Project Planning",
    date: "August 13, 2026",
    dateTime: "2026-08-13",
    readTime: "10 min read",
  },
  {
    slug: "trenchless-sewer-rehabilitation",
    title: "A Guide to Trenchless Sewer Rehabilitation",
    excerpt:
      "Learn about common sewer rehabilitation methods and how contractors evaluate existing underground infrastructure.",
    category: "Trenchless Construction",
    date: "August 6, 2026",
    dateTime: "2026-08-06",
    readTime: "12 min read",
  },
];

const featuredPost = posts.find((post) => post.featured)!;
const regularPosts = posts.filter((post) => !post.featured);

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pipelining Network Blog",
  description:
    "Practical information about trenchless construction, pipe rehabilitation, underground utilities, project planning, and contractors.",
  url: "https://yourdomain.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Pipelining Network",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />

      <main className="min-h-screen bg-[#f8f9fb] text-slate-950">
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Pipelining Network
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Trenchless construction knowledge, made practical.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
                Practical guides covering trenchless construction, pipe
                rehabilitation, pipe replacement, directional drilling,
                project planning, and finding qualified contractors.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#latest"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
                >
                  Explore articles
                </a>

                <Link
                  href="/all_contractor"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-orange-400 hover:text-orange-500"
                >
                  Find a contractor
                </Link>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Practical guides"],
                ["02", "Project knowledge"],
                ["03", "Contractor resources"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur"
                >
                  <span className="text-xs font-semibold tracking-widest text-orange-500">
                    {number}
                  </span>
                  <p className="mt-2 font-medium text-slate-900">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Start here
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Featured guide
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Start with our comprehensive guide if you are new to trenchless
              construction or planning an underground infrastructure project.
            </p>
          </div>

          <article className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.4),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.3),transparent_40%)]" />

                <div className="absolute inset-0 flex items-end p-8 sm:p-10">
                  <div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                      {featuredPost.category}
                    </span>

                    <p className="mt-6 text-sm text-white/50">
                      {featuredPost.readTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <time dateTime={featuredPost.dateTime}>
                    {featuredPost.date}
                  </time>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-slate-950 transition group-hover:text-orange-500"
                >
                  Read the complete guide
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section
          id="latest"
          className="scroll-mt-20 border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Knowledge center
                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight">
                  Latest articles
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                  Explore detailed articles covering underground construction,
                  rehabilitation methods, project planning, and contractor
                  selection.
                </p>
              </div>

              <div className="relative w-full lg:w-80">
                <label htmlFor="blog-search" className="sr-only">
                  Search articles
                </label>

                <input
                  id="blog-search"
                  type="search"
                  placeholder="Search articles..."
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </div>

            <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    index === 0
                      ? "bg-slate-950 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mt-12 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={post.title}
                    className="block"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.2),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.15),transparent_40%)] transition duration-500 group-hover:scale-105" />

                      <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <time dateTime={post.dateTime}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition hover:text-orange-500"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-orange-500"
                    >
                      Read article
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                type="button"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition hover:border-orange-400 hover:text-orange-500"
              >
                Load more articles
              </button>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f8f9fb]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="overflow-hidden rounded-[32px] bg-slate-950">
              <div className="relative px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
                <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Find the right professional
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Ready to find a trenchless contractor?
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                    Explore contractors by location and service to find
                    professionals who can evaluate your underground
                    construction or rehabilitation project.
                  </p>

                  <Link
                    href="/all_contractor"
                    className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-500 hover:text-white"
                  >
                    Browse contractors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}