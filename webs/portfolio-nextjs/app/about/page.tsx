export default async function About() {
  // Simulate slow loading
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>About Page</div>;
}
