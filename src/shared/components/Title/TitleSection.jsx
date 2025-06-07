import AnimationIn from '../../animations/AnimationIn'

const TitleSection = ({title}) => {
  return (
    <AnimationIn direction="top">
        <h2 className="text-6xl font-bold title-shadow" style={{fontFamily:"Beau Rivage"}}>{title}</h2>
    </AnimationIn>
  )
}

export default TitleSection