import React from 'react'
import {arrowDown} from "../assets"

const Faq = () => {
  return (
    <><div>
          <button>General Questions</button>
          <button>Program Structure</button>
          <button>Application Process</button>
          <button>Funding & Investment</button>
      </div>
      <div>
              <h3>General Question</h3>
              <div>
                <div>
                    <p>What is Bezi ?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>What resources are provided by Bezi ?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>Who is eligible for the Bezi Fellowship program?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>When is the next Bezi Fellowship program?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>What industries does the fellowship program focus on?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>Are there any specific countries that the fellowship program focuses on?</p>
                    <img src={arrowDown} alt="" />
                </div>
                <div>
                    <p>How can I become a mentor for the program?</p>
                    <img src={arrowDown} alt="" />
                </div>
              </div>



              
          </div></>

  )
}

export default Faq