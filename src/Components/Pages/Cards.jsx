import React from "react";
import { topicsData } from "../../constant/dummyData";
import { Link } from "react-router-dom";

const Cards = () => {
      
  return (
    <section className="bg-lightgrey py-12">
      <div className="container">
        <div className="text-center mb-10">
          {/* <h3 className="heading-10">Our Legends Our Mentors</h3> */}
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topicsData.map((card, index) => {
              card.year = 2024 - index;
              return (
                <Link to={`/Awardees/${card.id}`} key={card.id}>
                  <ServiceCard {...card} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ logo, title, year }) => {
  return (
    <div className="relative overflow-hidden shadow-lg">
      <div className="card-img mx-auto">
        <img src={logo} alt={title} className=" object-cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4">
        <button className="card-btn text-xs px-2 py-1 rounded mb-1">
          Year: {year}
        </button>
        <h5 className="text-white text-sm font-medium">
          {title}
        </h5>

        
      </div>
    </div>
  );
};

export default Cards;
