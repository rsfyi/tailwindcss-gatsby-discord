import React from "react"

import { LogoSidebar } from "../components/LogoSidebar"
import { HashtagSidebar } from "../components/HashtagSidebar"
import { TopNavbar } from "../components/TopNavbar"
import { ChatList } from "../components/ChatList"
import { UserList } from "../components/UserList"

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen">
      <LogoSidebar />
      <div className="flex flex-col">
        <TopNavbar />
        <div className="flex-1 flex overflow-y-hidden">
          <HashtagSidebar />
          <div className="flex-1 flex justify-between">
            <ChatList />
            <UserList />
          </div>
        </div>
      </div>
    </div>
  )
}
