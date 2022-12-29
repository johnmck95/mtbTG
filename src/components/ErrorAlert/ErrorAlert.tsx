import { BsExclamationTriangle } from 'react-icons/bs';
import { HStack, Text, Icon, GridItem } from '@chakra-ui/react';
import { ErrorAlertProps } from '../../types/interfaces';

export default function ErrorAlert({
  errorMessage,
}: ErrorAlertProps): JSX.Element {
  return (
    <GridItem colSpan={2} my={1} mr={-6}>
      <HStack>
        <Icon
          as={BsExclamationTriangle}
          color='brand.error'
          w={5}
          h={5}
          alignSelf={'flex-start'}
        />
        <Text color='brand.error' fontSize={['xs', 'sm']} fontWeight={500}>
          {errorMessage}
        </Text>
      </HStack>
    </GridItem>
  );
}
