import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "react-feather"

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png"
]

export default function ClientFeedbackCarousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="my-[200px] h-full overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <img src={s} className="h-[200px]"/>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full shadow p-10 bg-black text-gray-800"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pin-fill h-4 w-4 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
          </svg> */}
        </button>
        <button
          onClick={next}
          className="p-10 rounded-full shadow bg-black text-gray-800"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pin-fill h-4 w-4 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
          </svg> */}
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


// const Slider = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleCardClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   return (
//     <div className="relative">
//       <div className="flex overflow-hidden">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`w-64 h-48 bg-gray-200 rounded-lg mx-2 transition-transform duration-300 transform ${
//               index === currentIndex
//                 ? 'translate-x-0'
//                 : index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)
//                 ? '-translate-x-64'
//                 : 'translate-x-64'
//             }`}
//             onClick={() => handleCardClick(index)}
//           >
//             <div className="p-4">
//               <h2 className="text-lg font-bold">{card.title}</h2>
//               <p>{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         {cards.map((_, index) => (
//           <button
//             key={index}
//             className={`w-4 h-4 rounded-full mx-1 focus:outline-none ${
//               index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//             onClick={() => handleCardClick(index)}
//           />
//         ))}
//       </div>

//       <div className="absolute bottom-0 flex justify-center w-full mt-4">
//         <button
//           className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded focus:outline-none"
//           onClick={handlePrev}
//         >
//           Prev
//         </button>
//         <button
//           className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded focus:outline-none"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;