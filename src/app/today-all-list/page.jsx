import React from "react";

const page = () => {
  return (
    <div>
      {/* Modal For Add Task */}

      <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>

            <div className="list-col-grow">
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>

            <div className="list-col-grow">
              <div>Ellie Beilish</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Bears of a fever
              </div>
            </div>
          </li>

          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>

            <div className="list-col-grow">
              <div>Sabrino Gardener</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Cappuccino
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center m-3 p-3">
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
