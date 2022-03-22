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

for (let i = 0; i < data.length; i++) {
  let nik = data[i].nik;

  // convert type to string
  var string = nik.toString();

  var ubah = string.split("");

  let newNik = ubah.map(String);

  // for (let i = 0; i < newNik.length; i++) {

  //     if (i == 6 && newNik[10] == 0) {
  //         console.log(nama);
  //         console.log(newNik[6]+newNik[7]+"-"+newNik[8]+newNik[9]+"-20"+newNik[10]+newNik[11]+"\n");
  //     }
  //     if (i == 6 && newNik[10] != 0) {
  //         console.log(nama);
  //         console.log(newNik[6]+newNik[7]+"-"+newNik[8]+newNik[9]+"-19"+newNik[10]+newNik[11]+"\n");
  //     }
  // }
  // }
  for (let j = 0; j < newNik.length; j++) {
    if (j == 6) {
      // newNik.splice(0,5)
      // newNik.splice(-4)
    //   newNik.join(``);
      tgl.push(
          newNik[6],
          newNik[7]
      );
    }
    if (i == 8) {
      // newNik.splice(0,5)
      // newNik.splice(-4)
      newNik.join(``);
      bln.push(newNik);
    }
    if (i == 10) {
      // newNik.splice(0,5)
      // newNik.splice(-4)
      newNik.join(``);
      thn.push(newNik);
    }
  }
}

for (let d = 0; d < data.length; d++) {
    let nama = data[d].name

    
}
console.log(tgl);
console.log(bln);
console.log(thn);
