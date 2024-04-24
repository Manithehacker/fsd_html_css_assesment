//class declaration
class practiceClass {
  constructor(det, cust) {
    this.detail = det;
    this.customer = cust;
  }

  dislayParkingDetails() {
    let booked = 0;
    this.customer.map((e) => {
      if (this.detail.slot === booked) {
        console.log("Slots Engaged"+ e.bikeNO);
      } else {
        //pushing details to the array
        allocatedUser.push(e);
        console.log("Slot confirmed");
        booked += 1;
      }
    
    });
  }

  getReport(){
    console.log(allocatedUser)
  }


}
//parking details
const details = {
  slot: 2,
  price: 20,
};
//customer details
let customer = [
  {
    bikeNO: "TN:30 AB:2737",
    bike: "R15",
  },
  {
    bikeNO: "TN31 BG:7886 ",
    bike: "Pulsar",
  },
  {
    bikeNO: "TN:32 DC:5462",
    bike: "Yamaha",
  },
  {
    bikeNO: "TN:32 AD:4646",
    bike: "MT",
  },
];

//initialize empty array
let allocatedUser = [];

//class invoke
const t = new practiceClass(details, customer);
t.dislayParkingDetails();
t.getReport();


//================== Developer need ======================

// 1.should be know the Details For  bike Parking details in koki mall
// 2.no_of_slots
// 3.price