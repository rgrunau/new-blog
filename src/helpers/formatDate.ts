export function formatDate(date: Date | string) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  // @ts-ignore
  return new Date(date).toLocaleDateString("en-US", options);
}
