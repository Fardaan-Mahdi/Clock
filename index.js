const secHand = document.querySelector("#secondHand");
const hrHand=document.querySelector("#hourHand");
const minHand=document.querySelector("#minuteHand");
setInterval(() => {
  var date = new Date();
  var hr = date.getHours();
  if(hr>=12){
    hr=hr%12;
  }
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var hrDegree=hr*30+min/2;
  var minDegree=6*min;
  var secDegree=6*sec;

  hrHand.style.transform=`rotate(${hrDegree}deg)`;
  minHand.style.transform=`rotate(${minDegree}deg)`;
  secHand.style.transform=`rotate(${secDegree}deg)`;

}, 1000);

//   console.log(hr);
//   console.log(min);
//   console.log(hrDegree);

