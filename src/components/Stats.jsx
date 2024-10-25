

export default function Stats({stata}) {
  return (
    <div className="stats">
      <Stat label="Words" number={stata.words}/>
      <Stat label="Characters" number={stata.d}/>
      <Stat label="Instagram" number={stata.instagram}/>
      <Stat label="Facebook" number={stata.facebook}/>
    </div>
  )
}
function Stat({label,number}){
  return (
   
      <section className="stat">
      <span className={`stat_number ${number<0?"stat__number--limit":""}`}>{number}</span>
      <h2 className="second-Heading">{label}</h2>
      </section>
  )
}
 