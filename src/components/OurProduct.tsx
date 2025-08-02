import Typography from "./Typography";
import Image from "./image";
import Button from "./Button";

function OurProduct() {
  return (
    <div className="card">
      <div className="cardTop">
        <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
      </div>

      <div className="cardTitle">Our Products</div>

      <div className="cardBody">
        <div className="shopItem">
          <div className="shopItem_image" style={{ backgroundColor: "rgb(212, 215, 214)" }}>
            <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />
          </div>
          <div className="shopItem_name">Nike Air Zoom Pegasus 36</div>
          <Typography
            text="The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across
              high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at
              higher speeds."
          />

          <div className="shopItem_bottom">
            <div className="shopItem_price">$108.97</div>
            <Button buttonText="ADD TO CARD" />
          </div>
        </div>
        <div className="shopItem">
          <div className="shopItem_image" style={{ backgroundColor: "rgb(34, 175, 220)" }}>
            <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />
          </div>
          <div className="shopItem_name">Nike Air Zoom Pegasus 36</div>
          <Typography
            text="The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across
              high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at
              higher speeds."
          />
          <div className="shopItem_bottom">
            <div className="shopItem_price">$108.97</div>
            <Button buttonText="ADD TO CARD" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
