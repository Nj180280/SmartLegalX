import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router.
import "./Services.css";

const Services = () => {
    

  const services = [
    {
      title: "Luxurious Rooms",
      description:
        "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus in sapiente, impedit perspiciatis reiciendis dolor distinctio similique animi culpa aut!",
      image: "https://github.com/JAtharva22/html-css-projects/assets/93152317/6d4b7f7c-e287-45bf-bf04-72bab679f269",
      link: "/luxurious-rooms", // Add a link property for each service
    },
    {
      title: "Gourmet Dining",
      description:
        "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus in sapiente, impedit perspiciatis reiciendis dolor distinctio similique animi culpa aut!",
      image: "https://github.com/JAtharva22/html-css-projects/assets/93152317/044c50eb-cbec-4ed7-85f2-e54daf4f992c",
      link: "/gourmet-dining", // Add a link property for each service
    },
    {
      title: "Spa & Wellness",
      description:
        "   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus in sapiente, impedit perspiciatis reiciendis dolor distinctio similique animi culpa aut!",
      image: "https://github.com/JAtharva22/html-css-projects/assets/93152317/1212e7fc-dfb9-404a-a624-b05f7400e703",
      link: "/spa-wellness", // Add a link property for each service
    },
    // Add more services as needed
  ];

  return (
    
    <div className="service-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img
            src={service.image}
            alt={service.title}
            className="service-img"
          />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <Link to={service.link} className="service-button">
            Explore
          </Link>{" "}
          {/* Use Link to direct the user */}
        </div>
      ))}
    </div>
  );
};

export default Services;
