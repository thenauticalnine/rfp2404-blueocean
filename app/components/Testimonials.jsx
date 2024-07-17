import { useState, useEffect } from 'react';
// import studio08 from '/reviews/studio08.png';



const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  function createTestimonials(number) {
    const startSentences = [
      "This was the best cruise I have ever been on! I told all of my friends and family about our ",
      "Thanks Brett Spenderson! We had such a great time on our cruise. I loved the ",
      "Our recent cruise experience was absolutely amazing! We really liked the ",
      "What an incredible journey! We relaxed and spent our time enjoying the ",
      "We had an unforgettable vacation. We had a great time interacting with the ",
      "This cruise exceeded all our expectations. Alaska is known for ",
      "Our family had a fantastic time on this cruise. Alaska is known for ",
      "I am so grateful for the wonderful experience we had. Mexico was great and we loved the ",
      "From start to finish, the cruise was just perfect. I think Alaska had the most ",
      "Our time on the Journey of Adventure was unforgettable. The adventure had the most ",
      "Sailing on the Journey of Adventure was incredible. We loved the ",
      "From the moment we boarded the Journey of Adventure, it was amazing. The views were ",
      "The Journey of Adventure took us to places that were breathtaking. I definitely loved the",
      "Our cruise on the Journey of Adventure was filled with moments that were unforgettable. We loved the ",
      "We had an amazing time on the Journey of Adventure. The adventure had the most ",
      "Every day on the Journey of Adventure was fantastic. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of Adventure cruise was remarkable. We thoroughly enjoyed our ",
      "We loved every minute on the Journey of Adventure. We were blown away by the ",
      "Our Journey of Adventure cruise was outstanding. We loved the ",
      "Our journey to the South Pacific on the Journey of Discovery was breathtaking. We couldn't get enough of the ",
      "Sailing the South Pacific with the Journey of Discovery was spectacular. We enjoyed the ",
      "We had an incredible time on the Journey of Discovery. We couldn't get enough of the stunning. We loved the ",
      "The Journey of Discovery cruise through the South Pacific was breathtaking. We loved the ",
      "Exploring the South Pacific on the Journey of Discovery was amazing. We had ",
      "We loved our time on the Journey of Discovery. We loved the memorable. The adventure had the most ",
      "The Journey of Discovery took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Discovery was unforgettable. We loved the ",
      "Every moment on the Journey of Discovery was remarkable. We had ",
      "Our South Pacific adventure on the Journey of Discovery was incredible. We loved the ",
      "Our cruise on the Journey of Dreams was unforgettable. We loved the ",
      "Sailing the South Pacific on the Journey of Dreams was spectacular. We had ",
      "We had the best time on the Journey of Dreams. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of Dreams cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the South Pacific with the Journey of Dreams was amazing. We were blown away by the ",
      "We loved every moment on the Journey of Dreams. We loved the ",
      "The Journey of Dreams took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Dreams was outstanding. We loved the ",
      "Every day on the Journey of Dreams was fantastic. The adventure had the most ",
      "Our South Pacific journey on the Journey of Dreams was incredible. We had ",
      "Our Mediterranean adventure on the Journey of Paradise was unforgettable. The adventure had the most ",
      "Sailing the Mediterranean on the Journey of Paradise was spectacular. We loved the ",
      "We had the best time on the Journey of Paradise. The culture was ",
      "The Journey of Paradise cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mediterranean with the Journey of Paradise was amazing. We had ",
      "We loved our time on the Journey of Paradise. We were blown away by the ",
      "The Journey of Paradise took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Paradise was outstanding. We loved the ",
      "Every day on the Journey of Paradise was fantastic. The adventure had the most ",
      "Our Mediterranean journey on the Journey of Paradise was incredible. We had the best ",
      "Our cruise on the Journey of Serenity was unforgettable. We loved the ",
      "Sailing the Mediterranean on the Journey of Serenity was spectacular. We had ",
      "We had the most serene time on the Journey of Serenity. I definitely loved the",
      "The Journey of Serenity cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mediterranean with the Journey of Serenity was amazing. We were blown away by the ",
      "We enjoyed every moment on the Journey of Serenity. The adventure had the most ",
      "The Journey of Serenity took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Serenity was outstanding. We loved the ",
      "Every day on the Journey of Serenity was fantastic. We had ",
      "Our Mediterranean journey on the Journey of Serenity was incredible. We loved the ",
      "Our cruise on the Journey of the Horizon was unforgettable. We loved the ",
      "Sailing the Mexican Riviera on the Journey of the Horizon was spectacular. We had ",
      "We had the best time on the Journey of the Horizon. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Horizon cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mexican Riviera with the Journey of the Horizon was amazing. We were blown away by the ",
      "We loved every moment on the Journey of the Horizon. We loved the ",
      "The Journey of the Horizon took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Horizon was outstanding. We loved the ",
      "Every day on the Journey of the Horizon was fantastic. The adventure had the most ",
      "Our Mexican Riviera journey on the Journey of the Horizon was incredible. We had ",
      "Our Alaskan adventure on the Journey of the Oceans was unforgettable. The adventure had the most ",
      "Sailing through Alaska on the Journey of the Oceans was spectacular. We loved the ",
      "We had the best time on the Journey of the Oceans. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Oceans cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring Alaska with the Journey of the Oceans was amazing. We had ",
      "We loved every moment on the Journey of the Oceans. We were blown away by the ",
      "The Journey of the Oceans took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Oceans was outstanding. We loved the ",
      "Every day on the Journey of the Oceans was fantastic. The adventure had the most ",
      "Our Alaskan journey on the Journey of the Oceans was incredible. We had ",
      "Our Alaskan adventure on the Journey of the Stars was unforgettable. The adventure had the most ",
      "Sailing through Alaska on the Journey of the Stars was spectacular. We loved the ",
      "We had the best time on the Journey of the Stars. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Stars cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring Alaska with the Journey of the Stars was amazing. We had ",
      "We loved every moment on the Journey of the Stars. We were blown away by the ",
      "The Journey of the Stars took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Stars was outstanding. We loved the ",
      "Every day on the Journey of the Stars was fantastic. We couldn't get enough of the",
      "Our Alaskan journey on the Journey of the Stars was incredible. We had ",
      "Our cruise on the Journey of the Seas was unforgettable. We loved the ",
      "Sailing the Mexican Riviera on the Journey of the Seas was spectacular. We had ",
      "We had the best time on the Journey of the Seas. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Seas cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mexican Riviera with the Journey of the Seas was amazing. We were blown away by the ",
      "We loved every moment on the Journey of the Seas. We loved the ",
      "The Journey of the Seas took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Seas was outstanding. We loved the ",
      "Every day on the Journey of the Seas was fantastic. The adventure had the most ",
      "Our Mexican Riviera journey on the Journey of the Seas was incredible. We had ",
      "Our Alaskan adventure on the Journey of the Stars was unforgettable. The adventure had the most ",
      "Sailing through Alaska on the Journey of the Stars was spectacular. We loved the ",
      "We had the best time on the Journey of the Stars. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Stars cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring Alaska with the Journey of the Stars was amazing. We had ",
      "We loved every moment on the Journey of the Stars. We were blown away by the ",
      "The Journey of the Stars took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Stars was outstanding. We loved the ",
      "Every day on the Journey of the Stars was fantastic. The adventure had the most ",
      "Our Alaskan journey on the Journey of the Stars was incredible. We had ",
      "Our Caribbean adventure on the Journey of the Voyager was unforgettable. The adventure had the most ",
      "Sailing the Caribbean on the Journey of the Voyager was spectacular. We loved the ",
      "We had the best time on the Journey of the Voyager. I can't wait to tell everyone I know how great this trip was. I'm still thrilled about our ",
      "The Journey of the Voyager cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Caribbean with the Journey of the Voyager was amazing. We were blown away by the ",
      "We loved every moment on the Journey of the Voyager. We loved the ",
      "The Journey of the Voyager took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of the Voyager was outstanding. We loved the ",
      "Every day on the Journey of the Voyager was fantastic. The adventure had the most ",
      "Our Caribbean journey on the Journey of the Voyager was incredible. We had ",
      "Our cruise on the Journey of Serenity was unforgettable. We loved the ",
      "Sailing the Mediterranean on the Journey of Serenity was spectacular. We had ",
      "We had the most serene time on the Journey of Serenity. I definitely loved the",
      "The Journey of Serenity cruise was remarkable. We thoroughly enjoyed our ",
      "Exploring the Mediterranean with the Journey of Serenity was amazing. We were blown away by the ",
      "We enjoyed every moment on the Journey of Serenity. The adventure had the most ",
      "The Journey of Serenity took us to places that were breathtaking. We couldn't get enough of the ",
      "Our cruise on the Journey of Serenity was outstanding. We loved the ",
      "Every day on the Journey of Serenity was fantastic. We had ",
      "Our Mediterranean journey on the Journey of Serenity was incredible. We loved the "
    ]

    const adjectives = [
      "scenic", "breathtaking", "beautiful", "sunny", "incredible",
      "magnificent", "stunning", "gorgeous", "awe-inspiring", "spectacular",
      "picturesque", "wonderful", "fantastic", "amazing", "enchanting",
      "charming", "delightful", "exquisite", "marvelous", "majestic",   "splendid", "unforgettable", "serene", "idyllic",
      "dreamy", "luxurious", "tranquil", "romantic",
      "refreshing", "captivating", "ethereal", "unspoiled", "lush",
      "mesmerizing", "invigorating", "thrilling"
      ];


    const endSentences = [
      " views. The staff were very friendly. I am looking forward to my next trip!",
      " cities and the locals were really kind. This was such an incredible adventure.",
      " food and entertainment. It was was top-notch. We cannot wait to book another cruise!",
      " excursions that were well organized and so much fun. Highly recommend this cruise!",
      " garden and how it was so well taken care of. Truly a five-star experience!",
      " cabin we were in because it was spacious and comfortable. The perfect getaway!",
      " on-board activities. They were engaging and entertaining. We had a blast!",
      " spa. We felt so relaxed and pampered throughout the trip. Absolutely delightful!",
      "  crew and we were blown away by how much they went above and beyond to make our trip special. Outstanding service!",
      " destinations. They were fantastic and the journey was seamless. A perfect holiday!"
    ]

    const firstNames = [
      "Liam", "Emma", "Noah", "Olivia", "Ava", "Elijah", "Charlotte", "Sophia",
      "James", "Amelia", "Benjamin", "Mia", "Lucas", "Harper", "Mason", "Evelyn",
      "Ethan", "Abigail", "Logan", "Ella", "Alexander", "Scarlett", "Jackson",
      "Grace", "Aiden", "Victoria", "Sebastian", "Aria", "Matthew", "Luna"
    ];

    const lastInitials = [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
      "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];


    return Array.from({ length: number}, () =>
      startSentences[Math.floor(Math.random() * startSentences.length)] +
      adjectives[Math.floor(Math.random() * adjectives.length)] +
      endSentences[Math.floor(Math.random() * endSentences.length)] + ' -' +
      firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' +
      lastInitials[Math.floor(Math.random() * lastInitials.length)] + '.'
    );
  }

  useEffect(() => {
    setTestimonials(createTestimonials(5))
  }, [])

  return <div>
    <h1 className="font-semibold text-xl text-center">Reviews</h1>
      <ul className="mb-6 divide-y border-t-2">
        {testimonials.map((testimonial, index) => (
        <li key={index} className=" py-6">
          {testimonial}
        </li>
        ))}
      </ul>
    </div>
}

export default Testimonials
