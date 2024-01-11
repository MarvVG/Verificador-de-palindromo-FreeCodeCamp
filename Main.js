const hasSpecial = (str) => /[\W_]/g.test(str);
function palindrome(str) {
  let newArr = [];
  let check = 0;
  str = str.toLowerCase().split('');
  str = str.filter((teste) => teste != ' ');
  str = str.filter((teste) => hasSpecial(teste) == false);
  for(let i = str.length;i!=-1;i--){
    newArr.push(str[i]);
  }
  for(let i=0;i<str.length;i++){
    if(str[i] === newArr[i+1]){ //Inserção no Array "newArr" começa da posição 1
    check++;
    }
  }
  if(check == str.length){
    return true;
  }
  else{
    return false;
  }
}
console.log(palindrome("A man, a plan, a canal. Panama")); //Teste
