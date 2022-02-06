import React from "react";
import Image from "next/image";
import classes from "./footer.module.scss";
import googlePlay from "../../../assets/images/home-page/footer/googlePlay.png";
import appleStore from "../../../assets/images/home-page/footer/appleStore.png";
import fb from "../../../assets/images/home-page/footer/fb.svg";
import ig from "../../../assets/images/home-page/footer/ig.svg";
import tw from "../../../assets/images/home-page/footer/tw.svg";
import wt from "../../../assets/images/home-page/footer/wt.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-wrapper"]}>
        <ul className={classes["footer-list"]}>
          <li>
            <h4>Autocare</h4>
            <p>Toate orasele</p>
            <p>Curse</p>
            <p>Curse nocturne</p>
            <p>Aplicatie pentru mobil</p>
            <p>Romania</p>
          </li>

          <li>
            <h4>Destinatii</h4>
            <p>Descopera</p>
            <p>Cele mai frumoase destinatii de vacanta din Europa</p>
            <p>Germania</p>
            <p>Tolouse</p>
            <p>Calatoreste cu NeedaBus catre trasee superbe de drumetie</p>
            <p>Descopera Golful Biscaya cu autocarul</p>
            <p>Destinatii pentru ski</p>
          </li>

          <li>
            <h4>NeedaBus</h4>
            <p>Despre NeedaBus</p>
            <p>Locuri de munca ( in engleza )</p>
            <p>Presa</p>
            <p>
              Termeni si conditii generale contractuale si conditii de rezervare
            </p>
            <p>Termeni si conditii generale de trasport - Selectare</p>
            <p>Drepturi de autor</p>
            <p>Sustenabilitate</p>
          </li>

          <li>
            <h4>Serviciu clienti</h4>
            <p>Ajutor</p>
            <p>Serviciile noastre pentru tine</p>
            <p>Gestionaza-ti biletele</p>
            <p>Vouchere</p>
            <p>Ia-ti bicicleta cu tine in autocarele Needabus</p>
            <p>Rezervari locuri pe scaun</p>
            <p>Bagaje</p>
          </li>
        </ul>

        <div className={classes.media}>
          <div className={classes["app-box"]}>
            <h4>NeedaBus App:</h4>
            <div className={classes.buttons}>
              <Image src={googlePlay} width={120} height={50} objectFit='cover' alt="img" />
              <Image src={appleStore} width={110} height={34} alt="img" objectFit="contain" />
            </div>
          </div>

          <div className={classes["media-box"]}>
            <h4>NeedaBus pe:</h4>
            <div className={classes.buttons}>
              <Image src={fb} width={13} height={25} alt="img" />
              <Image src={ig} width={25} height={25} alt="img" />
              <Image src={tw} width={25} height={25} alt="img" />
              <Image src={wt} width={25} height={25} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
