let el, i, les;
let data = [
 
];


// prueba db en panel 2
let data2 = [
 
];

// fin de prueba en db 
let panel = document.querySelector("#panel");
let panel2 = document.querySelector("#panel2");


function clearForm() {
  document.querySelector("#fname").value = "";
  
  document.querySelector("#respuestaBySelect1").value = 0;
}


function renderItem() {

  panel.textContent = ""  ;
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname}`;
    panel.append(el);
  });
    
}
function renderItem2() {

  panel2.textContent = ""  ;
  data2.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.Respuesta}`;
    panel2.append(el);
  });
}
 

function create() {
    
        let fn = document.querySelector("#fname").value;
        Resadmin = document.getElementById("respuestaBySelect1").value; 
    var count =fn.length;
    
     
    if (count > 0 && Resadmin != 0){ 
 
        data = [...data, { firstname: fn}];
        data2 = [...data2, {  Respuesta: Resadmin }];  
       // console.log(data2.Respuesta);
    


  // 
  clearForm();
  
 // console.log(data)
//console.log(data);
    // ver un dato x
  
  
  renderItem();
   renderItem2(); 
}else
    alert(" Debes ingresar la pregunta y la respuesta para que sea valida")
}


function panelClick() {
  i = panel.selectedIndex;
 // console.log(data[i].Respuesta)
  
  
}
function panelDClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#respuestaBySelect1").value = data2[i].Respuesta;
  console.log(data[i].Respuesta)
  
  
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data2[i].Respuesta = document.querySelector("#respuestaBySelect1").value;
  renderItem();
    renderItem2();
  
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}
renderItem();


// cargar nombre
function cargarNom(){
  var nombUsu = prompt("Indica quien respondera las preguntas");
  var countNUsu = nombUsu.length;
  if(countNUsu > 1){
  document.getElementById("nombreU").innerHTML = "Bienvenido :"+ nombUsu;
}else
document.getElementById("nombreU").innerHTML = "Bienvenido : usuario anonimo";

}


function respuestaUsuV(){
  var respuestaOculta = data2[i].Respuesta;
    
  var RespButton = "Verdadero";
  if(respuestaOculta === RespButton ){
    document.getElementById("demo").innerHTML = 'La respuesta es correcta!!';
     
  }else{
    document.getElementById("demo").innerHTML = 'La Respuesta es incorrecta';
    alert(data2[i].Respuesta)
  }
}
function respuestaUsuF(){
  var respuestaOculta = data2[i].Respuesta;
  var RespButton2 = "Falso";
  if(respuestaOculta === RespButton2 ){
    document.getElementById("demo").innerHTML = 'La respuesta es correcta!!';
  }
  else{
    document.getElementById("demo").innerHTML = 'La Respuesta es incorrecta!!';
    alert(data[i].Respuesta)
  }
  
}


   



 