import "./style.css"

export const PredictionContent = ({prediction}) => {
  return <div className="prediction">
    <p className="date">Predicted on: {prediction.date}</p>
    <p className="heading">Title: {prediction.title}</p>
    <p className="text">Prediction: {prediction.description}</p>
  </div>
}