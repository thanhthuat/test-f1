import Image from 'next/image';
import React from 'react'

import imgMap from 'public/image/company/location_map.png'
import { motion } from 'framer-motion';


const CompanyLocation = () => {
  return (
    <section className="prefixlocation">
      <div className="prefixlocation-content wapper">
        <div className="prefixlocation-title">
          <h3> way to come</h3>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="prefixlocation-map"
        >
            <Image className="prefixlocation-map__img" src={imgMap} alt="location" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
         className="prefixlocation-vehicle"
        >
         
          <div className="prefixlocation-vehicle-item">
            <div className="prefixlocation-vehicle-item__title">
              <h3>Access by subway</h3>
            </div>
            <div className="prefixlocation-vehicle-item__body">
              <ul>
                <li>
                  <span className="prefixlocation-vehicle-item__line line1"> Line 1</span>{" "}
                  <span> City Hall Station Exit 3</span>{" "}
                </li>
                <li>
                  <span className="prefixlocation-vehicle-item__line line2">Line 2</span>{" "}
                  <span> City Hall Station Exit 12</span>{" "}
                </li>
                <li>
                  <span className="prefixlocation-vehicle-item__line line3">Line 5</span>{" "}
                  <span> Gwanghwamun Station Exit 6</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="prefixlocation-vehicle-bus">
            <div className="prefixlocation-vehicle-bus__title">
              <h3>Access by bus</h3>
            </div>
            <div className="prefixlocation-vehicle-bus__body">
              <div>
                <h4>Get off at Sejong Center for the Performing Arts</h4>
                <p>
                  Seats: 1055-5, 5500, 5500-1, 5500-2, 9001 <br /> Main lines: 103, 109, 150, 401,
                  402, 406, 704 <br /> Branch lines: 1711, 4012, 7016, 7018, 7022, 7023
                  <br />
                  Broadband: 9300, 9401, 9600, 9602, 9706, 9708, 9710, 9713, 9301
                </p>
              </div>
              <div>
                <h4>Get off at Gwanghwamun Intersection</h4>
                <p>
                  Seats: 1000, 1000-1, 1200, 5000, 1002, 631 <br /> Main lines: 161, 260, 270, 271,
                  273, 370, 470, 471, 600, 602, 702, 720, 721 <br />
                  Branch line: 7019 <br /> Broadband: 9701, 9702, 9301, 9600, 9704, 9706, 9708,
                  9709, 9713
                </p>
              </div>
            </div>
          
        </div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default CompanyLocation;