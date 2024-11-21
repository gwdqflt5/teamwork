import React, { useState, useEffect } from "react";
import "./Mohista.css";

const Mohista = () => {
  const photos = [
    {
      id: 1,
      src: "https://s3-alpha-sig.figma.com/img/7784/b74d/72756346e788a7f69ed87f524e658ddc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7m-qxB-hCf141hKrDkYIJCLvQ96DOD9J4ehrldZabT~uSq~R3gF36Y5iel7QhFopxOPTTypjynwT9Yu9EL-m0zrX8iK3xNtXmOUkh1aPezb2unLxHqViz~ek6l1qAPPhTmakbHzJzFQ~Xa87NtoXVx9b26agQGNZSHz6Ynx1Pjr~W~C0iYsADtHqwevBoZyRjnK3HzzQKLPbwQHkH8mNYhHPC2Udk5gXzBeOL4vN4EfiB2yZAW3mPUMtpfpeNwiwBCSj-bt1W7N96ri-irardsXJeN2neMS4wEXc5JKNi77E9UYG7BuUsvXJAT-DDCN9-rYFw3IdwRd4tP3fHpgLA__",
    },
    {
      id: 2,
      src: "https://s3-alpha-sig.figma.com/img/da9d/fd37/59ab4a4dfd92061a0e3fdb012ca367ae?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TYJrprC6HtpPMjUSJGx7sZGjvgqriqiCUsRTftnuHfAz2qH2hmvDOXZj5plMeM9SyutWERma4JFoiYwHF1F~sDKX-lh1HrVyhoLnuvWb1rXFaQno115U3c0j7GiYMu65pFERqIoFmytK3UPO0tHuvjOlf2rVDnXcGMkDaMqBxNB4rwigrfI2CWHe9LITXxlZ~qc4EHXBQchRIF6OBopZJZQQUrr1F3YlLyG5FfA1-nKUIl4O7~JFszmTwnjri6hhkm5QhZNVbkLoLHPPbgDLp2V~jMY8neiz-OGSqRu0AhUi5wP-yK4zK7LRu2UcbMrfw7E84ZUgPS1ZS9zQ4F4cEQ__",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 soniya

    return () => clearInterval(interval); // Toza qilib qo'yish
  }, [photos.length]);

  return (
    <div className="photosm">
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className={`photo1 ${index === currentIndex ? "active" : ""}`}
        >
          <img src={photo.src} alt={`photo-${photo.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Mohista;
