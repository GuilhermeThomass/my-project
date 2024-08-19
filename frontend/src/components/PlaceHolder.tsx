import { AlertTriangle } from "react-feather";
type PlaceHolderProps = {

}

export default function PlaceHolder({}:PlaceHolderProps) {
 return(
    <div className="">
        <div className="flex flex-col items-center">
            <AlertTriangle size={70} color="rgb(234 88 12)"/>
            <h2 className="text-lg text-orange-600">Place Holder</h2>
        </div>
    </div>
 );
}
