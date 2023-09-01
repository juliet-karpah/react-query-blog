import { developerConfig } from "./config";

export const getBooks = async () => {
  try {
    const res = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${developerConfig.API_KEY}`
    );
    return res.json();
  } catch (e) {
    console.error(e);
  }
};
