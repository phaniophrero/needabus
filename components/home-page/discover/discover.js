import React from "react";
import Image from "next/image";
import classes from "./discover.module.scss";
import discoverMap from "../../../assets/images/home-page/discover/discoverMap@3x.png";

const Discover = () => {
  return (
    <section className={classes.discover}>
      <div className={classes["action-box"]}>
        <div className={classes["image-wrapper"]}>
          <Image
            src={discoverMap}
            layout='fill'
            alt="img"
            objectFit="cover"
          />
        </div>
        <div className={classes.text}>
          <h1>Descopera toate destinatiile</h1>
          <p>Alege din peste 2500 destinatii de calatorie in 36 de tari</p>
          <h4>Exploreaza harta {">"}</h4>
        </div>
      </div>

      <div className={classes.presentation}>
        <p>
          Descoperă Europa cu autocarele noastre verzi. Îți punem la dispoziție
          o rețea cu peste <span> 400.000 de curse zilnice și peste 2500 </span>{" "}
          de destinații din 35 de țări europene. Cu noi, poți cutreiera Europa
          în lung și-n lat!
        </p>

        <p>
          Ți-ai propus să îți iei rucsacul în spate și să pleci în excursie prin
          Europa? Te-ai decis în ultimul moment să iei o pauză de la rutina de
          zi cu zi? Vrei să îți vizitezi prietenii sau familia? Nicio problemă!
          Te ducem la destinație la un preț imbatabil. Avem curse către:{" "}
          <span>
            {" "}
            Franța, Țările de Jos, Elveția, Germania, Italia, Cehia, Ungaria,
            Croația, plus Suedia, Danemarca, Luxemburg, Slovenia și Austria.{" "}
          </span>{" "}
          NeedaBus te duce oricând la destinația dorită!
        </p>

        <p>
          Grație șoferilor noștri prietenoși și informațiilor în timp real
          despre stațiile de autocar și orare, poți să te relaxezi și să te
          bucuri de drum. Tot ce trebuie să faci e să îți planifici călătoria și
          să urci în autocar.
        </p>

        <h1>Serviciul NeedaBus</h1>

        <p>
          Vrem să îți oferim un serviciu de înaltă calitate, ieftin și simplu de
          utilizat. Dacă ai vreo nelămurire în timp ce îți planifici călătoria,
          consultă secțiunea <span>Întrebări frecvente</span> sau sună-ne.
          Echipa noastră de relații cu clienții îți stă mereu la dispoziție
          pentru a-ți rezolva problemele și a-ți răspunde la întrebări!
        </p>

        <p>
          <span>Poți cumpăra biletele noastre low cost</span> online, prin
          <span>aplicația pentru mobil</span>, dar și direct de la șoferul
          autocarului. Biletul îți garantează un loc confortabil la bord.
          Autocarele sunt dotate cu Wi-Fi gratuit și prize, iar în unele
          autocare poți cumpăra gustări și băuturi răcoritoare de la șoferii
          noștri prietenoși. Pe durata călătoriei ești mereu conectat(ă): poți
          naviga pe internet sau te poți uita la filme.
        </p>

        <p>
          Economisește cu NeedaBus! Cu biletele noastre de autocar incredibil de
          ieftine, rămâi cu bani în buzunar, iar orarele precise ale autocarelor
          și punctualitatea noastră te ajută să economisești și timp! În plus,
          ajuți și mediul: autocarul este cel mai ecologic mijloc de transport.
          Indiferent dacă iei un NeedaBus spre{" "}
          <span>Berlin, Praga, Milano, Paris</span> sau <span>Viena</span>, vei
          călători mereu verde!
        </p>

        <p>
          Abonează-te la newsletterul nostru și la{" "}
          <span>pagina noastră de Facebook</span> și vei primi oferte exclusive,
          informații despre concursuri, dar și ultimele știri. Te ținem la
          curent cu toate noutățile despre <span>NeedaBus</span>.
        </p>
      </div>
    </section>
  );
};

export default Discover;
