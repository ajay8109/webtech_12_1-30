
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

const DB_NAME = "tasksdb";
const COLLECTION = "tasks";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return db.collection(COLLECTION);
}

// Convert MongoDB's `_id` into a plain `id` string for the frontend
function formatTask(doc) {
  if (!doc) return null;
  return {
    id: doc._id.toString(),
    title: doc.title,
    done: doc.done,
  };
}

export const db = {
  getAll: async () => {
    const collection = await getCollection();
    const docs = await collection.find({}).sort({ _id: -1 }).toArray();
    return docs.map(formatTask);
  },

  getById: async (id) => {
    if (!ObjectId.isValid(id)) return null;
    const collection = await getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    return formatTask(doc);
  },

  create: async (data) => {
    const collection = await getCollection();
    const result = await collection.insertOne({
      title: data.title,
      done: false,
    });
    return formatTask({ _id: result.insertedId, title: data.title, done: false });
  },

update: async (id, data) => {
    if (!ObjectId.isValid(id)) return null;

    const collection = await getCollection();

    await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );

    const updatedDoc = await collection.findOne({
        _id: new ObjectId(id)
    });

    return formatTask(updatedDoc);
},

  remove: async (id) => {
    if (!ObjectId.isValid(id)) return false;
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  },
};
