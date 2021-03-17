const link: HTMLAnchorElement = document.querySelector("a");
console.log(link);

link.getAttribute("href");
console.log(link.getAttribute("href"));

link.setAttribute("href", "www.dogs.com");
console.log(link.getAttribute("href"));

const img: HTMLImageElement = document.querySelector("img");
console.log(img);
img.setAttribute("src", "corgi.png");
console.log(img.getAttribute("src"));
