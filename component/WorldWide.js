const { default: Image } = require("next/image")

const WorldWide = () =>{
    return(
        <>
        <div className="world_wide_section">
        <div className="center_wr">
          <div className="div_container">
            <div className="world_shipping common">
              <Image
                src={require("../assets/images/globe-free-img.png")}
                alt="world_shipping"
              />
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="best_qualitys common">
              <Image
                src={require("../assets/images/quality-free-img.png")}
                alt="quality_shipping"
              />
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="best_offer common">
              <Image
                src={require("../assets/images/tag-free-img.png")}
                alt="best_offer"
              />
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="secure_payments common">
              <Image
                src={require("../assets/images/lock-free-img.png")}
                alt="secure_payments"
              />
              <h5>Worldwide Shipping</h5>
              <p>
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default WorldWide;