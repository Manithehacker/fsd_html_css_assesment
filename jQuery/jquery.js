// $(document).ready(() => {
//   colorChange(c1);
// });

// import { event } from "jquery";

// const colorChange = (para) => {
//   let val = prompt("Enter the value");
//   document.body.style.background = val;
// };

// $(document).ready(() => {
//   $("img").hide();
//   $("div").click(() => {
//     $("img").show();
//   });
// });

// $(document).mouseleave(() => {
//   $("img").hide();
// });

// on method for handling mutliple events in jquery
$(document).ready(() => {
  $("h1").on({
    click:  ()=> {
      $("body").css("background","red")
    },
    mouseleave:  ()=> {
      $("body").css("background","blue")
    },
    mouseover:()=>{
        $("body").css("background","yellow")
    }
    ,
  });
});

$(document).ready(() => {
  $("p").on({
    mouseup: (e) => e.target.classList.add("test"),
    mouseleave: (e) => e.target.classList.add("test1"),
  });
});

$("a").on("click", (e) => {
  e.preventDefault();
  $(this).closest("div").animate(
    {
      left: "+=400",
    },
    1000
  );
});


//binding one or more events using objects
$(document).ready(() => {
    //calling init function in items object
  ItemList.init();
});

var ItemList = {
  count: 0,
  add: function () {
    // e.preventDefault();
    this.count++;
    this.showCounft();
  },
  showCount: function () {
    $("p span").text(this.count);
  },
  bindEvents: function () {
    $("#add").on("click",()=>{
        this.add()
    })
  },
  init: function () {
    this.bindEvents();
  },
};


// $(document).ready(()=>{
// fun()
// })
// const fun=()=>{
//     $('#add').click((event)=>{
//         var ele=$(this)
   
//         if(ele.attr("href").match("evil")){
//             event.preventDefault()
//             ele.addClass("evil")
//         }
//     })
// }

$(document).ready(()=>{
  $("#submit").click(()=>{

  })
})



$(document).ready(() => {


  $(".err-name").hide();
  $(".err-pwd").hide();
  $(".err-email").hide();

  //email focus
  $("#email").focusout((e) => {
    e.preventDefault();
    let email = e.target.value;
    if (email) {
      console.log(email);
    } else {
      $(".err-email").show();
      $("#email").css("border", "2px solid red");
    }
  });

  //password error
  $("#pwd").focusout((e) => {
      e.preventDefault();
      let email = e.target.value;
      if (email) {
        console.log(email);
      } else {
        $(".err-pwd").show();
        $("#password").css("border", "2px solid red");
      }
    });

    //name error
    $("#name").focusout((e) => {
      e.preventDefault();
      let name = e.target.value;
      if (name) {
        console.log(email);
      } else {
        $(".err-name").show();
        $("#name").css("border", "2px solid red");
      }
    });
    
  //password icon 
  let clciked = false;
  $("#eye").click(() => {
    clciked = !clciked;
    if (clciked) {
      $("#eye").attr("class", "fa-solid fa-eye");
      $("#pwd").attr("type", "text");
    } else if ($("#eye").attr("class", "fa-solid fa-eye")) {
      $("#eye").attr("class", "fa-solid fa-eye-slash");
      $("#pwd").attr("type", "password");
    }
  });

});