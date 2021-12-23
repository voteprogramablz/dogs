import React from "react";

const useFetch = (errorMessage) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true); //Carregando
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(errorMessage);
    } catch (err) {
      setError(err.message);
      json = null;
    } finally {
      setData(json);
      setLoading(false); // se terminou a async function então já parou de carregar
      return { response, json };
    }
  }, [errorMessage]);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
