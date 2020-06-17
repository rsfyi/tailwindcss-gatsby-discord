import React from "react"

import profileImg from "../images/avatar.jpg"

export const UserList = () => {
  return (
    <div className="bg-gray-800 w-56 flex-none overflow-y-auto p-3">
      <h3 className="uppercase tracking-wide font-semibold text-xs text-gray-500 mb-2">
        Core team - 1
      </h3>
      <ul className="mb-6">
        <li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
          <a href="#" className="flex items-center">
            <span>
              <a href="#">
                <img
                  src={profileImg}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              </a>
            </span>
            <span className="ml-2">rahul singh</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
