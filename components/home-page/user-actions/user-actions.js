import React from "react";
import classes from "./user-actions.module.scss";
import Image from 'next/image';
import ticket from '../../../assets/images/home-page/user-actions/ticket.svg';
import clock from '../../../assets/images/home-page/user-actions/clock.svg';
import help from '../../../assets/images/home-page/user-actions/help.svg';

const UserActions = () => {
  return (
    <section className={classes['user-actions']}>
      <div className={classes.button}>
        <Image src={ticket} width={36} height={36} alt='img' />
        <p>Gestionarea comenzilor mele</p>
      </div>

      <div className={classes.button}>
        <Image src={clock} width={36} height={36} alt='img' />
        <p>Urmarirea calatoriilor</p>
      </div>

      <div className={classes.button}>
        <Image src={help} width={36} height={36} alt='img' />
        <p>Ajutor</p>
      </div>
    </section>
  );
};

export default UserActions;
