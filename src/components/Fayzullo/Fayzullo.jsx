import './Fayzullo.css'
import img from '../../assets/Group 48095504.png'

const Fayzullo = () => {
    return (
    <>
     <div className="fayzullo_container">
        <div className="left_box">
            <h1>Explore the future of <br /> 
            the <span>Metaverse</span></h1>
            <p>Let's explore and create your exprience with <br />
            metavese.</p>
            <div className="btns">
                <button className='gradient'>Get Started</button>
                <button className='gradient2'>Explore Now</button>
            </div>
            <div className="grid_atwork">
                <div className="column_atwork">
                    <h2>29K+</h2>
                    <p>Atworks</p>
                </div>
                <div className="column_atwork">
                    <h2>18K+</h2>
                    <p>Artists</p>
                </div>
                <div className="column_atwork">
                    <h2>25K+</h2>
                    <p>Auction</p>
                </div>
            </div>
        </div>
        <div className="right_box">
            <img src={img} alt="" />
        </div>
    </div>
    </>
    )
}
export default Fayzullo