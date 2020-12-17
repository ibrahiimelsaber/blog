/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  posts: [
    {
      title: "title",
      description: "description",
      postedBy: "ib",
      category: {
        categoryName: "blog",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "ah",
      category: {
        categoryName: "by",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "sm",
      category: {
        categoryName: "ib",
      },
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
