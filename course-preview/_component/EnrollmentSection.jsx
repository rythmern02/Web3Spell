import { EnrollCourse, PublishCourse } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const EnrollmentSection = ({ courseDetail, params, userCourse }) => {
  const { user } = useUser();
  const router = useRouter();

  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        params.courseId,
        user?.primaryEmailAddress?.emailAddress
      ).then(async (resp) => {
        if (resp) {
          console.log(resp?.createUserEnrollCourse?.id)
          await PublishCourse(resp?.createUserEnrollCourse?.id).then
          (
            (result) => {
              console.log(result);
              if(result){
                router.push('/view-potions/', courseDetail.courseId);
              }
            }
          );
        }
      });
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div>
      {userCourse?.courseId? 
      <div className="mt-5 border border-gray-900 rounded-lg p-2 text-center ">
        <h2 className="text-white">
        Summon arcane knowledge of the digital age! Our interactive courses
        weave enchantments in Web3, Blockchain, AI, UI/UX, and other potent
         spells.
        </h2>
        <button className="cursor-pointer p-2 w-full bg-purple-500 text-white rounded-lg text-[16px] mt-2 hover:bg-purple-700 " onClick={ ()=>router.push('/view-potions/'+params.courseId)}>
          Continue
        </button>

      </div> 

      : courseDetail.free ?
      <div className="mt-5 border border-gray-900 rounded-lg p-2 text-center sm:mt-5">
        <h2 className="text-white ">
          Summon arcane knowledge of the digital age! Our interactive courses
          weave enchantments in Web3, Blockchain, AI, UI/UX, and other potent
          spells.
        </h2>
        <button className="cursor-pointer p-2 w-full bg-purple-500 text-white rounded-lg text-[16px] mt-2 hover:bg-purple-700 " onClick={()=>enrollCourse()}>
          Enroll Now
        </button>
      </div>
      : 
      <div className="mt-5 border border-gray-900 rounded-lg p-2 text-center sm:mt-5">
      <h2 className="text-white ">
        Summon arcane knowledge of the digital age! Our interactive courses
        weave enchantments in Web3, Blockchain, AI, UI/UX, and other potent
        spells.
      </h2>
      <button className="cursor-pointer p-2 w-full bg-purple-500 text-white rounded-lg text-[16px] mt-2 hover:bg-purple-700 " onClick={()=>enrollCourse()}>
        Buy Course for 10.99$     </button>
    </div>
}
    
    </div>
  );
};

export default EnrollmentSection;
