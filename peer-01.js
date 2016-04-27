var value = 42;

if (value >= 53){
  value+=42;
} else {
  value -=13;
}
var string01 = "11";
value = value + string01;

var array = [];

for (var i = 0; i < value.length; i++)
{
  array.push(value.charAt(i))
}
array.pop();
array.shift();

var puppies ="";
for (i=1; i >=0; i--){
  puppies +=array[i];
}
value=parseInt(value);
puppies = parseInt(puppies);

value += puppies;
if (value < 60){
  value = 14;
}else if(value === 2930){

  value = 27;
}else{
  value = 2;
}

i = 10;
  while(i > 0){
    value++;
    i--;
  }
  function stringChange(val){
    val = val.toString();
    if(val.length > 1){

      val = val.substring(1);
    }
return val;
  }
  value = stringChange(value);
  console.log(value);
