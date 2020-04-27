// header
// - h1
// - nav
//   - a
//   - a
const container = document.getElementById("container");
document.body.style.fontFamily = "sans-serif";
const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#65a6f3";
header.style.width = "90%";
header.style.display = "flex";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);
const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "20px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);
container.appendChild(header);

const intro = document.createElement("div");
intro.style.color = "#555";
intro.style.backgroundColor = "#ccc";
intro.style.width = "85%";
intro.style.marginLeft = "6%";
intro.style.padding = "20x";
document.body.appendChild(intro);

const introHeading = document.createElement('h2');
introHeading.style.marginTop = "3%";
introHeading.textContent = "Curse of the Current Reviews";
intro.appendChild(introHeading);

const introParagraph = document.createElement("p");
introParagraph.style.marginBottom = "0";
introParagraph.textContent = "When you want to buy any application from the Apple iTunes store you have\
 more choices than you can handle, Most of the users scroll past the application description, completely \
 avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three \
 important factors: price, screenshot, and reviews.";
intro.appendChild(introParagraph);

const bodyText1 = document.createElement("div");
bodyText1.style.width = "85%";
bodyText1.style.height = "20%";
bodyText1.style.marginLeft = "6%";
document.body.appendChild(bodyText1);

const bodyHeading1 = document.createElement("h3");
bodyHeading1.style.color = "#65a6f3";
bodyHeading1.marginTop = "0";
bodyHeading1.textContent = "Hello WatchKit";
bodyText1.appendChild(bodyHeading1);

const bodyPara1 = document.createElement("p");
bodyPara1.style.marginBottom = "0";
bodyPara1.style.color = "#555";
bodyPara1.textContent = "Last month, Apple released the anticipated WatchKit Framework for developers in \
the for of i)S 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch \
applications. In this article. we are going to focus on the basics of getting started with the watchKit \
framework and developing apps for the Apple Watch."
bodyText1.appendChild(bodyPara1);

const comments = document.createElement("div");
comments.style.backgroundColor = "#e68927";
comments.style.color = "white";
comments.style.fontWeight = "bold";
comments.textContent = "12 comments     124 likes";
bodyText1.appendChild(comments);

const bodyText2 = document.createElement("div");
bodyText2.style.width = "85%";
bodyText2.style.height = "20%";
bodyText2.style.marginLeft = "6%";
document.body.appendChild(bodyText2);


const bodyHeading2 = document.createElement("h3");
bodyHeading2.style.color = "#65a6f3";
bodyHeading2.marginTop = "0";
bodyHeading2.textContent = "Introduction to Swift";
bodyText2.appendChild(bodyHeading2);


const bodyPara2 = document.createElement("p");
bodyPara2.style.marginBottom = "0";
bodyPara2.style.color = "#555";
bodyPara2.textContent = "Last month, Apple released the anticipated WatchKit Framework for developers in \
the for of i)S 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch \
applications. In this article. we are going to focus on the basics of getting started with the watchKit \
framework and developing apps for the Apple Watch."
bodyText2.appendChild(bodyPara2);

const comments2 = document.createElement("div");
comments2.style.backgroundColor = "#e68927";
comments2.style.color = "white";
comments2.style.fontWeight = "bold";
comments2.textContent = "12 comments     124 likes";
bodyText2.appendChild(comments2);