import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  posts: [
    {
      title: "title",
      description: "description1",
      postedBy: "ib",
      category: {
        categoryName: "welcome ",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "rah",
      category: {
        categoryName: "to my",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "im",
      category: {
        categoryName: "blog",
      },
    },
  ],
};

export const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());
