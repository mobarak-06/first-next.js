import React from "react";

export default function ServicesDetails({ params }) {
  const data = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image: "https://i.ibb.co.com/dwbmdYY4/images.jpg",
      description:
        "Professional web development services using the latest technologies like HTML5, CSS3, and JavaScript.",
    },
    {
      _id: "2",
      service_name: "Graphic Design",
      service_image: "https://i.ibb.co.com/dwbmdYY4/images.jpg",
      description:
        "Creative graphic design solutions including logos, branding, and marketing materials.",
    },
    {
      _id: "3",
      service_name: "Digital Marketing",
      service_image: "https://i.ibb.co.com/dwbmdYY4/images.jpg",
      description:
        "Comprehensive digital marketing strategies including SEO, PPC, and social media marketing.",
    },
    {
      _id: "4",
      service_name: "Mobile App Development",
      service_image: "https://i.ibb.co.com/dwbmdYY4/images.jpg",
      description:
        "Custom mobile app development for Android and iOS platforms tailored to your business needs.",
    },
  ];

  const id = params?.id;
  const singleData = data.find((d) => d._id == id);
  if (singleData) {
    return (
      <div>
        <h1>ServicesDetails</h1>
        <p>ID: {id}</p>
        <p>{singleData.service_name}</p>
        <img src={singleData.service_image} alt="none" />
      </div>
    );
  } else {
    return(
       <>
      <h2>Services Not Found</h2>
    </>
    )
   
  }
}
