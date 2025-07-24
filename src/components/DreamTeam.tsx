import {friends} from "../utils/constants.js";
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border rounded-b-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.map((f, i) => <Friend picture={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;