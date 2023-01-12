import {
	Divider,
	Image,
	Text,
	Stack,
	VStack,
	Heading,
	AspectRatio,
	Container,
	List,
	ListItem,
	ListIcon,
	Box,
} from '@chakra-ui/react';
import headshot from '../../images/headshot.png';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

export default function About(): JSX.Element {
	return (
		<Box h='calc(100vh - 50px)' overflow='scroll'>
			<Container maxW='50rem' bg='brand.flatBlack'>
				<Stack
					direction={['column', 'row']}
					spacing='2rem'
					alignItems='flex-start'
					my='3rem'>
					<Image
						src={headshot}
						w={['20rem', '14rem']}
						maxW={['80%', '50%']}
						borderRadius='6px'
						m='10px'
						alignSelf='center'
					/>
					<VStack alignItems='flex-start' m='10px'>
						<Heading as='h2' size='2xl' alignSelf='center' textAlign='center'>
							{' '}
							John McKinnon
						</Heading>
						<Divider borderColor='brand.white' />
						<Heading as='h4' size='l' textAlign='center'>
							4<sup>th</sup> year Software Engineering Student at the University
							of Victoria
						</Heading>
						<Text
							py='1rem'
							alignSelf='center'
							textAlign='center'
							textDecoration='underline'>
							The Tuning Guide was built for two reasons
						</Text>
						<List>
							<ListItem mb='5px'>
								<ListIcon as={MdOutlineDirectionsBike} color='brand.blue' />
								To help mountain bikers have the best experience possible
							</ListItem>
							<ListItem>
								<ListIcon as={FaLaptopCode} color='brand.blue' />
								To build a portfolio to show future employers
							</ListItem>
						</List>
					</VStack>
				</Stack>
				<Divider borderColor='brand.white' />
				<Text textAlign='justify' textJustify='inter-word' paddingTop='2rem'>
					Growing up on Vancouver Island, I have been mountain biking for as
					long as I can remember. I raced downhill in my teenage years, then
					moved to Whistler the day after graduating high school. Since then, I
					have lived in Squamish, Vancouver, Victoria and New Zealand working in
					the Bike Industry as an Instructor, Service Advisor, Bike Mechanic,
					and Trail Builder. Nowadays, I am focussed on completing my Software
					Engineering degree at the University of Victoria, but I am still
					actively involved in the mountain bike community. I am a member of the
					Oak Bay Bikes Racing Team, where I won the Island Cup Enduro Elite
					Championship in 2019, and placed third in 2022. In my free time, I
					love to go for long trail rides, session the pump track with friends,
					and push my limits on the enduro bike.
				</Text>
				<AspectRatio my='3rem' maxW='768px'>
					<iframe
						title='John McKinnon || Self-Shot'
						src='https://www.youtube.com/embed/iF4yQ3PL_tY'
						allowFullScreen
					/>
				</AspectRatio>
			</Container>
		</Box>
	);
}
