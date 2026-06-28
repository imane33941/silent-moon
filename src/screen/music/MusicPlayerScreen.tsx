import { ImageBackground, Text } from "react-native";
const imagebg = require("../../../assets/music/player-bg.png")
export default function MusicPlayerScreen() {
    return (
        <ImageBackground
            source={imagebg}
            className="flex-1 w-full h-full"
            resizeMode="cover"
        >
            <Text>Concentration</Text>
            <Text>7 JOURS DE CALME</Text>
        </ImageBackground>
    )


}