import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Ambil URI dari variabel lingkungan

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Di development, menggunakan global untuk caching
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Di production, tidak menggunakan caching
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  clientPromise = client.connect();
}

export default clientPromise;
