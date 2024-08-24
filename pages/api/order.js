import clientPromise from '../../config/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('food-ordering-app'); // Nama database Anda
  const collection = db.collection('orders');

  switch (req.method) {
    case 'POST':
      const { customerName, items, totalAmount } = req.body;
      try {
        const newOrder = await collection.insertOne({ customerName, items, totalAmount });
        res.status(201).json(newOrder.ops[0]);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case 'GET':
      try {
        const orders = await collection.find({}).toArray();
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
