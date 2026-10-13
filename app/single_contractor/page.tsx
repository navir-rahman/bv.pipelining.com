"use client";

import { useState } from "react";

const company = {
  name: "Pipe Lining Company",
  subtitle: "A CIP PIPE, LLC Company",
  location: "Aiken, South Carolina",
  address: "1926 Richland Avenue E, Aiken, SC 29801",
  phone: "866-261-0291",
  alternatePhone: "803-666-8487",
  email: "rgiancroce@pipeliningcompany.com",
  website: "https://pipeliningcompany.com/",
  rating: 4.17,
  reviews: 6,
  established: "1959",
  logo: "", // Add the real logo URL here later
  brandColor: "#52525b",
  description:
    "Pipe Lining Company provides trenchless pipe rehabilitation solutions for residential, commercial, and industrial properties. Its services focus on restoring existing pipelines while minimizing the disruption associated with traditional excavation.",
  services: [
    "Trenchless Pipe Rehabilitation",
    "Cured-in-Place Pipe (CIPP) Lining",
    "Cast Iron Pipe Repair",
    "Brush-On Pipe Coating",
    "High-Pressure Jetting",
    "Commercial Pipe Rehabilitation",
  ],
  coverage: [
    "South Carolina",
    "North Carolina",
    "Georgia",
    "Florida",
    "Alabama",
    "Tennessee",
    "Virginia",
    "Mississippi",
  ],
  hours: [
    ["Monday", "8:00 AM – 5:00 PM"],
    ["Tuesday", "8:00 AM – 5:00 PM"],
    ["Wednesday", "8:00 AM – 5:00 PM"],
    ["Thursday", "8:00 AM – 5:00 PM"],
    ["Friday", "8:00 AM – 5:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
      alt: "Construction and infrastructure work",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
      alt: "Technical infrastructure work",
    },
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
      alt: "Industrial construction work",
    },
  ],
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#work" },
  { label: "Coverage", href: "#coverage" },
  { label: "Hours", href: "#hours" },
];

function Icon({
  name,
  size = 20,
}: {
  name: "arrow" | "phone" | "mail" | "pin" | "clock" | "star" | "external" | "check";
  size?: number;
}) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    ),
    external: (
      <>
        <path d="M14 3h7v7" />
        <path d="M10 14 21 3" />
        <path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: "var(--contractor-accent)" }}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#242421] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-[#74746e]">
          {description}
        </p>
      )}
    </div>
  );
}

function ContractorLogo({ large = false }: { large?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  const logoSize = large ? "h-20 w-20 rounded-2xl" : "h-11 w-11 rounded-xl";

  if (company.logo && !imageFailed) {
    return (
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        onError={() => setImageFailed(true)}
        className={`${logoSize} shrink-0 bg-white object-contain`}
      />
    );
  }

  return (
    <div
      className={`${logoSize} flex shrink-0 items-center justify-center bg-white shadow-sm ring-1 ring-black/[0.06]`}
      aria-label="Temporary contractor logo"
    >
      <svg
        viewBox="0 0 64 64"
        className={large ? "h-14 w-14" : "h-8 w-8"}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="7"
          y="7"
          width="50"
          height="50"
          rx="13"
          fill={company.brandColor}
        />
        <path
          d="M18 23H46M32 23V44M22 34H42"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="44" r="4" fill="#F59E0B" />
      </svg>
    </div>
  );
}

export default function ContractorPage() {
  const brandAccent = company.brandColor.trim() || "#52525b";

  return (
    <main
      style={
        {
          "--contractor-accent": brandAccent,
          "--contractor-tint": `color-mix(in srgb, ${brandAccent} 7%, white)`,
        } as React.CSSProperties
      }
      className="min-h-screen bg-white text-[#242421] antialiased"
    >
      {/* Sticky contractor identity bar */}
      <div
       className="sticky top-0 z-50 border-b border-[#eaeae7] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <ContractorLogo />

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#242421]">
                {company.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-[#858580]">
                {company.location}
              </p>
            </div>
          </a>

          <nav
            aria-label="Contractor page sections"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-[#666660] transition hover:bg-[#f5f5f3] hover:text-[#222]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#252523] px-4 text-sm font-medium text-white transition hover:bg-[#41413e] sm:px-5"
          >
            Contact <Icon name="arrow" size={15} />
          </a>
        </div>

        {/* Mobile section links */}
        <nav
          aria-label="Mobile contractor page sections"
          className="flex gap-2 overflow-x-auto border-t border-[#f0f0ed] px-5 py-2.5 lg:hidden sm:px-8"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-[#666660] transition hover:bg-[#f5f5f3]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero */}
      <section
        id="top"
        className="scroll-mt-32 border-b border-[#ecece8]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <ContractorLogo large />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#858580]">
                  {company.subtitle}
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#5f5f59]">
                  <span
                    className="flex items-center gap-1"
                    style={{ color: "var(--contractor-accent)" }}
                  >
                    <Icon name="star" size={15} />
                    <span className="font-semibold">{company.rating}</span>
                  </span>
                  <span>({company.reviews} reviews)</span>
                  <span className="text-[#d0d0ca]">•</span>
                  <span>Est. {company.established}</span>
                </div>
              </div>
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#22221f] sm:text-5xl lg:text-[62px]">
              {company.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#72726c]">
              Trenchless pipe rehabilitation and pipeline restoration
              solutions for residential, commercial, and industrial properties.
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#62625c]">
              <span
                className="mt-0.5"
                style={{ color: "var(--contractor-accent)" }}
              >
                <Icon name="pin" size={19} />
              </span>
              <span>
                {company.location}
                <br />
                <span className="text-[#8b8b85]">{company.address}</span>
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#252523] px-6 text-sm font-medium text-white transition hover:bg-[#41413e]"
              >
                <Icon name="phone" size={17} />
                Call contractor
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#deded8] bg-white px-6 text-sm font-medium text-[#292925] transition hover:bg-[#f7f7f5]"
              >
                <Icon name="mail" size={17} />
                Contact company
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#eaeae6] pt-6 text-sm text-[#666660]">
              <span className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--contractor-accent)" }}
                />
                Trenchless solutions
              </span>
              <span className="flex items-center gap-2">
                <Icon name="pin" size={16} />
                Multi-state coverage
              </span>
            </div>
          </div>

          {/* Map / location visual */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-[#e8e8e3] bg-[#f4f4f0] p-2">
              <div className="relative h-[320px] overflow-hidden rounded-[21px] sm:h-[400px]">
                <iframe
                  title={`${company.name} location map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
                  className="absolute inset-0 h-full w-full border-0 grayscale-[0.2]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-medium text-[#252523] shadow-lg transition hover:bg-[#f7f7f5]"
                >
                  <Icon name="pin" size={17} />
                  Open in Google Maps
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-[#e9e9e4] bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:right-8">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "var(--contractor-tint)",
                  color: "var(--contractor-accent)",
                }}
              >
                <Icon name="pin" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#292925]">
                  Based in {company.location.split(",")[0]}
                </p>
                <p className="mt-1 text-xs text-[#858580]">
                  Serving multiple states
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick information */}
      <section className="border-b border-[#ecece8]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--contractor-tint)",
                color: "var(--contractor-accent)",
              }}
            >
              <Icon name="clock" />
            </div>
            <div>
              <p className="text-sm font-semibold">Business hours</p>
              <a
                href="#hours"
                className="mt-1 block text-sm text-[#777770] hover:text-[#222]"
              >
                View opening times
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--contractor-tint)",
                color: "var(--contractor-accent)",
              }}
            >
              <Icon name="phone" />
            </div>
            <div>
              <p className="text-sm font-semibold">Speak with the team</p>
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 block text-sm text-[#777770] hover:text-[#222]"
              >
                {company.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{
                backgroundColor: "var(--contractor-tint)",
                color: "var(--contractor-accent)",
              }}
            >
              <Icon name="external" />
            </div>
            <div>
              <p className="text-sm font-semibold">Company website</p>
              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm text-[#777770] hover:text-[#222]"
              >
                Visit official website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-32 border-b border-[#ecece8]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <SectionHeading eyebrow="Get to know us" title="About the company" />

          <div>
            <p className="text-lg leading-8 text-[#686861]">
              {company.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e9e9e4] p-5">
                <p className="text-sm text-[#858580]">Established</p>
                <p className="mt-2 text-2xl font-semibold">
                  {company.established}
                </p>
                <p className="mt-1 text-sm text-[#777770]">
                  Years of industry history
                </p>
              </div>

              <div className="rounded-2xl border border-[#e9e9e4] p-5">
                <p className="text-sm text-[#858580]">Customer rating</p>
                <p className="mt-2 flex items-center gap-2 text-2xl font-semibold">
                  {company.rating}
                  <span
                    style={{ color: "var(--contractor-accent)" }}
                    className="flex"
                  >
                    <Icon name="star" size={20} />
                  </span>
                </p>
                <p className="mt-1 text-sm text-[#777770]">
                  Based on {company.reviews} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-32 border-b border-[#ecece8] bg-[#fafaf8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="What we do"
            title="Services and capabilities"
            description="Explore the pipeline rehabilitation and repair services offered by this contractor."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.services.map((service, index) => (
              <div
                key={service}
                className="flex min-h-24 items-start gap-4 rounded-2xl border border-[#e9e9e4] bg-white p-5 transition hover:border-[#cecec6] hover:shadow-sm"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "var(--contractor-tint)",
                    color: "var(--contractor-accent)",
                  }}
                >
                  <Icon name="check" size={18} />
                </span>
                <div>
                  <p className="font-medium leading-6 text-[#30302c]">
                    {service}
                  </p>
                  <p className="mt-1 text-xs text-[#92928c]">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="work"
        className="scroll-mt-32 border-b border-[#ecece8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionHeading
            eyebrow="Our industry"
            title="Work and capabilities"
            description="An overview of the construction and infrastructure work associated with this industry."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {company.images.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl bg-[#f3f3ef] ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-80"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-14 text-sm font-medium text-white">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#92928c]">
            Temporary stock images. Replace these with actual contractor
            project photos when available.
          </p>
        </div>
      </section>

      {/* Coverage */}
      <section
        id="coverage"
        className="scroll-mt-32 border-b border-[#ecece8] bg-[#fafaf8]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Where we work"
              title="Service area"
              description="Review the states listed in this contractor's service coverage."
            />

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.location)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#30302c] underline decoration-[#c9c9c1] underline-offset-4 hover:decoration-[#30302c]"
            >
              Explore location <Icon name="arrow" size={15} />
            </a>
          </div>

          <div className="grid content-start grid-cols-2 gap-3 sm:grid-cols-3">
            {company.coverage.map((state) => (
              <div
                key={state}
                className="flex items-center gap-2 rounded-xl border border-[#e8e8e2] bg-white px-4 py-4 text-sm font-medium text-[#4e4e48]"
              >
                <span style={{ color: "var(--contractor-accent)" }}>
                  <Icon name="pin" size={16} />
                </span>
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section
        id="hours"
        className="scroll-mt-32 border-b border-[#ecece8]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <SectionHeading
            eyebrow="Plan your visit"
            title="Business hours"
            description="Check the listed business hours before contacting or visiting the company."
          />

          <div className="overflow-hidden rounded-2xl border border-[#e8e8e2]">
            {company.hours.map(([day, time], index) => {
              const closed = time === "Closed";

              return (
                <div
                  key={day}
                  className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                    index !== company.hours.length - 1
                      ? "border-b border-[#eeeeea]"
                      : ""
                  } ${index % 2 === 0 ? "bg-[#fafaf8]" : "bg-white"}`}
                >
                  <span className="font-medium text-[#45453f]">{day}</span>
                  <span
                    className={closed ? "text-[#92928c]" : "text-[#62625c]"}
                  >
                    {time}
                  </span>
                </div>
              );
            })}
            <p className="border-t border-[#eeeeea] bg-white px-5 py-3 text-xs leading-5 text-[#92928c]">
              Hours are example data. Confirm the actual schedule before
              publishing this page.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="overflow-hidden rounded-[28px] bg-[#242421] text-white">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
              <div>
                <p
                  className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#d4d4ce" }}
                >
                  Get in touch
                </p>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Talk to {company.name}
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-white/65">
                  Contact the company directly to discuss your pipeline
                  rehabilitation needs, service availability, and project
                  requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#242421] transition hover:bg-[#e9e9e4]"
                  >
                    <Icon name="phone" size={17} />
                    Call now
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <Icon name="mail" size={17} />
                    Send email
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="mb-5 text-sm font-semibold text-white/60">
                  CONTACT INFORMATION
                </p>

                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-start gap-3 border-b border-white/10 py-4"
                >
                  <Icon name="phone" size={19} />
                  <div>
                    <p className="text-xs text-white/50">Main phone</p>
                    <p className="mt-1 text-sm">{company.phone}</p>
                  </div>
                </a>

                <a
                  href={`tel:${company.alternatePhone.replace(/[^+\d]/g, "")}`}
                  className="flex items-start gap-3 border-b border-white/10 py-4"
                >
                  <Icon name="phone" size={19} />
                  <div>
                    <p className="text-xs text-white/50">Alternate phone</p>
                    <p className="mt-1 text-sm">{company.alternatePhone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 border-b border-white/10 py-4"
                >
                  <Icon name="mail" size={19} />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Email</p>
                    <p className="mt-1 break-all text-sm">{company.email}</p>
                  </div>
                </a>

                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 py-4"
                >
                  <Icon name="external" size={19} />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Website</p>
                    <p className="mt-1 break-all text-sm">
                      pipeliningcompany.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}