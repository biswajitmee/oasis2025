import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import {
  faWindowRestore,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add icons to the library
library.add(faWindowRestore, faWandMagicSparkles);

// Sample data for categories and dishes
const categories = [
  { id: 1, name: 'Biryani' },
  { id: 2, name: 'Curry' },
  { id: 3, name: 'Snacks' }
];

const dishes = [
  {
    id: 1,
    name: 'Paneer Butter Masala',
    price: 5.0,
    img: '/catagory-img1.png'
  },
  { id: 2, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 3, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 4, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 5, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 6, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 7, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 8, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 9, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 10, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 11, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 12, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 13, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 14, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 15, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 16, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 17, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 18, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 19, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 20, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 21, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 22, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 23, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 24, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 25, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 26, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 27, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 28, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 29, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },

  { id: 30, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 31, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 32, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 33, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 34, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 35, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 36, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
  { id: 37, name: 'Mutton Curry', price: 8.0, img: '/catagory-img1.png' },
  { id: 38, name: 'Chicken Biryani', price: 6.0, img: '/catagory-img1.png' },
  { id: 39, name: 'Veg Biryani', price: 4.5, img: '/catagory-img1.png' },
]

gsap.registerPlugin(ScrollSmoother);

function OrderOnline() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '.dishListWrapper',
      content: '.dishList',
      smooth: 2.5, // Adjust smoothness
      effects: true // Enable animations while scrolling
    });

    return () => {
      smoother.kill(); // Clean up on component unmount
    };
  }, []);

  const openPopup = (dish) => {
    setSelectedDish(dish);
    setPopupVisible(true);
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <div className="orderOnline">
      {/* Categories */}
      <div className="catagoryRow">
        <div className="flex justify-center gap-4">
          {categories.map((category) => (
            <div className="catagoryItem" key={category.id}>
              <div className="catagoryName">{category.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dishes */}
      <div className="relative h-[500px] overflow-hidden dishListWrapper">
        <div className="dishList">
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <div className="foodItem" key={dish.id}>
                <div className="grid grid-cols-9">
                  <div
                    className="col-span-3 bg-cover bg-center bg-origin-border"
                    style={{ backgroundImage: `url(${dish.img})` }}
                  ></div>
                  <div className="col-span-6 px-3 py-2">
                    <div className="dishTittle">{dish.name}</div>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <div className="grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle">
                          <div className="text-center text-md align-middle">-</div>
                          <div className="bg-slate-800 px-1 text-center text-md align-middle">1</div>
                          <div className="text-center text-md align-middle">+</div>
                        </div>
                      </div>
                      <div className="text-right">${dish.price.toFixed(2)}</div>
                    </div>
                    <div className="grid grid-cols-10">
                      <div
                        className="col-span-6 text-xs cursor-pointer"
                        onClick={() => openPopup(dish)}
                      >
                        <FontAwesomeIcon icon={faWandMagicSparkles} /> Customize Order
                      </div>
                      <div className="text-right col-span-4 text-xs">Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && selectedDish && (
        <div className="popupBg">
          <div className="popup">
            <div
              className="top-2 right-2 absolute text-xl cursor-pointer crossIcon"
              onClick={closePopup}
            >
              X
            </div>
            <div className="popup_foodItem">
              <div className="grid grid-cols-9">
                <div
                  className="col-span-3 bg-cover bg-center bg-origin-border"
                  style={{ backgroundImage: `url(${selectedDish.img})` }}
                ></div>
                <div className="col-span-6 px-3 py-2">
                  <div className="text-2xl dishTittle">{selectedDish.name}</div>
                  <div className="grid grid-cols-4 pt-4">
                    <div className="text-xs">Quantity</div>
                    <div className="col-span-1">
                      <div className="grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle">
                        <div className="py-0 text-center text-md align-middle">-</div>
                        <div className="bg-slate-800 px-1 text-center text-md align-middle">1</div>
                        <div className="text-center text-md align-middle">+</div>
                      </div>
                    </div>
                    <div className="flex justify-end col-span-2 selection:text-xs">
                      <div className="text-center">${selectedDish.price.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 py-4">
                    <div className="text-xs">Size</div>
                    <div className="col-span-2">
                      <div className="grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle">
                        <div className="py-1 text-center text-sm align-middle">Normal</div>
                        <div className="bg-slate-800 px-1 py-1 text-center text-sm align-middle">Small</div>
                        <div className="py-1 text-center text-sm align-middle">Large</div>
                      </div>
                    </div>
                  </div>
                  <div className="topinslist flex flex-row">
                    <div>Cheese</div>
                    <div>Tomato</div>
                    <div>Egg</div>
                    <div>Double Egg</div>
                  </div>
                  <div className="items-center grid grid-cols-10 pt-6 pb-2 ff">
                    <div className="col-span-6 text-xs">
                      <textarea className="p-2 border rounded-md w-full cookingRequest"></textarea>
                    </div>
                    <div className="flex justify-end col-span-4 text-xs">
                      <div className="text-center addtocart">Add to cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bottomBar"></div>
    </div>
  );
}

export default OrderOnline;
