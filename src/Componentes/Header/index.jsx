function Header({ title, menuItems }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link}>{menuItem.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
