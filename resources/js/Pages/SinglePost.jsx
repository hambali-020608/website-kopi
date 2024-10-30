import Article from "@/Components/Article";
import PostLayout from "@/Layouts/PostLayout";
import Comment from "@/Components/Comments";
import CommentLayout from "@/Layouts/CommentLayout";
import { useForm } from "@inertiajs/react";

export default function SinglePost({post,comment}){
    const { data, setData, post:submitContent, processing } = useForm({
        comment: '',
        posting: post.id, // ID dari post yang sedang dilihat
    });
    

    function handleSubmit(e){
        e.preventDefault()
        submitContent(route('comments.store'))

    }
    return(
        <>
        <PostLayout type="Single">
            <Article  post={post}/>
        </PostLayout>
        
        <CommentLayout>
        <form class="mb-6" onSubmit={handleSubmit}>
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea id="comment" value={data.comment} onChange={(e)=>setData('comment',e.target.value)} rows="6"
                      class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                      placeholder="Write a comment..." required></textarea>
              </div>
              <button type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg bg-black">
                  Post comment
              </button>
          </form>
        {comment.map((comments)=>{
            console.log(comments)
            return(
            <>
                <Comment comment={comments}/>
            
            </>)
        })}

        </CommentLayout>
        

          
        
        </>
    )
}

