/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { eventimage, user, microphone, schedule } from "../assets";

const EventBlog = () => {
  return (
    <div className="bg-[#231F20] text-white md:px-[108px] px-4   py-[40px] mx-auto">
      <div className="flex items-center flex-col md:flex-row gap-2">
        <div className="bg-custom-grey-500 rounded-md p-[25px] ">
          <h3 className="text-[30px] font-bold">Event</h3>
          <img src={eventimage} alt="" className="h-[200px]" />
          <h4 className="font-bold pb-[12px]">
            How to secure funding for initial launch
          </h4>
          <p className="text-xs mb-8">
            With Bezi, you’ll never be alone. Join thousands of passionate
            founders and Growth Managers.
          </p>
          <div className="flex flex-row items-center gap-4 text-xs ">
            <a href="#" className="p-3 rounded-xl border border-white ">
              Register For Event
            </a>
            <p className="underline">See All Event</p>
          </div>
        </div>
        <div className="bg-custom-grey-500 p-[25px] rounded-lg">
          <h4 className="text-[30px] font-bold">Blogs</h4>
          <div className="flex items-start border-b gap-2 pb-3">
            <img src={user} alt="" className="h-[40px]" />
            <div >
              <h3 className="pb-3">How to secure funding for initial launch</h3>
              <p className="text-xs">
                With Bezi, you’ll never be alone. Join thousands of passionate
                founders...
              </p>
            </div>
          </div>
          <div className="flex items-start border-b gap-2 py-3 ">
            <img src={microphone} alt="" className="h-[40px]"/>
            <div>
              <h3 className="pb-3">Planning for projects with tight deadline</h3>
              <p className="text-xs">
                With Bezi, you’ll never be alone. Join thousands of passionate
                founders...
              </p>
            </div>
          </div>
          <div className="flex items-start border-b gap-2 py-3 mb-6">
            <img src={schedule} alt="" className="h-[40px]"/>
            <div>
              <h3 className="pb-3">Planning for projects with tight deadline</h3>
              <p className="text-xs">
                With Bezi, you’ll never be alone. Join thousands of passionate
                founders...
              </p>
            </div>
          </div>
          <p className="underline">See More Post</p>
        </div>
      </div>
    </div>
  );
};

export default EventBlog;
