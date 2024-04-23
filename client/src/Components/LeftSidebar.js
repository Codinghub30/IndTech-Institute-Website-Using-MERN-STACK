import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiInbox,
  HiUser,
  HiViewBoards,
  HiClipboardList,
  HiBriefcase,
  HiChatAlt2,
  HiCollection,
  HiOutlineBookOpen
} from "react-icons/hi";

const LeftSidebar = () => {
  return (
    <div>
       <h2 className="text-2xl mb-4 ">Quick Links</h2>
      <div className="border-b-2 border-l-2 border-r-2 border-t-2 shadow-lg" style={{width:"83%"}}>
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admission" icon={HiBriefcase}>
                Admission Process
              </Sidebar.Item>
              <Sidebar.Item
                href="/admission-criteria"
                icon={HiViewBoards}
                label="Pro"
                labelColor="dark"
              >
                Admission Criteria
              </Sidebar.Item>
              <Sidebar.Item href="/admission" icon={HiInbox} label="3">
                Apply
              </Sidebar.Item>
           
              <Sidebar.Item href="/topFAQ" icon={HiClipboardList}>
                Top Faq
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiOutlineBookOpen}>Blog</Sidebar.Item>
            
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <h2 className="text-2xl mb-4 mt-20 ">Quick Links</h2>
      <div className="border-b-2 border-l-2 border-r-2 border-t-2 shadow-lg" style={{width:"85%"}}>
       
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/testimonials" icon={HiChatAlt2}>
                Testimonial
              </Sidebar.Item>
              <Sidebar.Item
                href="/gallery"
                icon={HiCollection}
                label="Pro"
                labelColor="dark"
              >
                Image Gallery
              </Sidebar.Item>
              <Sidebar.Item href="/ApplyForAdmission" icon={HiInbox} label="3">
                Apply
              </Sidebar.Item>
          
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default LeftSidebar;
  