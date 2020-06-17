import React from "react"

export const HashtagSidebar = () => {
  return (
    <div className="bg-gray-800 w-56 flex-none flex flex-col justify-between">
      <div className="overflow-y-auto">
        <ul>
          <li>
            <a href="#">
              <span>#</span>
              <span>welcome</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-gray-600">bottom</div>
    </div>
  )
}
