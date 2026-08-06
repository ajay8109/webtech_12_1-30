// services/taskService.js
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Task from "@/models/Task";

const DB_NAME = "todoTask";
const COLLECTION = "tasks";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return db.collection(COLLECTION);
}

export const taskService = {
  getAll: async () => {
    const collection = await getCollection();
    const docs = await collection.find({}).sort({ _id: -1 }).toArray();
    return docs.map(doc => Task.fromMongoDB(doc).toJSON());
  },

  getById: async (id) => {
    if (!ObjectId.isValid(id)) return null;
    const collection = await getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    return doc ? Task.fromMongoDB(doc).toJSON() : null;
  },

  create: async (data) => {
    const collection = await getCollection();
    const result = await collection.insertOne({
      title: data.title,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    const doc = await collection.findOne({ _id: result.insertedId });
    return Task.fromMongoDB(doc).toJSON();
  },

  update: async (id, data) => {
    if (!ObjectId.isValid(id)) return null;
    const collection = await getCollection();
    
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );

    const updatedDoc = await collection.findOne({ _id: new ObjectId(id) });
    return updatedDoc ? Task.fromMongoDB(updatedDoc).toJSON() : null;
  },

  remove: async (id) => {
    if (!ObjectId.isValid(id)) return false;
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  },
};
