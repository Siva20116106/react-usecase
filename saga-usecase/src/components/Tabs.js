import {Link} from "react-router-dom";

export default function Tabs() {
    return (
    <div className="p">
        <Link className="pr5" to="/"><button>New</button></Link>
        <Link className="pr5" to="/c"><button>Complete</button></Link>
        <Link className="pr5" to="/l"><button>Later</button></Link>
        <Link className="pr5" to="/m"><button>Math</button></Link>
        <Link className="pr5" to="/w"><button>Weather</button></Link>
    </div>);
}