function main(){
  const baseUrl = "https://restcountries.eu/rest/v2/all";

  const getCountries = async () => {
      try{
          const response = await fetch(`${baseUrl}`);
          const responseJson = await response.json();
          if (responseJson.error) {
              showResponseMessage(`Sorry, Not Found :(`);
          } else {
            renderCountries(responseJson.name);
          }
      } catch{
          showResponseMessage('Sorry, Not Found :(')
      }
  }

  const showResponseMessage = (message = "Check your internet connection") => {
      console.log(message);
  }

  const renderCountries = (names) => {
      const listCountries = document.querySelector("#countries");
      listCountries.innerHTML = "";

      names.forEach(named => {
        listCountries.innerHTML += `
          <option value="1">${named.name}</option>
        `;
      });
  } 
  getCountries();
}