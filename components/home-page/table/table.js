import React from 'react';
import classes from './table.module.scss';
import Image from 'next/image';
import pin from '../../../assets/images/home-page/tabel/pin.svg';
import calendar from '../../../assets/images/home-page/tabel/calendar.svg';

const Table = () => {
  return (
      <section className={classes.table}>
          <div className={classes['choose-type']}>
            <div className={classes.wrapper}>
              <div className={classes.circle}>
                <div className={classes.fill}></div>
              </div>
              <p>Dus</p>
            </div>

            <div className={classes.wrapper}>
              <div className={classes.circle}>
              </div>
              <p>Dus - Intors</p>
            </div>
          </div>

          {/* //! route */}
          <div className={classes.route}>
            <div className={classes.from}>
              <p>Din</p>
              <div className={classes.input}>
                <Image src={pin} width={13} height={20} alt='img' />
                <p>Bucuresti</p>
              </div>
            </div>

            <div className={classes.to}>
              <p>Spre</p>
              <div className={classes.input}>
                <Image src={pin} width={13} height={20} alt='img' />
                <p>Paris</p>
              </div>
            </div>

            <div className={classes.date}>
              <p>Dus</p>
              <div className={classes.input}>
                <Image src={calendar} width={21} height={20} alt='img' />
                <p>Vin, 15 apr.</p>
              </div>
            </div>

            <div className={classes.persons}>
              <p>Pasageri/Biciclete</p>
              <div className={classes.input}>
                <p>1 adult, 0 bicicle...</p>
              </div>
            </div>

            <div className={classes.button}>
              <p>CAUTA</p>
            </div>
          </div>
      </section>
  )
};

export default Table;
