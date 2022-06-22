import styles from './index.module.scss';

type Props = {
    value: string
};

export const ResultArea = ({value}: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>Result area</div>
      <div className={styles.value}>{value === 'Выберите из страну' ? null : value}</div>
    </div>
  );
};
