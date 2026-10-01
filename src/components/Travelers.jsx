/** @format */

// Imported Destination Images =======>
import paris from "../assets/paris.webp";
import london from "../assets/london.webp"
import newyork from "../assets/newyork.webp"
import bangkok from "../assets/bangkok.webp"
// Imported Traveler Images ========>
import traveler1 from "../assets/traveler1.webp";
import traveler2 from "../assets/traveler2.webp";
import traveler3 from "../assets/traveler3.webp";
import traveler4 from "../assets/traveler4.webp";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "User 1",
    socialLink: "@user1@gmail.com",
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: "User 2",
    socialLink: "@user2@gmail.com",
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: "User 3",
    socialLink: "@user3@gmail.com",
  },
  {
    id: 4,
    destinationImage: bangkok,
    travelerImage: traveler4,
    travelerName: "User 4",
    socialLink: "@user4@gmail.com",
  },
];

const Travelers = () => {
  return (
    <div id="Travelers" className='travelers container section'>
      <div className='sectionContainer'>
        <h2>Top travelers of this month</h2>
        <div className='travelersContainer grid'>
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => (
              <div key={id} className='singleTraveler'>
                <img
                  src={destinationImage}
                  alt='Destination'
                  className='destinationImage'
                  loading='lazy'
                  decoding='async'
                />

                <div className='travelerDetails'>
                  <div className='travelerPicture'>
                    <img
                      src={travelerImage}
                      alt='Traveler'
                      className='travelerImage'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                  <div className='travelerName'>
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
