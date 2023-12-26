
const Navbar = ({ filterItems, menuList }) => {
  // const numb = (Math.random())

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {
            menuList.map((curEle) => {
              return (
                <button className="btn-group__item" key={filterItems.id} onClick={()=>filterItems(curEle)}>{curEle}</button>
              )
            })
          }
          {/* <button className="btn-group__item" onClick={()=>filterItems('breakfast')}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filterItems('lunch')}>Launch</button>
          <button className="btn-group__item" onClick={()=>filterItems('evening')}>Evening</button>
          <button className="btn-group__item" onClick={()=>filterItems('dinner')}>Dinner</button> */}
          {/* <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar