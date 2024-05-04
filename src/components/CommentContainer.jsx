const userIcon = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"


const commentsData = [
    {
        name:"Raza",
        text:"This is random comment",
        replies:[
            {
                name:"Repl",
                text:"This is random comment",
            },
            {
                name:"Repl",
                text:"This is random comment",
                replies:[
                    {
                        name:"Repl",
                        text:"This is random comment",
                    },
                ]
            },
        ]
    },
    {
        name:"Raza01",
        text:"This is random comment",
        replies:[
            {
                name:"Repl",
                text:"This is random comment",
            },
            {
                name:"Repl",
                text:"This is random comment",
            },
        ]
    },
    {
        name:"Raza09",
        text:"This is random comment",
        replies:[
            {
                name:"Repl",
                text:"This is random comment",
            },
            {
                name:"Repl",
                text:"This is random comment",
            },
        ]
    },
    {
        name:"8Raza",
        text:"This is random comment",
        replies:[

        ]
    },
]


const Comment = ({data})=>{

    return(

        <div className="bg-gray-100 m-2 flex gap-1 rounded-lg items-center p-2">

            <img className="w-12 h-14" src={userIcon} alt="" />
            <div>
                <p className="font-bold">{data.name}</p>
                <p className="text-sm mt-1 text-gray-500">{data.text}</p>
            </div>

        </div>
    )
}

const CommentsList = ({comments}) => {
    return(
      comments&& comments.map((comment, index)=>(
        // just using index as key .
            <div key={index} className="">

                <Comment data={comment} />

                <div className="ml-4 border-l-4">

                    <CommentsList comments={comment.replies} />

                </div>

            </div>
        )

       )
    )
}

const CommentContainer = ()=>{

    return(
        <div className="p-3 ">
            <h1 className="font-bold text-3xl">Comments:</h1>

            <div className="  ">

                <CommentsList comments={commentsData} />
            </div>

        </div>
    )
}

export default CommentContainer;