function Header(inText) {
  const elH1 = document.querySelector('h1');
  // elH1.textContent = inText;
  elH1.innerHTML = inText;
  elH1.id = 'title';
  // elH1.className = 'red';
  return elH1;
}

export default Header;
