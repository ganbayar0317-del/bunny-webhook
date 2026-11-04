export default function handler(req, res) {
  // Meta-ийн анхны баталгаажуулалт (GET)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.status(403).send('Forbidden');
  }

  // Instagram-аас ирэх мэдэгдэл (POST)
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.body));
    return res.status(200).send('EVENT_RECEIVED');
  }

  res.status(405).end();
}
