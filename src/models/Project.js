import { Schema, models, model } from "mongoose";

const storySchema = new Schema(
  {
    type: String,
    status: String,
    priority: String,
    summary: String,
    key: String,
  },
  { timestamps: true }
);

const projectSchema = new Schema(
  {
    creator: String,
    projectName: String,
    projectImage: String,
    key: String,
    category: String,
    plan: { type: String, default: "FREE" },
    story: [storySchema],
    members: [
      {
        id: String,
        name: String,
        role: String,
      },
    ],
  },
  { timestamps: true }
);

export default models.Project || model("Project", projectSchema);
