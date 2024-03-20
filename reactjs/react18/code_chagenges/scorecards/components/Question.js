const Question = ({ data: { questionText, points, type} }) => {
  const renderInput = () => {
    if (type=="Scale")
      return (
        <>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </>
      )

    if (type=="Yes/No")
      return (
        <>
          <span>Yes</span>
          <span>No</span>
        </>
      )

    return (
      <input></input>
    )
  };

  return (
    <>
      <div className="row">
        <div className="col-1">
          X
        </div>
        <div className="col-8">
          {questionText}
        </div>
        <div className="col-2">
          {points}
        </div>
      </div>
      <div className="row">
        { renderInput() }
      </div>
    </>
  )
}

export default Question;