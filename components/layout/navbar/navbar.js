import React, { useState } from "react";
import classes from "./navbar.module.scss";
import Image from "next/image";
import flag from "../../../assets/images/navbar/flag.svg";
import arrowDown from "../../../assets/images/navbar/arrow-down.svg";
import user from "../../../assets/images/navbar/user.svg";
import NavbarMedia from "./media/navbar-media";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [mediaDropdown, setMediaDropdown] = useState(false);
  const mediaDropdownHandler = () =>
    setMediaDropdown((prev) => setMediaDropdown(!prev));

  return (
    <header className={classes.navbar}>
      <section className={classes["navbar-wrapper"]}>
        <div className={classes.logo}>
          <h1>
            NEEDA<span>BUS</span>
          </h1>
        </div>
        {/* //! menu */}
        <ul className={classes.menu}>
          <li>
            <p>Planificati-va calatoria</p>
            <Image src={arrowDown} width={13} height={8} alt="img" />
          </li>
          <li>
            <p>Servicii</p>
            <Image src={arrowDown} width={13} height={8} alt="img" />
          </li>
          <li>Informatii de ultima ora</li>
          <li>Ajutor</li>
        </ul>

        <ul
          className={`${classes["media-menu"]} ${
            mediaDropdown ? classes.active : undefined
          }`}
          onClick={mediaDropdownHandler}
        >
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </ul>

        <AnimatePresence>
          {mediaDropdown && (
            <NavbarMedia onClose={mediaDropdownHandler} motion={motion} />
          )}
        </AnimatePresence>

        <div className={classes.actions}>
          <div className={classes["flag-menu-item"]}>
            <div className={classes["flag-wrapper"]}>
              <Image src={flag} layout="fill" alt="img" />
            </div>

            <p>Romania</p>

            <div className={classes["arrow-down-wrapper"]}>
              <Image src={arrowDown} layout="fill" alt="img" />
            </div>
          </div>

          <div className={classes["user-item"]}>
            <div className={classes["user-wrapper"]}>
              <Image src={user} layout="fill" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
