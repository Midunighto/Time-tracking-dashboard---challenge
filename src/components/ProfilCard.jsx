import data from "../../data.json";

function ProfilCard({ setDisplay }) {
  return (
    <div className="profilCard">
      <div className="profil">
        <div className="profil-image">
          <img src="../image-jeremy.png" alt="" />
        </div>
        <div className="profil-infos">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            setDisplay("daily");
          }}
        >
          Daily
        </button>
        <button
          onClick={() => {
            setDisplay("weekly");
          }}
        >
          Weekly
        </button>
        <button
          onClick={() => {
            setDisplay("monthly");
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default ProfilCard;
