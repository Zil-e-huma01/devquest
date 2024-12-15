import React from "react";
import Card from "./Card"; // Import the Card component
import "./Grid.css"; // Import styles for the Grid

const Grid = () => {
  // Card data with images, gradient classes, and descriptions
  const cardsData = [
    {
      title: "Card 1",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), #0393F6)",
      image: "https://th.bing.com/th/id/R.9088e80b1f8edd4e4c1259a692408fa1?rik=%2fPP%2fEh%2b8b8Repg&riu=http%3a%2f%2fwww.teqlease.com%2fwp-content%2fuploads%2f2015%2f10%2fbigstock-Business-people-working-in-off-61710530.jpg&ehk=zTjr%2bPjX03Vjt0GSItxchuiQBA%2bEonvE4gG02BSAuUs%3d&risl=1&pid=ImgRaw&r=0",
      description: "Manage your business efficiently with modern tools.",
    },
    {
      title: "Card 2",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(255, 0, 0, 0.7))",
      image: "https://static.wixstatic.com/media/47d4e0_8aa3785f8a7745ef89729158e93b3a21~mv2.png",
      description: "Streamline workflows and maximize productivity.",
    },
    {
      title: "Card 3",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(128, 0, 128, 0.7))",
      image: "https://th.bing.com/th/id/R.9088e80b1f8edd4e4c1259a692408fa1?rik=%2fPP%2fEh%2b8b8Repg&riu=http%3a%2f%2fwww.teqlease.com%2fwp-content%2fuploads%2f2015%2f10%2fbigstock-Business-people-working-in-off-61710530.jpg&ehk=zTjr%2bPjX03Vjt0GSItxchuiQBA%2bEonvE4gG02BSAuUs%3d&risl=1&pid=ImgRaw&r=0",
      description: "Tailored solutions for growing businesses.",
    },
    {
      title: "Card 4",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(128, 0, 128, 0.7))",
      image: "https://th.bing.com/th/id/R.9088e80b1f8edd4e4c1259a692408fa1?rik=%2fPP%2fEh%2b8b8Repg&riu=http%3a%2f%2fwww.teqlease.com%2fwp-content%2fuploads%2f2015%2f10%2fbigstock-Business-people-working-in-off-61710530.jpg&ehk=zTjr%2bPjX03Vjt0GSItxchuiQBA%2bEonvE4gG02BSAuUs%3d&risl=1&pid=ImgRaw&r=0",
      description: "Innovative tools to help your team succeed.",
    },
    {
      title: "Card 5",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), #0393F6)",
      image: "https://static.wixstatic.com/media/47d4e0_8aa3785f8a7745ef89729158e93b3a21~mv2.png",
      description: "Empower your clients with our expert solutions.",
    },
    {
      title: "Card 6",
      gradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(255, 0, 0, 0.7))",
      image: "https://th.bing.com/th/id/R.9088e80b1f8edd4e4c1259a692408fa1?rik=%2fPP%2fEh%2b8b8Repg&riu=http%3a%2f%2fwww.teqlease.com%2fwp-content%2fuploads%2f2015%2f10%2fbigstock-Business-people-working-in-off-61710530.jpg&ehk=zTjr%2bPjX03Vjt0GSItxchuiQBA%2bEonvE4gG02BSAuUs%3d&risl=1&pid=ImgRaw&r=0",
      description: "Transform ideas into impactful outcomes.",
    },
  ];

  return (
    <section className="grid-container">
      <h1>Support clients of all <br /> shapes and sizes</h1>
      <div className="grid">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            gradient={card.gradient}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Grid;
