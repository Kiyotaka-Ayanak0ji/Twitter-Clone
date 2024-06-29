import React, { useEffect, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {

        if(theme == "light"){
            document.documentElement.classList.remove("dark");
        }
        else{
            document.documentElement.classList.remove("light");
        }
        localStorage.setItem('theme', theme);

        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, [theme]);

    const switchTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            {theme === 'light' ? (
                <BiSun className="ml-10 mb-4 text-yellow-500 cursor-pointer" size={40} onClick={switchTheme} />
            ) : (
                <BiMoon className="ml-10 mb-4 text-blue-500 cursor-pointer" size={40} onClick={switchTheme} />
            )}
        </>
    );
};

export default DarkMode;
