import React, { useState } from 'react'
import styles from './menu.module.css'
import data from './data'


// category component
const Category = ({categories, filterItems}) => {
    return (
    <section className={styles.categorySection}>
        <div className={styles.btnContainer}>
            {categories.map((category, index) =>{
                return <button 
                key={index}
                className={styles.filterBtn}
                onClick={()=> filterItems(category)}
                >{category}</button>
            })}
        </div>
    </section>
    )
}

// menu item component
const MenuData = ({menuItems}) => {
    return (
    <section>
        {menuItems.map((item)=>{
            const {id, title, img, desc, price} = item;
            return (
                <article key={id} className={styles.menuItem}>
                    <div className={styles.itemInfo}>
                        <header>
                            <h4>{title}</h4>
                            <h4 className={styles.Itemprice}>{price}</h4>
                        </header>
                        <p className={styles.itemtext}>{desc}</p>
                    </div>
                </article>
            );
        })}
    </section>
    );
};

// main component
const Menu = () => {
    const allCategories = ['all',...new Set(data.map((item)=> item.category))];
console.log(allCategories); 
    const [menuItems, setMenuItems] = useState(data);
    const [categories, useCategories] = useState(allCategories);
console.log(categories);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item)=>item.category === category);
        setMenuItems(newItems);

    }
    return (
    <div>
        <section className={styles.mainSection}>
            <h1>Menu functionality</h1>
            <Category categories={categories} filterItems={filterItems}/>
            <MenuData menuItems={menuItems}/>
        </section>
    </div>
    )
}

export default Menu