const btn = document.querySelector('button');

console.log(btn.outerHTML);
console.log(btn.innerHTML);

btn.innerHTML = '<li>123</li>';

console.log(btn.innerText);
console.log(btn.textContent);
