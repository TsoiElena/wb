import { Select, ResultArea, Footer } from 'src/components';
import { COUNTRIES } from 'src/data';
import styles from './index.module.scss';
import {useState} from "react";

export const App = () => {
    const [value, setValue] = useState('Выберите страну')
    console.log({ COUNTRIES });

  return (
    <div className={styles.root}>
      <ResultArea value={value} />
      <Select countries={COUNTRIES} value={value} setValue={setValue}/>
      <Footer />
    </div>
  );
};
