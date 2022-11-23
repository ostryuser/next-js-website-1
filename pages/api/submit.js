export default async function handler(req, res) {
  const { email, name, message } = JSON.parse(req.body);

  if (!email || !name || !message) {
    return res.status(400).json({ error: "Brakujące pola" });
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Działanie niedozwolone" });
  }

  const request = await fetch(
    "https://api.airtable.com/v0/app80WiksbyDJzpYL/Submissions",
    {
      method: "POST",
      headers: {
        // Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: { name, message, email } }),
    }
  );
  if (request.ok) {
    return res.status(200).json({ data: "ok" });
  }

  return res.status(400).json({ error: "Wystąpił jakiś błąd" });
}
