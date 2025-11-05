// Centralized list of upcoming/popular developer events
// Images referenced from public/images so they work with next/image as "/images/…"

export type EventItem = {
  title: string;
  image: string; // path under public, e.g. "/images/event1.png"
  slug: string; // kebab-case unique id for routing
  location: string; // City, Country or Online
  date: string; // Human readable date, e.g. "Mar 14–16, 2026"
  time: string; // Local time range, e.g. "09:00 – 18:00"
};

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, NL",
    date: "Jun 12–13, 2026",
    time: "09:00 – 18:00",
  },
  {
    title: "Google Cloud Next 2026",
    image: "/images/event2.png",
    slug: "google-cloud-next-2026",
    location: "San Francisco, USA",
    date: "Apr 7–9, 2026",
    time: "09:00 – 17:30",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event3.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, DE",
    date: "Sep 19–20, 2026",
    time: "10:00 – 18:00",
  },
  {
    title: "AWS re:Invent 2025",
    image: "/images/event4.png",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, USA",
    date: "Dec 1–5, 2025",
    time: "08:30 – 17:00",
  },
  {
    title: "HackMIT 2026",
    image: "/images/event5.png",
    slug: "hackmit-2026",
    location: "Cambridge, USA",
    date: "Sep 12–13, 2026",
    time: "24-hour hackathon",
  },
  {
    title: "PyCon US 2026",
    image: "/images/event6.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, USA",
    date: "May 14–22, 2026",
    time: "09:00 – 18:00",
  },
  {
    title: "KubeCon + CloudNativeCon Europe 2026",
    image: "/images/event-full.png",
    slug: "kubecon-europe-2026",
    location: "Vienna, AT",
    date: "Mar 31 – Apr 3, 2026",
    time: "09:00 – 18:00",
  },
  {
    title: "Next.js Conf 2026",
    image: "/images/event2.png",
    slug: "nextjs-conf-2026",
    location: "Online",
    date: "Oct 28, 2026",
    time: "16:00 – 20:00 UTC",
  },
];
