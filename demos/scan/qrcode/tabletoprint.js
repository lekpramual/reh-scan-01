import QRcode from "qrcode.react";
import { Row, Typography, Avatar } from "antd";

const { Title } = Typography;

export class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <div className="p-5">
          <Row type="flex" justify="space-between" className="py-2 text-muted">
            <div>
              <middle>REH-20210511</middle>
            </div>
            <div className="text-right">
              <middle>วันที่ 11/5/2564</middle>
            </div>
          </Row>

          <Row
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "40px" }}
          >
            <div className="text-center">
              <Avatar
                src="/static/logo/logo512.png"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </Row>
          <Row
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "-10px" }}
          >
            <div className="text-center">
              <Title level={2}>โรงพยาบาลร้อยเอ็ด </Title>
            </div>
          </Row>
          <Row
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "-20px" }}
          >
            <div className="text-center">
              <Title level={2}>{this.props.record.location} </Title>
            </div>
          </Row>

          <Row
            className="py-2 text-muted"
            type="flex"
            justify="center"
            style={{ marginTop: "-20px" }}
          >
            {/* style={{ marginTop: "50px" }} */}
            <div className="text-center">
              {this.props.record ? (
                <QRcode
                  id="myqr"
                  value={`${JSON.stringify(this.props.record)}`}
                  size={320}
                  includeMargin={true}
                />
              ) : (
                <p>No QR code preview</p>
              )}
            </div>
          </Row>
        </div>
      </>
    );
  }
}
