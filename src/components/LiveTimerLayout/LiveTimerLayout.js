import React from "react";

const liveTimerLayout = (props) => {
  const colors = [
    "#E74C3C",
    "#884EA0",
    "#E67E22",
    "#17A589",
    "#2E86C1",
    "#CB4335",
    "#616A6B",
    "#A3E4D7",
    "#A569BD",
    "#EC7063",
    "#145A32",
  ];
  let sum = 0;
  const taskDuration = [...props.tasks];
  const sortedTask = taskDuration.sort((a, b) => a.duration - b.duration);
  const modifiedTask = sortedTask.map((task) => {
    sum += +task.duration;
    if (sum <= 60) return task;
  });
  const updatedTask = modifiedTask.map((task, index) => {
    if (task !== undefined) {
      return (
        <div
          key={index}
          style={{
            height: `${+task.duration * 10}px`,
            background: `${colors[index % 11]}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {`${task.name}`}
        </div>
      );
    }
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <div
            className="card"
            style={{
              position: "relative",
              height: "600px",
              border: "2px solid gray",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: `${props.ctr * 10}px`,
                right: "0",
                width: "100%",
                height: "2px",
                border: "3px solid #73AD21",
                textAlign: "right",
              }}
            >
              Curernt Position
            </div>

            {updatedTask}
          </div>
        </div>
        <div className="col-md-2">
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">0 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">10 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">20 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">30 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">40 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">50 second</div>
          </div>
          <div className="row" style={{ height: "100px" }}>
            <div className="col-md-12">60 second</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default liveTimerLayout;
