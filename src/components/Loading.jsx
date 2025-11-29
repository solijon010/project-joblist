import { RingLoader } from "react-spinners"


function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <RingLoader color="#63baba" />
      </div>
  )
}

export default Loading