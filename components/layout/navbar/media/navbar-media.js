import React from "react";
import classes from "./navbar-media.module.scss";
import { GrClose } from "react-icons/gr";

const dummy_menu = [
  {
    name: 'Planificati-va calatoria >',
  },

  {
    name: 'Servicii >',
  },

  {
    name: 'Informatii de ultima ora',
  },

  {
    name: 'Ajutor',
  }
]

const NavbarMedia = (props) => {
  const { onClose, motion } = props;

  return (
    <motion.div
      className={classes["navbar-media"]}
      initial={{ opacity: 0, transform: `translateX(100%)` }}
      animate={{ opacity: 1, transform: `translateX(0%)` }}
      exit={{ opacity: 0, transform: `translateX(100%)` }}
      transition={{duration: 0.4}}
    >
      <ul className={classes['menu-list']}>
        {dummy_menu.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavbarMedia;
