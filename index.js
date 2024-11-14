const froyoPrompt = "Welcome to Fullstack Froyo! Enter your order by writing a list of froyo flavors. Make sure to separate the flavors with commas.";
let froyoOrder = prompt(froyoPrompt).split(",");

//console.log(froyoOrder);

if (froyoOrder.every(flavor => flavor === "")) {
    alert("No order was entered.")
} else {
alert("Look at the console.");

const froyoCount = {};

// froyoOrder.forEach(flavor => {
//     flavor = flavor.trim();
//     froyoCount[flavor] = (froyoCount[flavor] || 0) + 1;
// });

// froyoOrder.forEach(flavor => {
//     flavor = flavor.trim();
//     if (froyoCount.hasOwnProperty(flavor)) {
//         froyoCount[flavor] += 1;
//     } else {
//         froyoCount[flavor] = 1;
//     }
// })

for (const flavor of froyoOrder) {
    const trimmedFlavor = flavor.trim();
    
    if (trimmedFlavor in froyoCount) {
        froyoCount[trimmedFlavor] += 1;
    } else {
        froyoCount[trimmedFlavor] = 1;
    }
}

//console.log(froyoCount);

console.table(froyoCount);
}