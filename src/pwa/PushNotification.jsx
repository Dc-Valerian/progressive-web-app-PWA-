import React from "react";
import pushNot from "react-push-notification";
import logo from "./images/114070063.jpg";

const PushNotification = () => {
  const notification = () => {
    pushNot({
      title: "greetings",
      message: "wassup bro",
      vibrate: true,
      duration: 10000,
      native: true,
      theme: "red",
      icon: `${logo}`,
    });
  }; // push notification

  function requestNotificationPermission() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
        }
      });
    }
  } // allow notification access

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        width: "100%",
      }}
    >
      <button onClick={notification} style={{ color: "red" }}>
        click
      </button>
      <button onClick={requestNotificationPermission}>notifcations</button>
    </div>
  );
};

export default PushNotification;
