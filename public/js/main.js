
const cityName=document.getElementById('cityName')
const submitBtn=document.getElementById('submitBtn')
const city_Name=document.getElementById('city_name')
const temp=document.getElementById('temp')
const temp_status=document.getElementById('temp_status')
const getInfo=async(event)=>{
   event.preventDefault();
   let cityVal=cityName.value;
   if(cityVal==="")
   {
      city_Name.innerText="Plz write the nmae before you search"

   }
   else
   {


    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=13a8e9c7c8f8f8a9e259f28351b247e1`
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;


    }catch{
        city_Name.innerText="Plz write the nmae before you search"        
    }

   }





}
submitBtn.addEventListener('click',getInfo)