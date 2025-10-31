function countParagraphs() {
    const paragraphs = document.getElementsByTagName("p");
    document.getElementById("result1").innerHTML =
    `There are ${paragraphs.length} paragraph tags on this page.`;
}

function countInsideFirst() {
    const container1 = document.getElementById("greetings");
    const elements = container1.getElementsByTagName("*");
    document.getElementById("result2").innerHTML =
    `There are ${elements.length} languages inside the greetings section.`;
}

function countInsideSecond() {
    const container2 = document.getElementById("farewell");
    const elements = container2.getElementsByTagName("*");
    document.getElementById("result3").innerHTML =
    `There are ${elements.length} languages inside the farewell section.`;
}