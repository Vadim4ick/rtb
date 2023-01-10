import asyncHandler from "express-async-handler";
import ExerciseLog from "../../../models/exerciseLogModel.js";
import { reBuildTimes } from "../../../helpers/exerciseLog.js";

//@desc   Get exercisesLog
//@route  GET /api/exercises/log/:id
//@access Private

export const getExerciseLog = asyncHandler(async (req, res) => {
  const exerciseLog = await ExerciseLog.findById(req.params.id)
    .populate("exercise", "name imageName")
    .lean();

  if (!exerciseLog) {
    res.status(404);
    throw new Error("Лог не найден!");
  }

  const prevExerciseLog = await ExerciseLog.find({
    user: req.user._id,
    exercise: exerciseLog._id,
    completed: true,
  }).sort({ createdAt: "desc" });

  const prevExLog = prevExerciseLog[0];

  // const log = exerciseLog.toObject(); //Можно удалить эту строчку если прописать .lean у exerciseLog

  let newTimes = reBuildTimes(exerciseLog);

  if (prevExLog) newTimes = reBuildTimes(exerciseLog, prevExLog);

  res.json({
    ...exerciseLog,
    times: newTimes,
  });
});
