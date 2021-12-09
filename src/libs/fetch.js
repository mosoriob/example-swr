export default async function fetcher(...args) {
  const res = await fetch(...args);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  console.log(res.ok)
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}
