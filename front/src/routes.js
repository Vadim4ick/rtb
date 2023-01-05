import Home from "./components/pages/Home";
import NewWorkout from "./components/pages/NewWorkout";
import NewExercise from "./components/pages/NewExercise";
import Auth from "./components/pages/Auth";

export const routes = [
  {
    path: "/",
    component: Home,
    auth: false,
  },
  {
    path: "/new-workout",
    component: NewWorkout,
    auth: true,
  },
  {
    path: "/auth",
    component: Auth,
    auth: false,
  },
  {
    path: "/new-exercise",
    component: NewExercise,
    auth: true,
  },
];
