
const task1EL = document.querySelectorAll(".sample_class");
function getTag(elements) {
    const tags = [];
    elements.forEach(el => {
        tags.push(el.tagName)
    })
    return tags;
}
console.log(getTag(task1EL))


const task2EL = document.getElementById("sample_id");
function getClass(element) {
    const classes = [];
    element.classList.forEach(cls => {
        classes.push(cls)
    });
    return classes;
}
console.log("zadani 2 ==    ", getClass(task2EL));


const task3EL = document.querySelectorAll(".sample_class_2");
function getInnerText(elements) {
    const texts = [];
    elements.forEach(el => {
        texts.push(el.innerText);
    })
    return texts;
}
console.log("zadani 3 ==    ", getInnerText(task3EL));


const task4EL = document.querySelectorAll("a");
function getAddress(elements) {
    const addresses = [];
    elements.forEach(el => {
        if(el.hasAttribute("href")) {
            addresses.push(el.getAttribute("href"));
        }
    })
    return addresses;
}
console.log("zadani 4 ==    ", getAddress(task4EL));

// const task5EL = document.querySelector(".sample_class_3").children;
const task5EL = document.querySelector(".sample_class_3").childNodes;
const task5RES = getTag(task5EL);
console.log("zadani 5 ==    ", task5RES);






















