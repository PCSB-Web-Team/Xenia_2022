import "./pageBackground.css";
import React from "react";

function PageBackground({ children }) {
  const clicked = document.querySelectorAll('.blob');

  React.useEffect(() => {
    clicked.forEach((click) => {
      click.addEventListener('click', () => {
        click.classList.add('active');
        setTimeout(function () {
          click.classList.remove('active');
        }, 1000);
      })
    })
  })

  return (
    < div >
      <div class="blob blob--one"></div>
      <div class="blob blob--two"></div>
      <div class="blob blob--three"></div>
      {children}
    </div >
  )
}

export default PageBackground;