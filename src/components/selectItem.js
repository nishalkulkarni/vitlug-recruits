import React from "react"

const SelectItem = props => (
  <div key={props.id} className={`flex flex-col sm:flex-row divide-solid p-6`}>
    <div className={`flex-none sm:text-left sm:flex-1`}>
      <h4>{props.name}</h4>
    </div>
    <div className={`flex-none sm:flex-initial`}>
      <h4>{props.regno}</h4>
    </div>
    <div className={`flex-none sm:text-right sm:flex-1`}>
      {props.domain === "TECHNICAL" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-green-300 text-green-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}
      {props.domain === "MANAGEMENT" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}
      {props.domain === "DESIGN" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-blue-300 text-blue-600 max-w-max shadow-sm`}
        >
          {props.domain}
        </button>
      )}

      {props.domain2 === "TECHNICAL" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-green-300 text-green-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain2}
        </button>
      )}
      {props.domain2 === "MANAGEMENT" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain2}
        </button>
      )}
      {props.domain2 === "DESIGN" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-blue-300 text-blue-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain2}
        </button>
      )}

      {props.domain3 === "TECHNICAL" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-green-300 text-green-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain3}
        </button>
      )}
      {props.domain3 === "MANAGEMENT" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-yellow-300 text-yellow-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain3}
        </button>
      )}
      {props.domain3 === "DESIGN" && (
        <button
          className={`uppercase text-base font-semibold px-4 my-1 rounded bg-blue-300 text-blue-600 max-w-max shadow-sm ml-2`}
        >
          {props.domain3}
        </button>
      )}
    </div>
  </div>
)

export default SelectItem
