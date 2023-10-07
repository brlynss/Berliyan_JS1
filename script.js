// if statement
var hp = true;
if(hp){
    console.log("HP menyala")
}


// if else statement
var kalimat = "Selamat datang di Semarang"
if (kalimat !== "") {
    console.log("String tidak kosong")
} else {
    console.log("String kosong")
}


// nested if
var nilaiTAS = 90;

if (nilaiTAS >= 85) {
    console.log("Kamu mendapatkan nilai A")    
} else if(nilaiTAS >= 75) {
    console.log("Kamu mendapatkan nilai B")
} else if(nilaiTAS >= 50){
    console.log("Kamu mendapatkan nilai C")
} else{
    console.log("Kamu tidak LULUS")
}


// switch case
var hari = 2;

switch(hari){
    case 1:
        console.log("Hari ini hari senin");
        break;
    case 2:
        console.log("Hari ini hari selasa");
        break;
    case 3:
        console.log("Hari ini hari rabu")
        break;
    default:
        console.log("Pilihan tidak tersedia")
}


// for statement
for (let i = 0; i < 10; i++) {
    console.log(`Perulangan ke: ${i}, menggunakan for`)
    
}

var Motor = ["NMax" , "Vario", "Beat", "KLX"];

for (let index = 0; index < Motor.length; index++) {
    console.log(Motor[index]);
    
}


// while
var Mobil = ["BMW", "Civic", "Agya", "Ayla"]
var i = 0;

while(i < Mobil.length){
    console.log("Mobil ke-" + (i + 1) + ": " + Mobil[i]);
    i++;
}


// do while
var Mobil = ["BMW", "Civic", "Agya", "Ayla"]
var i = 0;

do {
    console.log("Mobil ke-" + (i + 1) + ": " + Mobil[i]);
    i++;
} while (i < Mobil.length);


// function
function sapaan(){
    console.log("Halo, Selamat pagi!!")
}

sapaan();

// function sapaan(fristName, lastName){
//     console.log(`Hallo ${fristName} ${lastName}`);
// }

// sapaan("Herlina", "Maulinda");