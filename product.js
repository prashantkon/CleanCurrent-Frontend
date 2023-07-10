document.getElementById("home").addEventListener("click", function() {
    location.href = "index.html";
});
document.getElementById("problem").addEventListener("click", function() {
    location.href = "problem.html";
})
document.getElementById("product").addEventListener("click", function() {
    location.href = "product.html";
})
document.getElementById("other").addEventListener("click", function() {
    location.href = "other.html";
});




const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border =  0;

     let file = inputFile.files[0];
     let formData = new FormData();
     formData.append("image", file);

  // Make a POST request to the backend API
  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {

         return response.json(); // Parse the response as JSON
      } else {
        throw new Error("Error: " + response.status);
      }
    })
    .then((data) => {
    console.log(data);
      // Handle the response from the backend
      handleOutput(data.message);
    })
    .catch((error) => {

      console.error(error);
    });
}

function handleOutput(output) {
  // Update the frontend based on the output received from the backend
  console.log("handledOutput called:", output); // Log the output to the console
  const outputElement = document.getElementById("output");
  outputElement.textContent = output.message;


}






dropArea.addEventListener("dragover", function(e) {
   e.preventDefault();
});
dropArea.addEventListener("drop", function(e) {
   e.preventDefault();
   inputFile.files = e.dataTransfer.files;
   uploadImage()
});
