import './style.css'
import Menu from './MenuApi.jsx'
import { useState } from 'react'
import MenuCart from './MenuCart.jsx'
import Navbar from './Navbar.jsx'

const uniqueList = [...new Set(Menu.map((cI) => {
  return (cI.category)
})),'All']
// console.log(uniqueList)


const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList,setMenuList]=useState(uniqueList)
  const filterItems = (category) => {
    if (category === "All") {
      setMenuData(Menu)
      return
    }
    const filterList = Menu.filter((curElement) => {
      return curElement.category === category;
    })
    setMenuData(filterList);
  }
  // console.log(menuData)
  return (
    <>
      <Navbar filterItems={filterItems} menuList={ menuList} />
      <MenuCart menuDataParents={menuData} />
    </>
  )
}

export default Resturants

