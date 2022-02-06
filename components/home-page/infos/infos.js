import React from "react";
import classes from "./infos.module.scss";
import Image from "next/image";
import info from "../../../assets/images/home-page/infos/info.svg";
import mask from "../../../assets/images/home-page/infos/mask.svg";
import confort from "../../../assets/images/home-page/infos/confort.svg";
import map from "../../../assets/images/home-page/infos/map.svg";

const Infos = () => {
  return (
    <section className={classes.infos}>
      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={info} width={36} height={36} alt="img" />
        </div>
        <h1 className={classes.title}>Calatoria in perioada COVID-19</h1>
        <p>Toate informațiile despre rețeaua și serviciile noastre.</p>
        <h4>Vezi actualizarile {`>`}</h4>
      </div>

      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={mask} width={30} height={36} alt="img" />
        </div>
        <h1 className={classes.title}>Masurile noastre de siguranta</h1>
        <p>Standarde înalte de igienă și proceduri adaptate.</p>
        <h4>Vezi mai multe informatii {`>`}</h4>
      </div>

      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={confort} width={32} height={36} alt="img" />
        </div>
        <h1 className={classes.title}>Confort la bord</h1>
        <p>
          Autocarele noastre sunt echipate cu scaune mari și confortabile,
          toaletă, Wi-Fi și prize.
        </p>
        <h4>servicii la bord {`>`}</h4>
      </div>

      <div className={classes.box}>
        <div className={classes["image-wrapper"]}>
          <Image src={map} width={39} height={36} alt="img" />
        </div>
        <h1 className={classes.title}>Retea vasta de curse</h1>
        <p>
          Alege din peste 2500 de destinații din 35 de țări și descoperă Europa
          cu NeedaBus.
        </p>
        <h4>In reteaua noastra {`>`}</h4>
      </div>
    </section>
  );
};

export default Infos;
