import Link from "next/link";
import React from "react";

export default function page() {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://example.com/images/web-development.png",
      description:
        "Professional web development services using the latest technologies like HTML5, CSS3, and JavaScript.",
    },
    {
      _id: "2",
      service_name: "Graphic Design",
      service_image: "https://example.com/images/graphic-design.png",
      description:
        "Creative graphic design solutions including logos, branding, and marketing materials.",
    },
    {
      _id: "3",
      service_name: "Digital Marketing",
      service_image: "https://example.com/images/digital-marketing.png",
      description:
        "Comprehensive digital marketing strategies including SEO, PPC, and social media marketing.",
    },
    {
      _id: "4",
      service_name: "Mobile App Development",
      service_image: "https://example.com/images/mobile-app.png",
      description:
        "Custom mobile app development for Android and iOS platforms tailored to your business needs.",
    },
  ];

  return (
    <div>
      <h2>services page</h2>
      {data.map((d) => {
        return (
          <div key={d._id}>
            <Link href={`/services/${d._id}`}>
            <h2>{d.service_name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
