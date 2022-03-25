const provinsi = [
  {
    provinsi: "Jawa Timur",
    kota: ["Malang", "Surabaya", "Kediri", "Jombang", "Jember"],
  },
  {
    provinsi: "Jawa Tengah",
    kota: ["Jogja", "Solo", "Semarang"],
  },
];
const penjualan = [
  {
    kota: "kabupaten kediri",
    penjualan: 245,
  },
  {
    kota: "Jember",
    penjualan: 700,
  },
  {
    kota: "Surabaya",
    penjualan: 900,
  },
  {
    kota: "Kota Jogja",
    penjualan: 543,
  },
  {
    kota: "Semarang",
    penjualan: 670,
  },
];


provinsi.forEach((element, index) => {
  element.penjualan = 0
  element.kota.forEach(kota => {
    penjualan.forEach(elemenPenjualan => {
      if (elemenPenjualan.kota === kota) {
        element.penjualan += elemenPenjualan.penjualan 
      } else {
        let kotaPenjualan = elemenPenjualan.kota.toLowerCase().split(' ')
        if (kotaPenjualan[1] === kota.toLowerCase()) {
          element.penjualan += elemenPenjualan.penjualan
        }
      }
    })
  })
  console.log(element);
  console.log(index);
})


//expected
// [
//   {
//     provinsi:'Jawa Timur',
//     kota:['Malang','Surabaya','Kediri','Jombang','Jember'],
//     penjualan: 1234,
//   },
//   {
//     provinsi:'Jawa Tengah',
//     kota:['Jogja','Solo','Semarang'],
//     penjualan: 1234,
//   }
// ]
