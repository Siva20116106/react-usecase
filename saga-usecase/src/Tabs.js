import {Link} from "react-router-dom";

export default function Tabs() {
    return (
    <div className="p">
        <Link className="pr" to="/"><button>New</button></Link>
        <Link className="pr" to="/c"><button>Complete</button></Link>
        <Link className="pr" to="/l"><button>Later</button></Link>
        <Link className="pr" to="/m"><button>Math</button></Link>
    </div>);
}