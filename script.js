// Define the JSON data for each page
const pageData = {
    "home": {
      "title": "Home Page",
      "content": "Welcome to the home page."
   
    },
    "wildlife": {
      "title": "Wildlife Page",
      "content": "Welcome to the wildlife page."
   
    },
    "departmentOfWildlifeConservation": {
      "title": "Department of Wildlife Conservation Page",
      "content": "Welcome to the Department of Wildlife Conservation page."
    
    },
    "sriLankanLeopard": {
      "title": "The Sri Lankan Leopard Page",
      "content": "Welcome to the Sri Lankan Leopard page."
    },
    "animalsInSriLanka": {
      "title": "Animals in Sri Lanka Page",
      "content": "Welcome to the Animals in Sri Lanka page."
    },
    "login": {
      "title": "Login Page",
      "content": "Welcome to the login page."
    }
  };
  
  function populatePage(pageId) {
    const data = pageData[pageId];
    if (data) {
      document.getElementById("title").innerText = data.title;
      document.getElementById("content").innerText = data.content;
    } else {
      console.error("Page data not found for", pageId);
    }
  }
  
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  
  populatePage(currentPage);
  