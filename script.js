//ВВЕДИТЕ ДАННЫЕ ДЛЯ АВТОМАТИЧЕСКОГО ВХОДА И СОХРАНИТЕ КОД
//vvvvvvvvvvvvv

let autologin = ''

//ОСНОВНЫЕ ДАННЫЕ И СТРУКТУРА ПРИЛОЖЕНИЯ

let app = {
  data: {
	v:'',
	d:''
  },
  user: {
	firstName:'',
	secondName:''
  }
}

//--------------------------------------
// ПЕРВЫЙ БЛОК ОТПРАВКА ДАННЫХ НА СЕРВЕР
//--------------------------------------

jsonp = function(){
  this.url = '/';
  this.CallbackRegistry = {};
  
  function scriptRequest(url, onSuccess, onError) {

  var scriptOk = false;

  var callbackName = 'cb' + String(Math.random()).slice(-6);

  url += ~url.indexOf('?') ? '&' : '?';
  url += 'method=jsonp&callback=CallbackRegistry.' + callbackName;

  CallbackRegistry[callbackName] = function(data) {
	scriptOk = true;
	delete CallbackRegistry[callbackName];
	onSuccess(data);
  };

  function checkCallback() {
	if (scriptOk) return;
	delete CallbackRegistry[callbackName];
	onError(url);
  }

  var script = document.createElement('script');

  script.onreadystatechange = function() {
	if (this.readyState == 'complete' || this.readyState == 'loaded') {
	  this.onreadystatechange = null;
	  setTimeout(checkCallback, 0);
	}
  }

  script.onload = script.onerror = checkCallback;
  script.src = url;
  document.body.appendChild(script);
}
  
  return {
	setDefaultUrl: (url)=>{
	  this.url = url
	},
	url: ()=>this.url,
	send: data=>{
	  return new Promise((ok,err)=>{
		scriptRequest(this.url+'/?data='+JSON.stringify(data),ok,err)
	  })
	}
  }
}()

jsonp.setDefaultUrl('http://f0414252.xsph.ru')

//----------------
//ПЕРВЫЙ БЛОК ТЕСТ
//----------------
/*
jsonp
  .send({roman:12})
  .then(r=>{
	alert(r.roman)
  })
  .catch(err=>{
	console.log(err)
  })
*/
//---------------
//ВТОРОЙ БЛОК РЕАКТИВНОСТЬ ДАННЫХ
//---------------

serialize = (obj,name) => {

  let renderer = {
	string(propName,val){
	  let els = document.querySelectorAll('*[data-'+propName+']')
	  for(let el of els){
		el.innerText = val
	  }
	}
  }

  let copy = (obj)=>{
	let tmp = {}
	for(let key in obj){
	  if((typeof obj[key]) === 'object'){
		tmp[key] = copy(obj[key])
	  }else{
		tmp[key] = obj[key]
	  }
	}
	return tmp
  }

  obj._ = copy(obj)
  for(let propName in obj._){
	if((typeof obj._[propName])!=='object'){
	  let prop = {}
  
	  prop[propName] = {
		get:()=>obj._[propName],
		set:(val)=>{
		  renderer
			.string(name+ '-' + propName,val)

		  obj._[propName] = val
		},
		enumerable: true
	  }
	  Object.defineProperties(obj,prop)
	}else{
	  serialize(obj[propName],name+ '-' + propName)
	}
  }
}

//----------------
//ВТОРОЙ БЛОК ТЕСТ
//----------------
/*
var app = {
  name: 'Roma',
  friends: [
	{name:'Alesha'},
	{name:'Petya'}
  ]
}

serialize(app,'app')
window.onload=()=>
app.name='roman'
*/

