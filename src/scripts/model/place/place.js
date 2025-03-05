import { LoginCache } from "../../../cache/loginSessionCredentials";
import * as csrfUtil from "/src/scripts/util/csrfUtil.js";
import { myHeaders } from "/src/cache/headers.js";

export const getCountry = async function (country) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/countries?country=${country}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getCity = async function (city) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/cities?city=${city}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getCommune = async function (commune) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/communes?commune=${commune}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const getVillage = async function (village) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/villages?village=${village}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    return err.message;
  }
};

export const addCountry = async function (country) {
  const countryObject = { country: country };
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/countries`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(countryObject),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return response;
  } catch (err) {
    return { status: response.status, message: "Country added succesfully" };
  }
};

export const addCity = async function (countryId, city) {
  const cityObject = { city: city };
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/cities/${countryId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(cityObject),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return { status: response.status, message: "City added succesfully" };
  } catch (err) {
    return err.message;
  }
};

export const addCommune = async function (cityId, commune) {
  const communeObject = { commune: commune };
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/communes/${cityId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(communeObject),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return { status: response.status, message: "Commune added succesfully" };
  } catch (err) {
    return err.message;
  }
};

export const addVillage = async function (communeId, village) {
  const villageObject = { village: village };
  await csrfUtil.fetchCsrf();
  myHeaders.set("X-XSRF-TOKEN", csrfUtil.getCsrfFromCookies());
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/places/villages/${communeId}`,
      {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(villageObject),
        headers: myHeaders,
      }
    );
    if (!response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    return { status: response.status, message: "Village added succesfully" };
  } catch (err) {
    return err.message;
  }
};
