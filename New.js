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

  for (let i = 0; i < data.length; i++) {
      let splited_input = input[i].nik.split('')
      let s_input = []
      for (let j = 0; j < splited_input.length; j++) {
          if (j >= 6 && j <=11) {
              s_input+=splited_input[j]
          }
      }
      let splited_sinput = s_input.split('')
      if(splited_sinput[4]==0){
        splited_sinput.splice(4,0,'20')
      }else{
          splited_sinput.splice(4,0,'19')
      }
      let result = []
      for (let k = 0; k < splited_sinput.length; k++) {
          const element = array[k];
          
      }
      
  }