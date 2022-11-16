function Navbar() {
  const [listName, setListName] = useState('about'); // 초기셋팅

  // 핸들러 함수가 될 것이다.
  const handleChangeId = (e) => {
    setListName(e.target.id)
  }

  return (
    <>
      <nav>
        <ul>
          <li
            id='about'
            // listName의 초기 설정값이 about이면 red로, 그렇지 않으면 black으로
            style={listName === 'about' ? {color: "red"} : {color: "black"}}
            onClick={handleChangeId}>
            About
          </li>
          <li
            id='product'
            style={listName === 'product' ? {color: "red"} : {color: "black"}}
            onClick={handleChangeId}>
            Product
          </li>
          <li
            id='cart'
            style={listName === 'cart' ? {color: "red"} : {color: "black"}}
            onClick={handleChangeId}>
            Cart
          </li>
          <li
            id='contact'
            style={listName === 'contact' ? {color: "red"} : {color: "black"}}
            onClick={handleChangeId}>
            Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName}/>
    </>
  )

}