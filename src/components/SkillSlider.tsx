import {useState} from "react"
import {Box, Slider, SliderTrack, SliderFilledTrack, Text, SliderThumb, Heading, Flex} from "@chakra-ui/react"

interface SkillSliderProps {
    handleChange: (name: string, value: string) => void;
}
export default function SkillSlider({handleChange}: SkillSliderProps){
        const [sliderValue, setSliderValue] = useState(0)

        function handleSlide(newSliderValue: number){
            setSliderValue(() => newSliderValue)

            let value = ""
            if(newSliderValue === 1)
                value = "beginner"
            else if(newSliderValue === 2)
                value = "novice"
            else if(newSliderValue === 3)
                value = "intermediate"
            else if(newSliderValue === 4)
                value = "advanced"
            else if(newSliderValue === 5)
                value = "expert"
            else if(newSliderValue === 6)
                value = "professional"
                
            handleChange("skillLevel", value)
        }
        return(
            <Box>
                <Slider defaultValue={3} min={1} max={6} step={1} onChange={(val) => handleSlide(val)}>
                    <SliderTrack bg='brand.lightGrey'>
                        <Box position='relative' right={10} />
                        <SliderFilledTrack bg={sliderValue !== 0?'brand.blue' : 'brand.white'} />
                    </SliderTrack>
                    <SliderThumb boxSize={5} bg={sliderValue !== 0?'brand.blue' : 'brand.white'}/>
                </Slider>
                { sliderValue === 1 &&
                        <Text fontSize="xs"> <b>BEGINNER:</b> You're new to mountain biking, and your first priority is trying to feel
                         comfortable on the bike. Trails are fairly smooth, and speeds are kept low.</Text>
                }
                { sliderValue === 2 &&
                    <Text fontSize="xs"> <b>NOVICE: </b>You're starting to get comfortable on the bike and challenging yourself by tackling 
                    terrain you previously found too difficult. Trails are getting rougher, and your speed is increasing. </Text>
                }
                { sliderValue === 3 &&
                      <Text fontSize="xs"> <b>INTERMEDIATE: </b>You're riding steeper terrain with roots and rocks in all weather conditions.
                       You feel more confident on the bike, and may be learning how to jump and drop small features.</Text>
                }
                { sliderValue === 4 &&
                     <Text fontSize="xs"> <b>ADVANCED: </b>You're a serious mountain biker that is confident riding most trails. You'll glady ride
                     medium sized jumps and drops, as well as steep rolls where proper braking is critical.</Text>
                }
                { sliderValue === 5 &&
                    <Text fontSize="xs"> <b>EXPERT: </b><i>Regional fast person.</i> There's very little terrain you shy away from, and you ride it aggressively.
                     You're actively pumping and scrubbing the terrain to carry speed, or riding the most challenging features with precision.</Text>
                }
                { sliderValue === 6 &&
                     <Text fontSize="xs"> <b>PROFESSIONAL: </b>An exceptionally skilled rider who makes the local heros scratch their heads. 
                     You can achieve great results nationally and hold your own at an international event. </Text>
                }
            </Box>
        )
}
