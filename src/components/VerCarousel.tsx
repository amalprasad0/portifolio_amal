import React, { useEffect, useState } from "react";
import DataService from "../services/SkillService";
import { CarouselCard } from ".";

export function VerCarousel() {
  const [data, setData] = useState<any[]>([]); // Adjust type according to your JSON structure
  const dataService = new DataService();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataService.fetchData();
      setData(result);
      console.log(result);
    };
    
    fetchData();
  }, []);

  const firstHalfData = data.slice(0, Math.ceil(data.length / 2));
  const secondHalfData = data.slice(Math.ceil(data.length / 2));

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ float: 'left' }}>
        {firstHalfData.map((url: string, index: number) => (
          <CarouselCard key={index} url={url} />
        ))}
      </div>
      <div className="carousel-wrapper" style={{ float: 'left' }}>
        {secondHalfData.map((url: string, index: number) => (
          <CarouselCard key={index + firstHalfData.length} url={url} />
        ))}
      </div>
    </div>
  );
}
