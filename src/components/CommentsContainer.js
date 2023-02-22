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
              { name: "Sam", comment: "his is new comments", replies: [] },
              { name: "Sam", comment: "his is new comments", replies: [] },
            ],
          },
          { name: "Sam", comment: "his is new comments", replies: [] },
        ],
      },
      { name: "Sam", comment: "his is new comments", replies: [] },
    ],
  },
  {
    name: "Sam",
    comment: "his is new comments",
    replies: [
      { name: "Sam", comment: "his is new comments", replies: [] },
      { name: "Sam", comment: "his is new comments", replies: [] },
    ],
  },
];

const CommentsList = ({ commentData }) => {
  console.log(commentData);

  return (
    <div>
      {commentData.map((singlecomment, index) => {
        return (
          <div key={index}>
            <Comment comment={singlecomment} />
            <div className="pl-3 border border-l-black ml-2">
              {/* {singlecomment.replies.length > 0 && ( */}
              <CommentsList commentData={singlecomment.replies} />
              {/* )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="font-bold">Comments:</h1>
      <CommentsList commentData={commentData} />
    </div>
  );
};

export default CommentsContainer;
