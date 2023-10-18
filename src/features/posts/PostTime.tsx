import { parseISO, formatDistanceToNow } from "date-fns";



const PostTime = ({ timeStamp }: {timeStamp: string}) => {

  let postTimeAgo = ''
  if(timeStamp) {
    const date = parseISO(timeStamp)
    const timePeriod = formatDistanceToNow(date)
    postTimeAgo = `${timePeriod} ago`
  }
  return ( 
    <span title={timeStamp}>
      <i>{postTimeAgo}</i>
    </span>
   );
}
 
export default PostTime;