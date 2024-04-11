 const trip=(dest,bud)=>{

    let sum=dest.distance/dest.milege
    let final=sum*100
    if(final>=bud.remaining){
        console.log("Trip cancel")
    }
    else{
        console.log("Success")
    }
 }

let destiny={
    from:"chennai",
    to:"Munnar",
    distance:1000,
    milege:35,
    biek:"mt",
    average:100,
    tank:10,
    days:5,
    
};

let budget={
    totalBudget:5000,
    food:3500,
    remaining:1500
}
let budge=prompt("Enter the budget")
trip(destiny,budget)