// let userLoggedIn = false;

// if (!userLoggedIn) {
//     console.log("Connecte toi");
// } else {
//     console.log("Bienvenue");
// }
// let age = 30;

// if (age >= 0 && age <= 6) { // && pour la connection "et" || pour "ou"
//     console.log("Enfant");
// } else if (age >= 7 && age <= 17) {
//     console.log("Adolescent");
// } else if (age >= 18 && age <= 25) {
//     console.log("Jeune");
// } else {
//     console.log("Adulte");
// }

let compte = "vvip";

switch (compte) {
    case "premium 1":
    case "premium":
        console.log(" vous avez un compte premium");
        break;
    case "vip":
        console.log(" vous avez un compte vip");
        break;
    case "vvip":
        console.log(" vous avez un compte vvip");
        break;
    default:
        console.log(" vous avez un compte normal");
}