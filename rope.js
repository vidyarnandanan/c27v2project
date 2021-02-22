class rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
length:200,
stifness:0.1

}
this.rope=Matter.Constraint.create(options)
World.add(world,this.rope)
this.pontB=pointB


}
display(){
var pointA=this.rope.bodyA.position
var pointB=this.pontB
strokeWeight(4)
line (pointA.x,pointA.y,pointB.x,pointB.y)




}

}