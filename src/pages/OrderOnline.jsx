import React from 'react'
import {
  faWindowRestore,
  faWandMagicSparkles
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Add icons to the library
library.add(faWindowRestore, faWandMagicSparkles)

function OrderOnline () {
  return (
    <div className='orderOnline'>
      <div className='py-10 catagoryRow'>
        <div className='flex justify-center'>
          <div className='catagoryItem'>
            <div className='catagoryName'>Briyani</div>
          </div>
          <div className='catagoryItem'>
            <div className='catagoryName'>Briyani</div>
          </div>
          <div className='catagoryItem'>
            <div className='catagoryName'>Briyani</div>
          </div>
          <div className='catagoryItem'>
            <div className='catagoryName'>Briyani</div>
          </div>
          <div className='catagoryItem'>
            <div className='catagoryName'>Briyani</div>
          </div>
        </div>
      </div>
      <div className='dishList'>
        <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className='foodItem'>
            <div className='grid grid-cols-9'>
              <div className="col-span-3 bg-[url('./catagory-img1.png')] bg-cover bg-center bg-origin-border"></div>
              <div className='col-span-6 px-3 py-2'>
                <div className='dishTittle'>Paneer Butter Masala</div>
                <div className='grid grid-cols-2 py-4'>
                  <div>
                    <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                      <div className='text-center text-md align-middle'>-</div>
                      <div className='bg-slate-800 px-1 text-center text-md align-middle'>
                        1
                      </div>
                      <div className='text-center text-md align-middle'>+</div>
                    </div>
                  </div>
                  <div className='text-right'>$5.00</div>
                </div>
                <div className='grid grid-cols-10'>
                  <div className='col-span-6 text-xs'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Customize
                    Order
                  </div>
                  <div className='text-right col-span-4 text-xs'>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='foodItem'>
            <div className='grid grid-cols-9'>
              <div className="col-span-3 bg-[url('./catagory-img1.png')] bg-cover bg-center bg-origin-border"></div>
              <div className='col-span-6 px-3 py-2'>
                <div className='dishTittle'>Paneer Butter Masala</div>
                <div className='grid grid-cols-2 py-4'>
                  <div>
                    <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                      <div className='text-center text-md align-middle'>-</div>
                      <div className='bg-slate-800 px-1 text-center text-md align-middle'>
                        1
                      </div>
                      <div className='text-center text-md align-middle'>+</div>
                    </div>
                  </div>
                  <div className='text-right'>$5.00</div>
                </div>
                <div className='grid grid-cols-10'>
                  <div className='col-span-6 text-xs'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Customize
                    Order
                  </div>
                  <div className='text-right col-span-4 text-xs'>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='foodItem'>
            <div className='grid grid-cols-9'>
              <div className="col-span-3 bg-[url('./catagory-img1.png')] bg-cover bg-center bg-origin-border"></div>
              <div className='col-span-6 px-3 py-2'>
                <div className='dishTittle'>Paneer Butter Masala</div>
                <div className='grid grid-cols-2 py-4'>
                  <div>
                    <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                      <div className='text-center text-md align-middle'>-</div>
                      <div className='bg-slate-800 px-1 text-center text-md align-middle'>
                        1
                      </div>
                      <div className='text-center text-md align-middle'>+</div>
                    </div>
                  </div>
                  <div className='text-right'>$5.00</div>
                </div>
                <div className='grid grid-cols-10'>
                  <div className='col-span-6 text-xs'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Customize
                    Order
                  </div>
                  <div className='text-right col-span-4 text-xs'>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='foodItem'>
            <div className='grid grid-cols-9'>
              <div className="col-span-3 bg-[url('./catagory-img1.png')] bg-cover bg-center bg-origin-border"></div>
              <div className='col-span-6 px-3 py-2'>
                <div className='dishTittle'>Paneer Butter Masala</div>
                <div className='grid grid-cols-2 py-4'>
                  <div>
                    <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                      <div className='text-center text-md align-middle'>-</div>
                      <div className='bg-slate-800 px-1 text-center text-md align-middle'>
                        1
                      </div>
                      <div className='text-center text-md align-middle'>+</div>
                    </div>
                  </div>
                  <div className='text-right'>$5.00</div>
                </div>
                <div className='grid grid-cols-10'>
                  <div className='col-span-6 text-xs'>
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> Customize
                    Order
                  </div>
                  <div className='text-right col-span-4 text-xs'>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='popup'>
        <div className="crossIcon">X</div>
        <div className='foodItem'>
          <div className='grid grid-cols-9'>
            <div className="col-span-3 bg-[url('./catagory-img1.png')] bg-cover bg-center bg-origin-border"></div>
            <div className='col-span-6 px-3 py-2'>
              <div className='text-2xl dishTittle'>Paneer Butter Masala</div>
              <div className='grid grid-cols-4 pt-4'>
                <div className='text-xs'>Quantity</div>
                <div className='col-span-1'>
                  <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                    <div className='py-0 text-center text-md align-middle'>
                      -
                    </div>
                    <div className='bg-slate-800 px-1 text-center text-md align-middle'>
                      1
                    </div>
                    <div className='text-center text-md align-middle'>+</div>
                  </div>
                </div>
                <div className='flex justify-end col-span-2 selection:text-xs'>
                  <div className='text-center'>$5.00</div>
                </div>
              </div>

              <div className='grid grid-cols-4 py-4'>
                <div  className='text-xs'>Size</div>
                <div className='col-span-2'>
                  <div className='grid grid-cols-3 bg-black mx-1 rounded-md text-center align-middle'>
                    <div className='py-1 text-center text-sm align-middle'>
                      Normal
                    </div>
                    <div className='bg-slate-800 px-1 py-1 text-center text-sm align-middle'>
                      Small
                    </div>
                    <div className='py-1 text-center text-sm align-middle'>
                      Large
                    </div>
                  </div>
                </div>
              </div>

              <div className='topinslist flex flex-row'>
                <div>Cheese</div>
                <div>Tomato</div>
                <div>Egg</div>
                <div>Double Egg</div>
              </div>

              <div className='items-center grid grid-cols-10 pt-6 pb-2 ff'>
                <div className='col-span-6 text-xs'>
                  <textarea className='p-2 border rounded-md w-full cookingRequest'></textarea>
                </div>
                <div className='flex justify-end col-span-4 text-xs'>
                  <div className='text-center addtocart'>
                    Add to cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderOnline
