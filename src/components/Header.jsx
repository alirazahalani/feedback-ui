function Header({ title, bgColor, fColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: fColor,
  }
  return (
    <>
      <header style={headerStyle}>
        <h2>{title}</h2>
      </header>
    </>
  )
}

export default Header
