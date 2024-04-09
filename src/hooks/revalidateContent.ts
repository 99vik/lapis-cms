export default async function revalidateContent() {
  const res = await fetch('http://localhost:3000/api/revalidate');
  const data = await res.json();
}
