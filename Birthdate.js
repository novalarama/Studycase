let data = [
  {
    name: "Erpan Wijaya",
    nik: 2503032303020003,
  },
  {
    name: "Edo Jhon",
    nik: 3568981402980001,
  },
  {
    name: "Andre Hou",
    nik: 2604041212880002,
  },
];

let tgl = [];
let bln = [];
let thn = [];
let hasil = [];

for (let a = 0; a < data.length; a++) {
  let nik = data[a].nik;

// convert type to string
var string = nik.toString();

var ubah = string.split("");

let newNik = ubah.map(String);

for (let j = 0; j < newNik.length; j++) {
  if (j == 6) {
    tgl.push(newNik[6], newNik[7]);
  }
  if (j == 8) {
    bln.push(newNik[8], newNik[9]);
  }
  if (j == 10 && newNik[10] != 0) {
    thn.push("19",newNik[10], newNik[11]);
  }
  if (j == 10 && newNik[10] == 0) {
    thn.push("20",newNik[10], newNik[11]);
  }
}

  
}

let tanggal = tgl.join(``)
let bulan = bln.join(``)
let tahun = thn.join(``)

// for (let i = 0; i < data.length; i++) {
//   hasil.push({
//     Name : data[i].name,
//     NIK : data[i].nik,
//     birthdate : `${tanggal}-${bulan}-${tahun}`
//   })
  
// }
console.log(tanggal);
