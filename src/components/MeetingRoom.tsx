import { useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";

function MeetingRoom() {
  const router = useRouter();
  const [layout,setLayout] = useState<"grid" | "speaker">('speaker');
  const [showParticipants,setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();


  return <div>MeetingRoom</div>
}
export default MeetingRoom;