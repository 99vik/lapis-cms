export default async function revalidateContent() {
  const res = await fetch(`${process.env.APP_URI}/api/revalidate`, {
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });
  const data = await res.json();
  console.log(data);
}
