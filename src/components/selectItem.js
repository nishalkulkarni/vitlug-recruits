import React from "react"

const SelectItem = (props) => (
  <div key={props.id} className={`flex divide-solid p-6`}>
    <div className={`flex-1 text-left`}>
      <h4>{props.name}</h4>
    </div>
    <div className={`flex-initial`}>
      <h4>{props.regno}</h4>
    </div>
    <div className={`flex-1 text-right`}>
      {props.domain === "TECHNICAL" && (
        <button
          className={`uppercase text-base font-semibold px-4 rounded bg-green-300 text-green-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}
      {props.domain === "MANAGEMENT" && (
        <button
          className={`uppercase text-base font-semibold px-4 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}
      {props.domain === "DESIGN" && (
        <button
          className={`uppercase text-base font-semibold px-4 rounded bg-blue-300 text-blue-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}
    </div>
  </div>
)

export default SelectItem
