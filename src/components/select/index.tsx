import styles from './index.module.scss';
import {useEffect, useState} from "react";

type Props = {
    countries: string[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
};

export const Select = ({countries, value, setValue}: Props) => {
    const [search, setSearch] = useState('')
    const [options, setOptions] = useState(countries)
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        setOptions(countries.filter(country => country.includes(search)))
        if (search === null) return setOptions(countries)
    }, [search])
    // @ts-ignore
    const handleChange = (event) => {
        event.preventDefault()
        console.log(event)
        setValue(event.target.innerText)
        setSearch('')
        setOptions(countries)
        setToggle(false)
    }
    return (
        <div className={styles.root}>Implement select component
            <div className="select">
                <div className={toggle ? styles.select_show : ''}>
                    <button type="button" className={styles.select__toggle} onClick={() => {
                        setToggle(!toggle)
                    }}>
                        {value}
                    </button>
                </div>

                <div className={toggle ? styles.select_show : styles.select__dropdown}>
                    <ul className={styles.select__options}>
                        <input className={styles.select__input} type="text" value={search}
                               onChange={(e) => setSearch(e.target.value)}/>
                        {options && options.map((option, index) => {
                            console.log(option.includes(value.split(' ')[0]), option, value)
                            return (
                                <li className={option.includes(value.split(' ')[0]) ? styles.select__option_selected : styles.select__option}
                                    key={index} onClick={(e) => handleChange(e)}> {option}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
