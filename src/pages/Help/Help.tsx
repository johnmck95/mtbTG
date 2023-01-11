import {
	Container,
	Heading,
	Input,
	Text,
	VStack,
	HStack,
	InputGroup,
	InputRightElement,
	Icon,
	Divider,
	Link,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
	FaSearch,
	FaHandsHelping,
	FaTools,
	FaBicycle,
	FaChevronCircleLeft,
	FaChevronCircleRight,
} from 'react-icons/fa';

export default function Help(): JSX.Element {
	const smallScreen = 768;
	const [showPanel, setShowPanel] = useState(true);
	const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing 
		elit. Vestibulum ac felis sit amet tellus feugiat malesuada. Maecenas 
		lacus nunc, fermentum id purus vel, ornare sodales nulla. Suspendisse 
		congue arcu at dignissim porttitor. Vivamus tincidunt dui iaculis augue 
		aliquam, eleifend vulputate odio accumsan. Pellentesque nec sem congue, 
		varius magna vitae, mollis arcu. Aliquam ut tincidunt mauris, convallis 
		placerat orci. Maecenas lectus velit, laoreet nec risus vitae, mattis 
		lobortis nisi. Phasellus quis tempor leo. Ut dictum lacinia libero. 
		Praesent commodo sem sit amet sodales ultrices. Ut at metus et nisi 
		tincidunt consequat a a justo. Fusce nec pulvinar felis. Aenean nec 
		metus sodales, commodo nibh nec, auctor nisl. Etiam iaculis mi arcu, 
		sed sagittis dui congue quis.`;

	const useViewport = () => {
		const [width, setWidth] = useState(window.innerWidth);
		useEffect(() => {
			const handleWindowResize = () => setWidth(window.innerWidth);
			window.addEventListener('resize', handleWindowResize);
			if (width < smallScreen) setShowPanel(() => false);
			else setShowPanel(() => true);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, [width]);
		return { width };
	};
	const { width } = useViewport();

	function closePanelForSmallScreen(): void {
		if (width < smallScreen) setShowPanel((prevShowPanel) => !prevShowPanel);
	}

	return (
		<Container w='100%' maxW='64rem'>
			<HStack h='calc(100vh - 50px)' py='1rem' spacing='0px' align='start'>
				{showPanel && (
					<VStack
						alignItems='flex-start'
						overflow='scroll'
						position='sticky'
						w={width < smallScreen ? '100vw' : '50%'}
						h='100%'
						mr='1rem'
						css={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
							overflowStyle: 'none',
							scrollbarWidth: 'none',
						}}>
						<HStack
							justifyContent={'space-between'}
							position='sticky'
							top='0rem'
							overflow='clipped'
							bg='brand.flatBlack'
							opacity={1}
							w='100%'>
							<InputGroup maxW='70%'>
								<Input
									placeholder='Search'
									_placeholder={{
										opacity: 1,
										color: 'brand.white',
									}}
									borderColor='brand.white'
									bg='brand.flatBlack'
									mb='0.5rem'
								/>
								<InputRightElement>
									<Icon as={FaSearch} w={5} h={5} cursor='pointer' />
								</InputRightElement>
							</InputGroup>
							<Icon
								onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel)}
								as={FaChevronCircleLeft}
								w={5}
								h={5}
								cursor='pointer'
							/>
						</HStack>

						<Link
							onClick={closePanelForSmallScreen}
							href='#usingTheTuningGuide'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaHandsHelping} w={4} h={4} mr='0.75rem' />
								Using The Tuning Guide
							</Heading>
						</Link>
						<Link
							onClick={closePanelForSmallScreen}
							href='#understandingInputs'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaTools} w={4} h={4} mr='0.75rem' />
								Understanding Inputs
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#riderSize'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Rider Size
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handling'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handling
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#skillLevel'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Skill Level
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#reach'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Reach
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stack'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stack
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#bikeType'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Bike Type
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#yourSettings'>
							<Heading as='h3' fontSize={'md'}>
								<Icon as={FaBicycle} w={4} h={4} mr='0.75rem' />
								Your Setting
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handlebarWidth'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handlebar Width
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#handlebarRise'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Handlebar Rise
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stemLength'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stem Length
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#stemSpacers'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Stem Spacers
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#tirePressures'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Tire Pressures
							</Heading>
						</Link>
						<Link onClick={closePanelForSmallScreen} href='#tireInserts'>
							<Heading as='h4' fontSize={'sm'} pl='2rem'>
								Tire Inserts
							</Heading>
						</Link>
					</VStack>
				)}
				{!showPanel && (
					<Icon
						position='sticky'
						top='0.5rem'
						onClick={() => setShowPanel((prevShowPanel) => !prevShowPanel)}
						as={FaChevronCircleRight}
						w={5}
						h={5}
						mr='2rem'
						cursor='pointer'
					/>
				)}
				<VStack
					alignItems={'flex-start'}
					overflow='scroll'
					w={width < smallScreen ? (showPanel ? '0vw' : '100vw') : '100%'}
					h='100%'
					css={{
						'&::-webkit-scrollbar': {
							display: 'none',
						},
						overfloStyle: 'none',
						scrollbarWidth: 'none',
					}}>
					<Heading as='h1' fontSize={'4xl'} id='usingTheTuningGuide'>
						Using The Tuning Guide
					</Heading>
					<Divider />
					<Text>{loremIpsum}</Text>
					<Heading as='h1' fontSize={'4xl'} id='understandingInputs'>
						Understanding Inputs
					</Heading>
					<Divider />
					<Heading as='h2' fontSize={'2xl'} id='riderSize'>
						Rider Size
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='handling'>
						Handling
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='skillLevel'>
						Skill Level
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='reach'>
						Reach
					</Heading>

					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='stack'>
						Stack
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='bikeType'>
						Bike Type
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h1' fontSize={'4xl'} id='yourSettings'>
						Your Settings
					</Heading>
					<Divider />
					<Heading as='h2' fontSize={'2xl'} id='handlebarWidth'>
						HandleBar Width
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='handlebarRise'>
						Handlebar Rise
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='stemLength'>
						Stem Length
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='stemSpacers'>
						Stem Spacers
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='tirePressures'>
						Tire Pressures
					</Heading>
					<Text>{loremIpsum}</Text>
					<Heading as='h2' fontSize={'2xl'} id='tireInserts'>
						Tire Inserts
					</Heading>
					<Text>{loremIpsum}</Text>
				</VStack>
			</HStack>
		</Container>
	);
}
