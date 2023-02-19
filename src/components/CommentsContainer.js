import Comment from "./Comment";

const commentData = [
  {
    name: "Sam",
    comment: "his is new comments",
    replies: [
      {
        name: "Sam",
        comment: "his is new comments",
        replies: [
          {
            name: "Sam",
            comment: "his is new comments",
            replies: [
              { name: "Sam", comment: "his is new comments" },
              { name: "Sam", comment: "his is new comments" },
            ],
          },
          { name: "Sam", comment: "his is new comments" },
        ],
      },
      { name: "Sam", comment: "his is new comments" },
    ],
  },
  {
    name: "Sam",
    comment: "his is new comments",
    replies: [
      { name: "Sam", comment: "his is new comments" },
      { name: "Sam", comment: "his is new comments" },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      {commentData.map((singlecomment) => {
        return <Comment comment={singlecomment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
