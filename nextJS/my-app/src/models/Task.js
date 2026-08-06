// models/Task.js
import { ObjectId } from "mongodb";

class Task {
  constructor(data) {
    this.id = data._id ? data._id.toString() : null;
    this.title = data.title;
    this.done = data.done || false;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  static fromMongoDB(doc) {
    if (!doc) return null;
    return new Task(doc);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      done: this.done,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

export default Task;
