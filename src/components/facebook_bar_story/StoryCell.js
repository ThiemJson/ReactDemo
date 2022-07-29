import React from "react";

export const StoryCell = () => {
  return (
    <div className="storycell relative">
      <div className="storycell-image block w-[113px] h-[201px] bg-white rounded-xl">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?compress=1&resize=1000x750&vertical=top"
          alt=""
          className="storycell-img rounded-xl block w-full h-full object-cover flex-shrink-0"
        />
      </div>
      <div className="black-layer absolute z-10 bottom-0 w-[113px] h-[201px] bg-black opacity-[17%] rounded-xl"></div>
      <span className="storycell-name absolute z-10 bottom-0 translate-x-[12px] -translate-y-[8px] text-[#fff] font-medium">
        Thiem
      </span>
      <div className=" border-[1px] border-[#00000010] flex justify-center items-center bg-[#5a5f64] absolute z-10 w-[42px] h-[42px] rounded-full top-0 translate-x-[12px] translate-y-[12px]">
        <img
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/240587477_3009574332615311_7526065467406807859_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZluuMMvJekQAX9q4qPB&tn=GIfYAOnpAWs0mA5v&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9SBSZ3b0_AP_c_o5oqrhb1pYr_OU2mGzXhudcFHRDG4g&oe=62E93D2D"
          alt=""
          className="block w-[80%] h-[80%] flex-shrink-0 rounded-full"
        />
        <div className=" absolute w-[32%] h-[32%] border-[2px] border-[#00000095] bg-green-500 rounded-full right-0 bottom-0"></div>
      </div>
    </div>
  );
};

export const StoryCreateCell = () => {
  return (
    <div className="storycell relative rounded-xl w-[113px] h-[201px]">
      <div className="storycell-image block bg-white rounded-xl w-full h-full">
        <img
          src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/240587477_3009574332615311_7526065467406807859_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZluuMMvJekQAX9q4qPB&tn=GIfYAOnpAWs0mA5v&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9SBSZ3b0_AP_c_o5oqrhb1pYr_OU2mGzXhudcFHRDG4g&oe=62E93D2D"
          alt=""
          className="storycell-img rounded-xl block w-full h-full object-cover flex-shrink-0"
        />
      </div>
      <div className="black-layer absolute bottom-0 w-[113px] h-[201px] bg-black opacity-[17%] rounded-xl"></div>
      <div className="bottom z-6 absolute bottom-[-1px] rounded-b-xl h-[25%] w-full bg-[#242526]">
        <span className=" absolute bottom-[5px] left-[5px] storycell-name text-[#fff] font-medium">
          {`Create story`}
        </span>
      </div>
    </div>
  );
};
