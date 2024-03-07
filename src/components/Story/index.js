import { TouchableOpacity, Image} from "react-native";

export default function Story({image}){
    return(
        <TouchableOpacity>
        <Image style={{ width: 100, height: 100, borderRadius: 50}} source={image}/>
        </TouchableOpacity>
    );
}