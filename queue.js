 

function MyQueue() {  
 
  var count = 10;
  var que = [];

  this.isOverflow = function(){
  	return count === 0
  }

  this.isUnderflow = function(){
  	return count === 10
  }

  this.push = function(v) {
    if (this.isOverflow()) {
      console.log("Queue Overflow");
    }
    else {
      count = count - 1;
      que.push(v);
    }
  }

  this.pop = function() {
    if (this.isUnderflow()) {
      console.log("Queue Underflow");
    }
    else {
      que.shift();
      count = count + 1;
     
    }
  }

  this.getQueue = function() {
    return que;
  }

}


