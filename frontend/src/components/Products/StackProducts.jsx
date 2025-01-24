import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function StackProducts({
  randomRotation = true,
  sensitivity = 200,
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = true,
}) {
  console.log(cardsData);
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card, index) => index === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };
  // State to track mouse position for the spotlight
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Handle mouse position for the spotlight effect
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  // Handle mouse enter and leave
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className="flex justify-center h-[36vh] rounded-lg border-2 border-white border-opacity-50 relative"
      style={{
        background: "rgba(31, 41, 55, 0.3)", // Semi-transparent background
        backdropFilter: "blur(12px)", // Frosted-glass effect
        WebkitBackdropFilter: "blur(12px)", // Safari support
        overflow: "hidden", // Ensures the spotlight effect doesn't spill out
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      {hovered && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle, rgba(255, 229, 255, 0.7) 20%, rgba(31,41,55,0) 50%)`, // Spotlight color
            filter: "blur(50px)",
            transform: `translate(${mousePosition.x - 125}px, ${
              mousePosition.y - 75
            }px)`, // Position spotlight where the mouse is
            pointerEvents: "none", // Ensure it doesn't interfere with other mouse interactions
          }}
        ></div>
      )}

      <div
        className="relative z-10 flex justify-center items-center"
        style={{
          perspective: 600,
        }}
      >
        {cards.map((card, index) => {
          const randomRotate = randomRotation
            ? Math.random() * 10 - 5 // Random degree between -5 and 5
            : 0;

          return (
            <CardRotate
              key={index}
              onSendToBack={() => sendToBack(index)}
              sensitivity={sensitivity}
            >
              <motion.div
                className=" w-[20vw] h-[30vh] rounded-lg overflow-hidden"
                onClick={() =>
                  (!sendToBackOnClick || card.type !== "video") &&
                  sendToBack(index)
                }
                animate={{
                  rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: animationConfig.stiffness,
                  damping: animationConfig.damping,
                }}
              >
                {card.type === "image" ? (
                  <img
                    src={card.src}
                    alt={`card-${index}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={card.src}
                    autoPlay={true}
                    controls
                    aria-controls
                    className="w-full h-64 object-cover"
                  />
                )}
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
      {/* Overlay Name */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-gray-500 via-transparent
        to-transparent p-3 text-white z-50"
      >
        <h3 className="text-md font-bold truncate">Stylish Shoe</h3>
      </div>
      {/* Floating WhatsApp Button */}
      <div className="absolute bottom-2 right-4 z-50 ">
        <a
          //   href={whatsappLink}
          style={{
            background: "rgba(31, 41, 55, 0.3)", // Semi-transparent background
            backdropFilter: "blur(12px)", // Frosted-glass effect
            WebkitBackdropFilter: "blur(12px)", // Safari support
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer flex items-center justify-center gap-1 border-2 border-green-500 text-white px-3 py-2 pb-2.5 rounded-full hover:bg-green-600 transition-colors duration-200 shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-4 h-4"
          />
          <div className="text-xs font-medium">Order with us</div>
        </a>
      </div>
    </div>
  );
}
