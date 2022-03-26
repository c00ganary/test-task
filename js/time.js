function getDate()
{
  //создание переменных и присваивания значений
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var date1 = date.getDate();
  var month = date.getMonth();
  var monthArr = ["Января", "Февраля","Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября","Декабря"];
  month = monthArr[month];
  var year = date.getFullYear();
  var day = date.getDay()
  var daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  day = daysArr[day]
  if(minutes < 10)
  {
    minutes = '0' + minutes;
  }
  //вывод в элеменст с соответ. айди
  document.getElementById('timedisplay').innerHTML = hours + ':' + minutes;
  document.getElementById('datedisplay').innerHTML = date1 + ' ' + month + ' ' + year;
  document.getElementById('daydisplay').innerHTML = day;
}
setInterval(getDate, 0);
