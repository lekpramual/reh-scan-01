import React, { useState } from "react";
import { Row, Col, Button, Modal } from "antd";
// import QrScan from "react-qr-reader";
// Blob is not defined” in NextJs? dynamic
import dynamic from "next/dynamic";
const QrScan = dynamic(() => import("react-qr-reader"), { ssr: false });

import { geolocated } from "react-geolocated";

import arePoints from "./arePoints";
import { useEffect } from "react";

const location = (props) => {
  const [state, setState] = useState([]);
  const [visible, setVisible] = useState(false);
  const [qrscan, setQrscan] = useState(undefined);

  const handleScan = (data) => {
    if (data) {
      console.log(data);

      setQrscan(data);
    }
  };

  const showModal = (e) => {
    console.log(e);
    setVisible(true);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const checkPoints = (checkPoint, centerPoint) => {
    const km = 0.5;
    const checkAre = arePoints(checkPoint, centerPoint, km);
    if (checkAre) {
      return true;
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <div>
      {props.isGeolocationAvailable}
      {!props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
      ) : !props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled </div>
      ) : props.coords ? (
        <>
          <Row>
            <Col span={12}>
              <Button type="dashed" block>
                Latitude : {props.coords.latitude.toFixed(4)}
              </Button>
            </Col>
            <Col span={12}>
              <Button type="dashed" block>
                Longitude : {props.coords.longitude.toFixed(4)}
              </Button>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <Button type="dashed" block style={{ height: "100%" }}>
                <QrScan
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ margin: "15px 0px 15px 0px", width: "100%" }}
                />
              </Button>
            </Col>
          </Row>

          <Row gutter={24} style={{ textAlign: "center" }}>
            <h1>
              {arePoints(
                {
                  lat: props.coords.latitude.toFixed(4),
                  lng: props.coords.longitude.toFixed(4)
                },
                {
                  lat: qrscan !== undefined ? qrscan.latitude : 0,
                  lng: qrscan !== undefined ? qrscan.longitude : 0
                },
                0.5
              )
                ? "--- คุณอยู่ในพื้นที่ลงทะเบียน --- "
                : "--- กรุณาตรวจสอบจุดสแกน --- "}
            </h1>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: "center" }}>
              <br />
              Latitude Mobile :{" "}
              {qrscan !== undefined ? qrscan.latitude : "is not scan"}
              <br />
              Longitude Mobile :{" "}
              {qrscan !== undefined ? qrscan.longitude : "is not scan"}
              <br />
              Location Mobile :{" "}
              {qrscan !== undefined ? qrscan.location : "is not scan"}
            </Col>
          </Row>
        </>
      ) : (
        <div>กำลังค้นหาตำแหน่ง &hellip; </div>
      )}
    </div>
  );
};

export default geolocated({
  // positionOptions: {
  //   enableHighAccuracy: false
  // },
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity
  },

  watchPosition: false,
  userDecisionTimeout: 5000,
  suppressLocationOnMount: false,
  // geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true
})(location);

// export default location;
