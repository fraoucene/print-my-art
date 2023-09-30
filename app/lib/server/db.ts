import mongoose from "mongoose";

const Schema = mongoose.Schema;

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

export const db = {
  Work: workModel(),
};

// mongoose models with schema definitions

function workModel() {
  const schema = new Schema(
    {
      image: { type: String, required: true },
      prompt: { type: String, required: false },
      fullPrompt: { type: String, required: false },
      description: { type: String, required: false },
      aspect: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Work || mongoose.model("Work", schema);
}
