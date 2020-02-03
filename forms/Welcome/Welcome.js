let names = ["Bob", "Mary", "Sue"];

btnShowMessage.onclick=function(){
  console.log(`My best friend is ${names[0]}`);
  lblMessage.textContent = `Another friend is ${names[2]}.`
  alert(`The second friend is named ${names[1]}.`)
}
