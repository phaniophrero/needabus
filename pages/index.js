import React from "react";
import Table from "../components/home-page/table/table";
import classes from "./index.module.scss";
import cars from "../assets/images/home-page/hero/cars@3x.jpeg";
import Image from "next/image";
import UserActions from "../components/home-page/user-actions/user-actions";
import Infos from "../components/home-page/infos/infos";
import Discover from "../components/home-page/discover/discover";
import ClientBenefits from "../components/home-page/client-benefits/client-benefits";
import Newsletter from "../components/home-page/newsletter/newsletter";

const HomePage = () => {
  return (
    <>
      <div className={classes["hero-image-wrapper"]}>
        <Image src={cars} layout="fill" alt="img" objectFit="cover" />
      </div>

      <main className={classes["home-page"]}>
        <Table />
        <UserActions />
        <Infos />
        <Discover />
        <ClientBenefits />
        <Newsletter />
      </main>
    </>
  );
};

export default HomePage;
