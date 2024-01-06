import { useState } from "react";

const Image = ({ src }) => (
  <img className="max-w-full max-h-24 border-none" src={`http://localhost:3000${src}`} alt="" />
);

const BigImage = ({ src }) => (
  <img className="max-w-full max-h-96" src={`http://localhost:3000${src}`} alt="" />
);

const ImageButtons = ({ children }) => (
  <div className="flex gap-10 flex-grow-0 mt-10">{children}</div>
);

const ImageButton = ({ active, onClick, children }) => (
  <div
    className={`border-2 ${active ? "border-gray-300" : "border-transparent"} h-40 p-2 cursor-pointer rounded-5`}
    onClick={onClick}
  >
    {children}
  </div>
);

const BigImageWrapper = ({ children }) => (
  <div className="text-center h-auto">{children}</div>
);

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
