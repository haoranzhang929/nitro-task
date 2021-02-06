export const fetchData = <T extends unknown>(url: string) =>
  fetch(url)
    .then((res): Promise<T> => res.json())
    .then(data => data);
