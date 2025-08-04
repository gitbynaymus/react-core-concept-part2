import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [fours, setFours] = useState(0);

        const handleSingle = () =>{
            const updatedRuns = runs + 1;
            setRuns(updatedRuns);
        }
        const handleDouble = () =>{
            const updatedRuns = runs + 2;
            setRuns(updatedRuns);
        }
        const handleSix = () =>{
            const updatedRuns = runs + 6;
            setRuns(updatedRuns);
            const updatedSixes = sixes + 1;
            setSixes(updatedSixes);
        }
        const handleFour = () =>{
            const updatedRuns = runs + 4;
            setRuns(updatedRuns);
            const updatedFours = fours + 1;
            setFours(updatedFours);
        }
    


        



    

    return(
        <>
            <h3>Player: Bangla Batsman</h3>
            <p>
                <small>Total fours: {fours} </small>
                <br />
                <small>Total Sixs: {sixes} </small>
            </p>
            {
                runs >= 50 && <h3>You Score: 50 </h3>
                
            }
            {
                runs >= 100 && <h3>congratulations <br /> You Score: 100 </h3>
            }

            <h1>Score: {runs} </h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </>
    )
}