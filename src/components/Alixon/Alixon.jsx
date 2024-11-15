import "./Alixon.css"
import { CARDS  } from  "../../static/Static"
const Alixon = () => {
  return (
    <div className="alixon">
        {
          CARDS.map((item, index)=>{
            return(
              <div className="carda">
                <img src={item.img} alt="" />
                <h1>{item.title}</h1>
                <p>{item.lorem}</p>
                <div className="btns">
                <button className="btn1">Try now</button>
                <button className="btn2">Explore now</button>

                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Alixon