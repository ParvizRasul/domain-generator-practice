window.onload = function () {
  // console.log(document.getElementById("domainForm"));

  // Attach form submit event listener after the DOM is loaded
  document.getElementById("domainForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      

      // Get user inputs and split into arrays
      // "the, our, yours" -> ["the", " our", " yours"] => ["the", "our", "yours"] "word".trim()
      const pronouns = document.getElementById("pronoun").value.split(",").map((word) => word.trim());
      const adjectives = document.getElementById("adj").value.split(",").map((word) => word.trim());
      const nouns = document.getElementById("noun").value.split(",").map((word) => word.trim());
      const extensions = document.getElementById("extensions").value.split(",").map((ext) => ext.trim());

      // Clear previous results
      const domainList = document.getElementById("domainList");
      domainList.innerHTML = "";

      // Write the code here
      // Create a new array named 'domains' and push all the domain permutations in it

      const domains = [];
      
      for(const pronoun of pronouns){
        for(const adjective of adjectives){
          for(const noun of nouns){
            for(const extension of extensions){
              domains.push(`${pronoun}${adjective}${noun}${extension}`);
              // ["","", "", ""]
            }
          }
        }
      };

      // ["the", "our"]
      // ["fast", "slow"]
      // ["cat", "dog"]
      // [".com"]
      // ["thefastcat.com", "thefastdog.com"]


      console.log(domains); // [jkusagfkjyuhalf]

       // <ul></ul>
      // Display the results
      domains.forEach((domain) => {
        const li = document.createElement("li"); // <li></li>
        li.textContent = domain; // <li>currentElement</li>
        domainList.appendChild(li); //// <ul> <li>currentElement</li> </ul>
      });
    });
};
