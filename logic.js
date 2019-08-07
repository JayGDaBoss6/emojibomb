console.log('hi');
let multiplier;
let content;
let daBomb;

//add event listener to the entire doc, runs function on every click
document.addEventListener("click", multiplyText);

//on any click, check to see if it's a multiplier button click and if
//so put the multiplier value into the variable multiplier

function multiplyText(e) {
 if (e.target.className === "multiplier-btn" && content) {
  let multiplier = parseInt(
   e.target.children[0].innerHTML.toString().substr(1)
  );
  console.log(multiplier);
  bomb(multiplier, content);
 } else if (e.target.className === "multiple" && content) {
  let multiplier = parseInt(e.target.innerHTML.toString().substr(1));
  console.log(multiplier);
  bomb(multiplier, content);
 }
}

//

let textbox = document.getElementById("input-area");
textbox.addEventListener("input", function(e) {
 content = e.target.value;
});

function bomb(multi, contents) {
 daBomb = contents.repeat(multi);
 console.log(daBomb);
}

// new ClipboardJS('#cpy-btn');

function copyStringToClipboard(str) {
 // Create new element
 var el = document.createElement("textarea");
 // Set value (string to be copied)
 el.value = str;
 // Set non-editable to avoid focus and move outside of view
 el.setAttribute("readonly", "");
 el.style = { position: "absolute", left: "-9999px" };
 document.body.appendChild(el);
 // Select text inside element
 el.select();
 // Copy text to clipboard
 document.execCommand("copy");
 // Remove temporary element
 document.body.removeChild(el);
}
document.getElementById("cpy-btn").addEventListener("click", function() {
 copyStringToClipboard(daBomb);
});

document.getElementById("reset-btn").addEventListener("click", function() {
    console.log('hi');
 multiplier = "";
 content = "";
 daBomb = "";
 document.getElementById('input-area').value = "";
 console.log("cleared boss!");
});