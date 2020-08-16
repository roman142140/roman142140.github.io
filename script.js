dpr = 3//devicePixelRatio
pi = Math.PI
pi2 = pi*2
pid2 = pi/2

colors = {}

colors.red = 'rgba(255,70,70,0.7)'
colors.blue = 'rgba(127,210,255,0.7)'
colors.cian = 'rgba(0,255,255,1)'
colors.green = 'rgba(50,255,127,0.7)'
colors.orange = 'rgba(255,140,30,0.7)'
colors.gold = 'rgba(255,255,127,0.7)'
colors.purple = 'rgba(255,125,255,0.7)'

all = []
game = {ctrl:{x:0,shot:false},
		camera:{x:0,y:0,d:0},
		weapType: 0,
		boost:false,
		boostR:0,
		mainColor:colors.red,
		mashroom: false,
		hp: 100,
		mp: 100
		}
		
changeWeapon = n=>{
  game.weapType = n
}

t = 0
speed = 1






class Enemy{
  constructor(x,y,d,r){
	this.d = x+Math.random()*pi2
	this.x = y+Math.cos(this.d)*r
	this.y = Math.sin(this.d)*r
	
	this.shape = {
	  type:'triangle',
	  width:20*dpr,
	  height:50*dpr,
	  direction:this.d
	}
  }
  update(){}
  draw(){
	let drawX = this.x - game.camera.x
	let drawY = this.y - game.camera.y
	drawShape(ctx,this.shape,drawX,drawY)
  }
}








class HP{
  constructor(){
	this.max = 400
	this.val = 200
	this.n = 22
	this.p = -100
	
	this.shape = {}
	this.shape.type = 'line'
	this.shape.radius = 40
  }
  update(){
	
  }
  draw(){
	let r = 240
	mx.strokeStyle = game.mainColor
	mx.lineWidth = 10
	mx.globalAlpha = 1
	for(let i = 2; i < this.n; i++){
	  
	  let hp = (((this.p/20-(100/21)*(21-i))/20)*10)
	  
	  mx.globalAlpha = hp<0?0.05:hp+0.05
	
	  let d = pid2/this.n*i
	  this.shape.direction = pid2/this.n*i
	  drawShape(mx,this.shape,0+Math.cos(d)*r,0+Math.sin(d)*r)
	}
  }
}

class MP{
  constructor(){
	this.max = 400
	this.val = 200
	this.n = 22
	this.p = 75
	
	this.shape = {}
	this.shape.type = 'line'
	this.shape.radius = 40
  }
  update(){
	
  }
  draw(){
	let r = 240
	mx.strokeStyle = game.mainColor
	mx.lineWidth = 10
	mx.globalAlpha = 1
	for(let i = 2; i < this.n; i++){
	  
	  let mp = (((100/5-(100/21)*(21-i))/this.p)*10)
	  
	  mx.globalAlpha = mp<0?0.05:mp+0.05
	
	  let d = pi-pid2/this.n*i
	  this.shape.direction = pi-pid2/this.n*i
	  drawShape(mx,this.shape,W+Math.cos(d)*r,0+Math.sin(d)*r)
	}
  }
}

class XP{
  constructor(){
	this.shape = {}
	this.shape.type = 'line'
	this.shape.radius = 100
	this.shape.direction = 0
	this.p = 45
  }
  update(){
	
  }
  draw(){
	let start = W/2-0.89*W/2
	
	this.shape.radius = this.p*W*0.89/100
	mx.strokeStyle = game.mainColor
	mx.lineWidth = 7
	mx.globalAlpha = 1
	drawShape(mx,this.shape,start,10)
  }
}




class Compass{
  constructor(){
	this.n = 360
  }
  update(){}
  draw(){
  let r = H/2-200
  let shape = {}
  shape.type = 'line'
  mx.strokeStyle =
  fx.strokeStyle= game.mainColor
  mx.lineWidth = 1*dpr
  fx.lineWidth = 10*dpr
	for(let i = 0; i < this.n; i++){
	  shape.direction = pid2+pi2/this.n*i
	  shape.radius = i%5?10*dpr:12*dpr
	  shape.radius = i%10?shape.radius:15*dpr
	  
	  mx.globalAlpha = fx.globalAlpha = ((1+Math.sin(-shape.direction))/2)**31
	  drawShape(mx,shape,W/2+r*Math.cos(shape.direction),H/2+r*Math.sin(shape.direction))
	  //fx.globalAlpha = Math.sin(-shape.direction)**9
	  drawShape(fx,shape,W/2+r*Math.cos(shape.direction),H/2+r*Math.sin(shape.direction))
	}
  }
}





class Player{
  constructor(){
	this.x = 0
	this.y = 0
	this.minv = 2*dpr
	this.v = 2*dpr
	this.maxv = 15*dpr
	this.d = -Math.PI/2
	this.shape = {type:'triangle',
				  width:12*dpr,
				  height:30*dpr,
				  direction:this.d
   					}
   	
   	this.weapType = 1
  }
  update(){
	if(this.v<this.maxv&&game.boost){
	  this.v+=0.06*dpr
	}
	if(this.v>this.minv&&!game.boost){
	  this.v-=0.12*dpr
	}
  
	game.boostR = this.v-this.minv
	
	this.x += this.v*Math.cos(this.d)
	this.y += this.v*Math.sin(this.d)
	game.camera.x = this.x
	game.camera.y = this.y
	game.camera.d = this.d
	this.weapType = game.weapType
	
	this.shape.direction = this.d
	
	if(!game.mashroom){
	  this.d+=game.ctrl.x/3000
	}else{
	  this.d+=Math.cos(t/30)/60
	  this.d-=game.ctrl.x/3000
	  
	  all.push(new Bullet(this.x+Math.cos(this.d),this.y+Math.sin(this.d),Math.random()*pi2,this.v))
	}
	
	
	if(t%15==0){
	  all.push(new Trace(this.x-Math.cos(this.d)*10*dpr,this.y-Math.sin(this.d)*10*dpr))
	}



   if(game.ctrl.shot&&
	  t%10==0&&
	  this.weapType==0){
	  
	 all.push(new Bullet(this.x+Math.cos(this.d)*5*dpr,this.y+Math.sin(this.d)*5*dpr,this.d+(Math.random()-1)/20,this.v))

   }
   
   
   
   if(game.ctrl.shot&&
	  t%20==0&&
	  this.weapType==1){
	  
	 for(let i = 0; i < 5; i++){
	   all.push(new Bullet(this.x+Math.cos(this.d)*5*dpr,this.y+Math.sin(this.d)*5*dpr,this.d+(Math.random()-0.5)/5,this.v))
	 }
   }
   
  }
  draw(){
	drawShape(ctx,this.shape,this.x+W/2-game.camera.x,this.y+H/2-game.camera.y)
  }
}







class Trace{
  constructor(x,y){
	this.x = x
	this.y = y
	this.shape = {type:'circle',
					radius: 5*dpr
   					}
	this.isExist = 360
  }
  update(){
	this.isExist--
  }
  draw(){
	ctx.globalAlpha = 1-(360-this.isExist)/360
	ctx.strokeStyle = 'transparent'
	drawShape(ctx,this.shape,this.x+W/2-game.camera.x,this.y+H/2-game.camera.y)
  }
}








class Bullet{
  constructor(x,y,d,v){
	this.x = x
	this.y = y
	this.v = v+(7+Math.random()/2)*dpr
	this.d = d
	this.shape = {type:'circle',
					radius: 1*dpr
   					}
   	this.t = 0
   	this.isExist = 1
   	}
   	update(){
   	  this.x += this.v*Math.cos(this.d)
	  this.y += this.v*Math.sin(this.d)
	  
	  this.t++
	  if(this.t>100)this.isExist = 0
   	}
   	draw(){
   	  let drawX = this.x+W/2-game.camera.x
	  let drawY = this.y+H/2-game.camera.y
	  
   	
   	  ctx.strokeStyle = 'transparent'
   	  drawShape(ctx,this.shape,drawX,drawY)

	 fx.fillStyle = fx.strokeStyle = 'yellow'
   	  drawShape(fx,{type:'circle',radius:this.shape.radius*5},drawX,drawY)
   	}
}







class Star{
  constructor(x,y,d){
	this.x = Math.random()
	this.y = Math.random()
	this.z = Math.random()*5+2
	this.shape = {}
   this.shape.type = 'circle'
   this.shape.radius = Math.random()*dpr
   	}
   	update(){
   	  
   	}
   	draw(){
   	  ctx.strokeStyle = 'transparent'
   	  ctx.globalAlpha = 0.5
   	  fx.globalAlpha = 0.1
   	  let drawX = (this.x*W-game.camera.x/this.z)%W
   	  let drawY = (this.y*H-game.camera.y/this.z)%H

	  
	  
	  
	  if(drawX<0)this.x+=1
	  if(drawY<0)this.y+=1
	  
	  
   	  drawShape(ctx,this.shape,drawX,drawY)
   	  fx.fillStyle = fx.strokeStyle = 'white'
   	  drawShape(fx,{type:'circle',radius:this.shape.radius*10},drawX,drawY)


	 ctx.strokeStyle = 'white'
	 ctx.lineWidth = this.shape.radius*2
	 fx.lineWidth = this.shape.radius*2*10
	 drawShape(ctx,{type:'line',
	 radius:5*game.boostR*this.shape.radius/this.z*dpr,
	 direction:game.camera.d
	 },drawX,drawY)
	 drawShape(fx,{type:'line',
	 radius:5*game.boostR*this.shape.radius/this.z*dpr,
	 direction:game.camera.d
	 },drawX,drawY)
   	}
   	
   	
   	
}




class Mashroom{
  constructor(x,y,r){
	this.d = Math.random()*pi2
	this.x = x+Math.cos(this.d)*r*dpr
	this.y = y+Math.sin(this.d)*r*dpr
	this.shape = {
	  type:'star',
	  minr: 5*dpr,
	  maxr: 10*dpr,
	  direction: -pid2,
	  corns: 5
	}
  }
  update(){
	this.d = Math.atan2(game.camera.y-this.y,game.camera.x-this.x)
	this.shape.direction = this.d
  
	this.x += Math.cos(this.d)/(dist(this.x,game.camera.x,this.y,game.camera.y)**2)*10000*dpr
	this.y += Math.sin(this.d)/(dist(this.x,game.camera.x,this.y,game.camera.y)**2)*10000*dpr

	if(dist(this.x,game.camera.x,this.y,game.camera.y)<10*dpr)mashroom()
  }
  draw(){
	let drawX = this.x+W/2-game.camera.x
	let drawY = this.y+H/2-game.camera.y
   drawShape(ctx,this.shape,drawX,drawY)
  }
}








all.push(new Compass)

all.push(new HP)
all.push(new MP)
all.push(new XP)

all.push(new Player)
for(let i = 0; i < 30; i++){
all.push(new Star)
}
all.push(new Mashroom(game.camera.x,game.camera.y,5000))

for(let i = 0; i < 10; i++){
all.push(new Enemy (500,500,0,500))
}



anim = function(){

  t+=speed
  
  gradient = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,H/2)
  gradient.addColorStop(0, "#245")
  gradient.addColorStop(1, "#111")
  ctx.fillStyle = gradient
  ctx.globalAlpha = 1
  
  ctx.fillRect(0,0,W,H)
  fx.clearRect(0,0,W,H)
  mx.clearRect(0,0,W,H)
  
  all = all.filter(e=>e.isExist!=0)

  all.forEach(a=>{
  
	ctx.globalAlpha = 1
	fx.globalAlpha = 1
	
	gradient = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.hypot(W,H)/2)
	gradient.addColorStop(0, "#fff")
	gradient.addColorStop(1, "#111")
	ctx.fillStyle = gradient
	ctx.lineWidth = dpr
	ctx.strokeStyle = "transparent"
  
  
	if(a.update)a.update(t,speed)
	if(a.draw)a.draw()
  })
  
  requestAnimationFrame(anim)
}
