import React from "react";
import classes from "./newsletter.module.scss";
import Image from "next/image";
import newsletter from "../../../assets/images/home-page/newsletter/newsletter@3x.png";
import send from "../../../assets/images/home-page/newsletter/send.svg";

const Newsletter = () => {
  return (
    <section className={classes.newsletter}>
      <div className={classes["image-wrapper"]}>
        <Image src={newsletter} layout="fill" alt="img" />
      </div>

      <div className={classes.content}>
        <h1>Trimite-ne un email</h1>
        <p>
          Pentru a primi cele mai noi stiri si sa te tinem la curent cu toate
          strile noastre.
        </p>

        <div className={classes.input}>
            <p>Send email</p>
            <Image src={send} width={30} height={16} alt='img' />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
