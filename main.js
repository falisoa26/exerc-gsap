import gsap from "gsap";
import './style.css';
const text = "HELLO WORLD";
const textArray = text.split('');
const nav = document.querySelector('.navbar')
for (let index = 0; index < textArray.length; index++) {
  const span = document.createElement('span');
  span.textContent = textArray[index];
  nav.appendChild(span);
}
gsap.from('span', {
  opacity: 0,
  duration: 3,
  stagger: 0.2,
})
