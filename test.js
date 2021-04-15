class Test{
    constructor(x){
        this.x=x
    }
    positiveNumbers(){
       if(this.x>0){
        console.log(this.x + " is positive!")
       }
       else{
        console.log(this.x + " is negative!")
    }
    }
    evenNumbers(){
        if(this.x%2==0){
            console.log(this.x + " is even!")
        }
        else{
            console.log(this.x + " is not even")
        }
    }
    buzzNumber(){
        if(this.x%7==0 || this.x%10==7){
            console.log(this.x + " is a buzz number!")
        }
        else{
            console.log(this.x + " is not a buzz number")
        }
    }
    greatestNumber(a,b,c){
        if(a>b && a>c){
            console.log(a + " is the greatest number!")
        }
        else if(b>a && b>c){
            console.log(b + " is the greatest number!")
        }
        else if(c>a && c>b){
            console.log(c + " is the greatest number!")
        }
    }
    displayEvens(){
        var d =[33,64,92,15]
        for(var i=0; i<d.length;i=i+1){
            if(d[i]%2==0){
                console.log(d[i]+" is an even number!")
            }
        }
    }
    //display the last digit of each element
    displayLastDigit(){
        var e=[43,64,72,12]
        for(var i=0; i<e.length; i=i+1){
            var s=e[i]%10
            console.log(s)
        }
    }
    sumOfDigits(){
        var n=16
        var p=n%10
        var q=n/10
        q= Math.trunc(q)
        console.log(p+q)
    }
    neonNumber(){
        var x=9
        var s= x*x
        var f= x%10
        var q=x/10
        q= Math.trunc(q)
        if(f+q==x){
        console.log(f+q + " is a neon number")
        }
    }
}