export const getCountryList = async () => {
  try {
    const URL = "https://restcountries.com/v3.1/all";
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getCountryDetail = async (name) => {
  try {
    const URL = `https://restcountries.com/v3.1/name/${name}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
