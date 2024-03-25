export const { VITE_APP_URL } = import.meta.env;

export const getData = async (url: string) => {
  const response = await fetch(`${VITE_APP_URL}/${url}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
