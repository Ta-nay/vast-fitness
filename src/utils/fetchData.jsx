

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '34267e1717mshb07046ab155db8cp13600ajsna857608b184e',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData = async(url,options)=>{
    const response = await fetch(url, options)
    const data = response.json();
    return data;
}